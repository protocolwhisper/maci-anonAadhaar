const deployedContracts = {
  31337: {
    ConstantInitialVoiceCreditProxy: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_balance",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "getVoiceCredits",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        getVoiceCredits:
          "contracts/maci-contracts/initialVoiceCreditProxy/InitialVoiceCreditProxy.sol",
      },
      deploymentBlockNumber: 1,
    },
    FreeForAllGatekeeper: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          inputs: [],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "register",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_maci",
              type: "address",
            },
          ],
          name: "setMaciInstance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
      deploymentBlockNumber: 3,
    },
    MACI: {
      address: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IPollFactory",
              name: "_pollFactory",
              type: "address",
            },
            {
              internalType: "contract IMessageProcessorFactory",
              name: "_messageProcessorFactory",
              type: "address",
            },
            {
              internalType: "contract ITallyFactory",
              name: "_tallyFactory",
              type: "address",
            },
            {
              internalType: "contract SignUpGatekeeper",
              name: "_signUpGatekeeper",
              type: "address",
            },
            {
              internalType: "contract InitialVoiceCreditProxy",
              name: "_initialVoiceCreditProxy",
              type: "address",
            },
            {
              internalType: "contract TopupCredit",
              name: "_topupCredit",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "_stateTreeDepth",
              type: "uint8",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_caller",
              type: "address",
            },
          ],
          name: "CallerMustBePoll",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMessage",
          type: "error",
        },
        {
          inputs: [],
          name: "MaciPubKeyLargerThanSnarkFieldSize",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "pollAddr",
              type: "address",
            },
          ],
          name: "PollAddressDoesNotExist",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
          ],
          name: "PollDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "PoseidonHashLibrariesNotLinked",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
          ],
          name: "PreviousPollNotCompleted",
          type: "error",
        },
        {
          inputs: [],
          name: "PubKeyAlreadyRegistered",
          type: "error",
        },
        {
          inputs: [],
          name: "SignupTemporaryBlocked",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManySignups",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "_coordinatorPubKeyX",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "_coordinatorPubKeyY",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "poll",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "messageProcessor",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tally",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct MACI.PollContracts",
              name: "pollAddr",
              type: "tuple",
            },
          ],
          name: "DeployPoll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_stateIndex",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "_userPubKeyX",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "_userPubKeyY",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_voiceCreditBalance",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_timestamp",
              type: "uint256",
            },
          ],
          name: "SignUp",
          type: "event",
        },
        {
          inputs: [],
          name: "MESSAGE_DATA_LENGTH",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_duration",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "intStateTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeSubDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "voteOptionTreeDepth",
                  type: "uint8",
                },
              ],
              internalType: "struct Params.TreeDepths",
              name: "_treeDepths",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "_coordinatorPubKey",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_vkRegistry",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_isQv",
              type: "bool",
            },
          ],
          name: "deployPoll",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "poll",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "messageProcessor",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tally",
                  type: "address",
                },
              ],
              internalType: "struct MACI.PollContracts",
              name: "pollAddr",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "getPoll",
          outputs: [
            {
              internalType: "address",
              name: "poll",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_poll",
              type: "address",
            },
          ],
          name: "getPollId",
          outputs: [
            {
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStateAqRoot",
          outputs: [
            {
              internalType: "uint256",
              name: "root",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "array",
              type: "uint256[2]",
            },
          ],
          name: "hash2",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[3]",
              name: "array",
              type: "uint256[3]",
            },
          ],
          name: "hash3",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "array",
              type: "uint256[4]",
            },
          ],
          name: "hash4",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[5]",
              name: "array",
              type: "uint256[5]",
            },
          ],
          name: "hash5",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "left",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "right",
              type: "uint256",
            },
          ],
          name: "hashLeftRight",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "msgType",
                  type: "uint256",
                },
                {
                  internalType: "uint256[10]",
                  name: "data",
                  type: "uint256[10]",
                },
              ],
              internalType: "struct DomainObjs.Message",
              name: "_message",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "_encPubKey",
              type: "tuple",
            },
          ],
          name: "hashMessageAndEncPubKey",
          outputs: [
            {
              internalType: "uint256",
              name: "msgHash",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct DomainObjs.PubKey",
                  name: "pubKey",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "voiceCreditBalance",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.StateLeaf",
              name: "_stateLeaf",
              type: "tuple",
            },
          ],
          name: "hashStateLeaf",
          outputs: [
            {
              internalType: "uint256",
              name: "ciphertext",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "initialVoiceCreditProxy",
          outputs: [
            {
              internalType: "contract InitialVoiceCreditProxy",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "isPublicKeyRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "manager",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "mergeStateAq",
          outputs: [
            {
              internalType: "uint256",
              name: "root",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_numSrQueueOps",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "mergeStateAqSubRoots",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "messageProcessorFactory",
          outputs: [
            {
              internalType: "contract IMessageProcessorFactory",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextPollId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "numSignUps",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "dataToPad",
              type: "uint256[2]",
            },
            {
              internalType: "uint256",
              name: "msgType",
              type: "uint256",
            },
          ],
          name: "padAndHashMessage",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "msgType",
                  type: "uint256",
                },
                {
                  internalType: "uint256[10]",
                  name: "data",
                  type: "uint256[10]",
                },
              ],
              internalType: "struct DomainObjs.Message",
              name: "message",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "padKey",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "msgHash",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "pollFactory",
          outputs: [
            {
              internalType: "contract IPollFactory",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "pollIds",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "polls",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "array",
              type: "uint256[]",
            },
          ],
          name: "sha256Hash",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "_pubKey",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "_signUpGatekeeperData",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_initialVoiceCreditProxyData",
              type: "bytes",
            },
          ],
          name: "signUp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signUpGatekeeper",
          outputs: [
            {
              internalType: "contract SignUpGatekeeper",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "stateAq",
          outputs: [
            {
              internalType: "contract AccQueue",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "stateTreeDepth",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "subtreesMerged",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tallyFactory",
          outputs: [
            {
              internalType: "contract ITallyFactory",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "topupCredit",
          outputs: [
            {
              internalType: "contract TopupCredit",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_manager",
              type: "address",
            },
          ],
          name: "updateManager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        getStateAqRoot: "contracts/maci-contracts/interfaces/IMACI.sol",
        mergeStateAq: "contracts/maci-contracts/interfaces/IMACI.sol",
        mergeStateAqSubRoots: "contracts/maci-contracts/interfaces/IMACI.sol",
        numSignUps: "contracts/maci-contracts/interfaces/IMACI.sol",
        stateAq: "contracts/maci-contracts/interfaces/IMACI.sol",
        stateTreeDepth: "contracts/maci-contracts/interfaces/IMACI.sol",
        MESSAGE_DATA_LENGTH: "contracts/maci-contracts/utilities/Utilities.sol",
        hash2: "contracts/maci-contracts/utilities/Utilities.sol",
        hash3: "contracts/maci-contracts/utilities/Utilities.sol",
        hash4: "contracts/maci-contracts/utilities/Utilities.sol",
        hash5: "contracts/maci-contracts/utilities/Utilities.sol",
        hashLeftRight: "contracts/maci-contracts/utilities/Utilities.sol",
        hashMessageAndEncPubKey:
          "contracts/maci-contracts/utilities/Utilities.sol",
        hashStateLeaf: "contracts/maci-contracts/utilities/Utilities.sol",
        padAndHashMessage: "contracts/maci-contracts/utilities/Utilities.sol",
        sha256Hash: "contracts/maci-contracts/utilities/Utilities.sol",
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
      deploymentBlockNumber: 23,
    },
    MessageProcessorFactory: {
      address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      abi: [
        {
          inputs: [],
          name: "MESSAGE_DATA_LENGTH",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_vkRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "_poll",
              type: "address",
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_isQv",
              type: "bool",
            },
          ],
          name: "deploy",
          outputs: [
            {
              internalType: "address",
              name: "messageProcessorAddr",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        MESSAGE_DATA_LENGTH:
          "contracts/maci-contracts/utilities/DomainObjs.sol",
      },
      deploymentBlockNumber: 19,
    },
    PollFactory: {
      address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      abi: [
        {
          inputs: [],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMaxValues",
          type: "error",
        },
        {
          inputs: [],
          name: "MESSAGE_DATA_LENGTH",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_duration",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "maxMessages",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxVoteOptions",
                  type: "uint256",
                },
              ],
              internalType: "struct Params.MaxValues",
              name: "_maxValues",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "intStateTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeSubDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "voteOptionTreeDepth",
                  type: "uint8",
                },
              ],
              internalType: "struct Params.TreeDepths",
              name: "_treeDepths",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "_coordinatorPubKey",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "_maci",
              type: "address",
            },
            {
              internalType: "contract TopupCredit",
              name: "_topupCredit",
              type: "address",
            },
            {
              internalType: "address",
              name: "_pollOwner",
              type: "address",
            },
          ],
          name: "deploy",
          outputs: [
            {
              internalType: "address",
              name: "pollAddr",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        MESSAGE_DATA_LENGTH:
          "contracts/maci-contracts/utilities/DomainObjs.sol",
        deploy: "contracts/maci-contracts/interfaces/IPollFactory.sol",
      },
      deploymentBlockNumber: 17,
    },
    PollManager: {
      address: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
      abi: [
        {
          inputs: [
            {
              internalType: "contract MACI",
              name: "_maci",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_isQv",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "maciPollId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "poll",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "messageProcessor",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tally",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct MACI.PollContracts",
              name: "pollContracts",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string[]",
              name: "options",
              type: "string[]",
            },
            {
              indexed: false,
              internalType: "string",
              name: "ipfsHash",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "PollCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "maciPollId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "tallyJsonCID",
              type: "string",
            },
          ],
          name: "PollTallyCIDUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "MESSAGE_DATA_LENGTH",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "coordinatorPubKey",
          outputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "y",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "_options",
              type: "string[]",
            },
            {
              internalType: "string",
              name: "_ipfsHash",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_duration",
              type: "uint256",
            },
          ],
          name: "createPoll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "fetchPoll",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maciPollId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "encodedOptions",
                  type: "bytes",
                },
                {
                  internalType: "string",
                  name: "ipfsHash",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "poll",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "messageProcessor",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "tally",
                      type: "address",
                    },
                  ],
                  internalType: "struct MACI.PollContracts",
                  name: "pollContracts",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "numOfOptions",
                  type: "uint256",
                },
                {
                  internalType: "string[]",
                  name: "options",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "tallyJsonCID",
                  type: "string",
                },
              ],
              internalType: "struct PollManager.PollData",
              name: "poll_",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_page",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_perPage",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_ascending",
              type: "bool",
            },
          ],
          name: "fetchPolls",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maciPollId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "encodedOptions",
                  type: "bytes",
                },
                {
                  internalType: "string",
                  name: "ipfsHash",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "poll",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "messageProcessor",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "tally",
                      type: "address",
                    },
                  ],
                  internalType: "struct MACI.PollContracts",
                  name: "pollContracts",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "numOfOptions",
                  type: "uint256",
                },
                {
                  internalType: "string[]",
                  name: "options",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "tallyJsonCID",
                  type: "string",
                },
              ],
              internalType: "struct PollManager.PollData[]",
              name: "polls_",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isQv",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maci",
          outputs: [
            {
              internalType: "contract MACI",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "pollIdByAddress",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "intStateTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeSubDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "messageTreeDepth",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "voteOptionTreeDepth",
                  type: "uint8",
                },
              ],
              internalType: "struct Params.TreeDepths",
              name: "_treeDepths",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "x",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "y",
                  type: "uint256",
                },
              ],
              internalType: "struct DomainObjs.PubKey",
              name: "_coordinatorPubKey",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_vkRegistry",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_useSubsidy",
              type: "bool",
            },
          ],
          name: "setConfig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalPolls",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "treeDepths",
          outputs: [
            {
              internalType: "uint8",
              name: "intStateTreeDepth",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "messageTreeSubDepth",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "messageTreeDepth",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "voteOptionTreeDepth",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_tallyJsonCID",
              type: "string",
            },
          ],
          name: "updatePollTallyCID",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "useSubsidy",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "verifier",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "vkRegistry",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        MESSAGE_DATA_LENGTH:
          "contracts/maci-contracts/utilities/DomainObjs.sol",
      },
      deploymentBlockNumber: 29,
    },
    PoseidonT3: {
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "input",
              type: "uint256[2]",
            },
          ],
          name: "poseidon",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
      deploymentBlockNumber: 9,
    },
    PoseidonT4: {
      address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[3]",
              name: "input",
              type: "uint256[3]",
            },
          ],
          name: "poseidon",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
      deploymentBlockNumber: 11,
    },
    PoseidonT5: {
      address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "input",
              type: "uint256[4]",
            },
          ],
          name: "poseidon",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
      deploymentBlockNumber: 13,
    },
    PoseidonT6: {
      address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[5]",
              name: "input",
              type: "uint256[5]",
            },
          ],
          name: "poseidon",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
      deploymentBlockNumber: 15,
    },
    TallyFactory: {
      address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_vkRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "_poll",
              type: "address",
            },
            {
              internalType: "address",
              name: "_messageProcessor",
              type: "address",
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_isQv",
              type: "bool",
            },
          ],
          name: "deploy",
          outputs: [
            {
              internalType: "address",
              name: "tallyAddr",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        deploy: "contracts/maci-contracts/interfaces/ITallyFactory.sol",
      },
      deploymentBlockNumber: 21,
    },
    TopupCredit: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ExceedLimit",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DECIMALS",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAXIMUM_AIRDROP_AMOUNT",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "airdrop",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "airdropTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        allowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        approve: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        balanceOf: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        decimals: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        decreaseAllowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        increaseAllowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        name: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        symbol: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        totalSupply: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        transfer: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        transferFrom: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
      deploymentBlockNumber: 7,
    },
    Verifier: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          inputs: [],
          name: "InvalidInputVal",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidProofQ",
          type: "error",
        },
        {
          inputs: [],
          name: "PairingAddFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "PairingMulFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "PairingOpcodeFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "PRIME_Q",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[8]",
              name: "_proof",
              type: "uint256[8]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "vk",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "input",
              type: "uint256",
            },
          ],
          name: "verify",
          outputs: [
            {
              internalType: "bool",
              name: "isValid",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        verify: "contracts/maci-contracts/interfaces/IVerifier.sol",
      },
      deploymentBlockNumber: 5,
    },
    VkRegistry: {
      address: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      abi: [
        {
          inputs: [],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ProcessVkAlreadySet",
          type: "error",
        },
        {
          inputs: [],
          name: "ProcessVkNotSet",
          type: "error",
        },
        {
          inputs: [],
          name: "SubsidyVkNotSet",
          type: "error",
        },
        {
          inputs: [],
          name: "TallyVkAlreadySet",
          type: "error",
        },
        {
          inputs: [],
          name: "TallyVkNotSet",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum IVkRegistry.Mode",
              name: "mode",
              type: "uint8",
            },
          ],
          name: "ProcessVkSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum IVkRegistry.Mode",
              name: "mode",
              type: "uint8",
            },
          ],
          name: "TallyVkSet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageBatchSize",
              type: "uint256",
            },
          ],
          name: "genProcessVkSig",
          outputs: [
            {
              internalType: "uint256",
              name: "sig",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_intStateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
          ],
          name: "genTallyVkSig",
          outputs: [
            {
              internalType: "uint256",
              name: "sig",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageBatchSize",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "getProcessVk",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "vk",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "getProcessVkBySig",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "vk",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_intStateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "getTallyVk",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "vk",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "getTallyVkBySig",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "vk",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageBatchSize",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "hasProcessVk",
          outputs: [
            {
              internalType: "bool",
              name: "isSet",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_intStateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "hasTallyVk",
          outputs: [
            {
              internalType: "bool",
              name: "isSet",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "isProcessVkSet",
          outputs: [
            {
              internalType: "bool",
              name: "isSet",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sig",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
          ],
          name: "isTallyVkSet",
          outputs: [
            {
              internalType: "bool",
              name: "isSet",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_stateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_intStateTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_voteOptionTreeDepth",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_messageBatchSize",
              type: "uint256",
            },
            {
              internalType: "enum IVkRegistry.Mode",
              name: "_mode",
              type: "uint8",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "_processVk",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point",
                  name: "alpha1",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "beta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "gamma2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[2]",
                      name: "x",
                      type: "uint256[2]",
                    },
                    {
                      internalType: "uint256[2]",
                      name: "y",
                      type: "uint256[2]",
                    },
                  ],
                  internalType: "struct Pairing.G2Point",
                  name: "delta2",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "x",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "y",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Pairing.G1Point[]",
                  name: "ic",
                  type: "tuple[]",
                },
              ],
              internalType: "struct SnarkCommon.VerifyingKey",
              name: "_tallyVk",
              type: "tuple",
            },
          ],
          name: "setVerifyingKeys",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        getProcessVk: "contracts/maci-contracts/interfaces/IVkRegistry.sol",
        getTallyVk: "contracts/maci-contracts/interfaces/IVkRegistry.sol",
      },
      deploymentBlockNumber: 26,
    },
  },
};

export default deployedContracts;
