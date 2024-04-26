"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { genRandomSalt } from "@se-2/hardhat/maci-ts/crypto";
import { Keypair, Message, PCommand, PubKey } from "@se-2/hardhat/maci-ts/domainobjs";
import { useContractRead, useContractWrite } from "wagmi";
import PollAbi from "~~/abi/Poll";
import VoteCard from "~~/components/card/VoteCard";
import { useAuthContext } from "~~/contexts/AuthContext";
import { useAuthUserOnly } from "~~/hooks/useAuthUserOnly";
import { useFetchPoll } from "~~/hooks/useFetchPoll";

export default function PollDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: poll, error, isLoading } = useFetchPoll(id);

  useAuthUserOnly({});

  const { keypair, stateIndex } = useAuthContext();

  const [votes] = useState<{ index: number; votes: number; voteMessage: { message: Message; encKeyPair: Keypair } }[]>(
    [],
  );

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleCardClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const castVote = async () => {
    console.log("Voting for candidate", clickedIndex);
    console.log("A", message?.message.asContractParam(), message?.encKeyPair.pubKey.asContractParam());
    // // navigate to the home page
    // try {
    //   // setLoaderMessage("Casting the vote, please wait...");

    //   // router.push(`/voted-success?id=${clickedIndex}`);
    // } catch (err) {
    //   console.log("err", err);
    //   // toast.error("Casting vote failed, please try again ");
    // }
  };

  useEffect(() => {
    if (votes.length === 0) {
      return;
    }

    (async () => {
      try {
        await writeAsync();
      } catch (err) {
        console.log({ err });
      }
    })();
  }, [votes]);

  const { data: coordinatorPubKeyResult } = useContractRead({
    abi: PollAbi,
    address: poll?.pollContracts.poll,
    functionName: "coordinatorPubKey",
  });

  const [message, setMessage] = useState<{ message: Message; encKeyPair: Keypair }>();

  console.log("message", message);

  const { writeAsync } = useContractWrite({
    abi: PollAbi,
    address: poll?.pollContracts.poll,
    functionName: "publishMessage",
    args: message ? [message.message.asContractParam(), message.encKeyPair.pubKey.asContractParam()] : undefined,
  });

  const [coordinatorPubKey, setCoordinatorPubKey] = useState<PubKey>();

  useEffect(() => {
    if (!coordinatorPubKeyResult) {
      return;
    }

    const coordinatorPubKey_ = new PubKey([
      BigInt((coordinatorPubKeyResult as any)[0].toString()),
      BigInt((coordinatorPubKeyResult as any)[1].toString()),
    ]);

    setCoordinatorPubKey(coordinatorPubKey_);
  }, [coordinatorPubKeyResult]);

  useEffect(() => {
    if (clickedIndex === null || !coordinatorPubKey || !keypair || !stateIndex) {
      return;
    }

    console.log(
      stateIndex, // stateindex
      keypair.pubKey, // userMaciPubKey
      BigInt(clickedIndex),
      1n,
      1n, // nonce
      BigInt(id),
      genRandomSalt(),
    );

    const command: PCommand = new PCommand(
      stateIndex, // stateindex
      keypair.pubKey, // userMaciPubKey
      BigInt(clickedIndex),
      1n,
      1n, // nonce
      BigInt(id),
      genRandomSalt(),
    );

    const signature = command.sign(keypair.privKey);

    const encKeyPair = new Keypair();

    const message = command.encrypt(signature, Keypair.genEcdhSharedKey(encKeyPair.privKey, coordinatorPubKey));

    setMessage({ message, encKeyPair });
  }, [id, clickedIndex, coordinatorPubKey, keypair, stateIndex]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Poll not found</div>;
  console.log(poll);

  return (
    <div className="container mx-auto pt-10">
      <div className="flex h-full flex-col md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex flex-row items-center my-5">
          <div className="text-2xl font-bold ">Vote for {poll?.name}</div>
        </div>
        {poll?.options.map((candidate, index) => (
          <div className="pb-5" key={index}>
            <VoteCard clicked={clickedIndex === index} onClick={() => handleCardClick(index)}>
              <div>{candidate}</div>
            </VoteCard>

            {/* add a votes number input here */}
          </div>
        ))}
        <div className={`mt-2 ${clickedIndex !== null ? " shadow-2xl" : ""}`}>
          <button
            onClick={() => {
              castVote();
            }}
            disabled={!true}
            className="hover:border-black border-2 border-accent w-full text-lg text-center bg-accent py-3 rounded-xl font-bold"
          >
            {true ? "Vote Now" : "Voting Closed"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
