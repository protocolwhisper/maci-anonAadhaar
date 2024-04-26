export default [
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
        components: [
          {
            internalType: "contract IMACI",
            name: "maci",
            type: "address",
          },
          {
            internalType: "contract AccQueue",
            name: "messageAq",
            type: "address",
          },
          {
            internalType: "contract TopupCredit",
            name: "topupCredit",
            type: "address",
          },
        ],
        internalType: "struct Params.ExtContracts",
        name: "_extContracts",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidBatchLength",
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
    inputs: [],
    name: "PollAlreadyInit",
    type: "error",
  },
  {
    inputs: [],
    name: "StateAqAlreadyMerged",
    type: "error",
  },
  {
    inputs: [],
    name: "StateAqSubtreesNeedMerge",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyMessages",
    type: "error",
  },
  {
    inputs: [],
    name: "VotingPeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "VotingPeriodOver",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_stateRoot",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_numSignups",
        type: "uint256",
      },
    ],
    name: "MergeMaciStateAq",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_numSrQueueOps",
        type: "uint256",
      },
    ],
    name: "MergeMaciStateAqSubRoots",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_messageRoot",
        type: "uint256",
      },
    ],
    name: "MergeMessageAq",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_numSrQueueOps",
        type: "uint256",
      },
    ],
    name: "MergeMessageAqSubRoots",
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
        indexed: false,
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
        indexed: false,
        internalType: "struct DomainObjs.PubKey",
        name: "_encPubKey",
        type: "tuple",
      },
    ],
    name: "PublishMessage",
    type: "event",
  },
  {
    anonymous: false,
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
        indexed: false,
        internalType: "struct DomainObjs.Message",
        name: "_message",
        type: "tuple",
      },
    ],
    name: "TopupMessage",
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
    inputs: [],
    name: "coordinatorPubKeyHash",
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
    name: "currentSbCommitment",
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
    name: "extContracts",
    outputs: [
      {
        internalType: "contract IMACI",
        name: "maci",
        type: "address",
      },
      {
        internalType: "contract AccQueue",
        name: "messageAq",
        type: "address",
      },
      {
        internalType: "contract TopupCredit",
        name: "topupCredit",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployTimeAndDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "pollDeployTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pollDuration",
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
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxValues",
    outputs: [
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
    name: "mergeMaciStateAq",
    outputs: [],
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
    name: "mergeMaciStateAqSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mergeMessageAq",
    outputs: [],
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
    ],
    name: "mergeMessageAqSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mergedStateRoot",
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
    name: "numMessages",
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
    name: "numSignUpsAndMessages",
    outputs: [
      {
        internalType: "uint256",
        name: "numSUps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numMsgs",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numSignups",
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
    name: "publishMessage",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "struct DomainObjs.Message[]",
        name: "_messages",
        type: "tuple[]",
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
        internalType: "struct DomainObjs.PubKey[]",
        name: "_encPubKeys",
        type: "tuple[]",
      },
    ],
    name: "publishMessageBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "stateAqMerged",
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
    inputs: [
      {
        internalType: "uint256",
        name: "stateIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "topup",
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
] as const;
