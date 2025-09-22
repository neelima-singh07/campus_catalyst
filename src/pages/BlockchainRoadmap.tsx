import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { Blocks } from "lucide-react";

const blockchainSteps = [
  {
    id: 1,
    title: "Blockchain Fundamentals",
    description: "Understand blockchain technology, cryptocurrencies, and decentralized systems.",
    duration: "3-4 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Blockchain Basics Course",
      "Bitcoin Whitepaper",
      "Cryptocurrency Fundamentals",
      "Distributed Systems Principles"
    ],
    projects: [
      "Simple Blockchain Implementation",
      "Cryptocurrency Tracker",
      "Blockchain Explorer"
    ]
  },
  {
    id: 2,
    title: "Cryptography & Security",
    description: "Learn cryptographic principles, hashing, digital signatures, and security concepts.",
    duration: "4-5 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Cryptography for Blockchain",
      "Hash Functions Guide",
      "Digital Signatures",
      "Public Key Cryptography"
    ],
    projects: [
      "Digital Signature Verifier",
      "Merkle Tree Implementation",
      "Cryptographic Hash Calculator"
    ]
  },
  {
    id: 3,
    title: "Ethereum & Smart Contracts",
    description: "Develop smart contracts using Solidity and understand the Ethereum ecosystem.",
    duration: "6-8 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Solidity Documentation",
      "Ethereum Development Guide",
      "Smart Contract Patterns",
      "Gas Optimization Techniques"
    ],
    projects: [
      "ERC-20 Token Contract",
      "Voting System DApp",
      "Simple Crowdfunding Contract"
    ]
  },
  {
    id: 4,
    title: "Web3 Development",
    description: "Build decentralized applications (DApps) using Web3.js, ethers.js, and frontend frameworks.",
    duration: "5-6 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Web3.js Documentation",
      "Ethers.js Tutorial",
      "React + Web3 Integration",
      "MetaMask Integration"
    ],
    projects: [
      "DeFi Dashboard",
      "NFT Marketplace Frontend",
      "DAO Governance Interface"
    ]
  },
  {
    id: 5,
    title: "DeFi & Advanced Protocols",
    description: "Understand decentralized finance protocols, yield farming, and liquidity pools.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "DeFi Protocols Overview",
      "Automated Market Makers",
      "Yield Farming Strategies",
      "Flash Loans & Arbitrage"
    ],
    projects: [
      "DEX Clone (Uniswap-like)",
      "Yield Farming Protocol",
      "DeFi Analytics Dashboard"
    ]
  },
  {
    id: 6,
    title: "NFTs & Digital Assets",
    description: "Create and trade non-fungible tokens, understand metadata standards and marketplaces.",
    duration: "3-4 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "ERC-721 & ERC-1155 Standards",
      "NFT Metadata Standards",
      "IPFS for Asset Storage",
      "NFT Marketplace Development"
    ],
    projects: [
      "NFT Collection Contract",
      "NFT Minting DApp",
      "Digital Art Marketplace"
    ]
  },
  {
    id: 7,
    title: "Layer 2 & Scaling Solutions",
    description: "Learn about blockchain scalability, Layer 2 solutions, and cross-chain protocols.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Polygon Development",
      "Optimistic Rollups",
      "zk-SNARKs & zk-STARKs",
      "Cross-chain Bridges"
    ],
    projects: [
      "Layer 2 DApp Deployment",
      "Cross-chain Token Bridge",
      "Scalability Benchmarking"
    ]
  },
  {
    id: 8,
    title: "Enterprise Blockchain & Career",
    description: "Explore enterprise blockchain solutions, career paths, and advanced topics.",
    duration: "3-4 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Hyperledger Fabric",
      "Enterprise Use Cases",
      "Blockchain Career Guide",
      "Industry Best Practices"
    ],
    projects: [
      "Supply Chain Tracking System",
      "Identity Management Solution",
      "Blockchain Portfolio"
    ]
  }
];

const BlockchainRoadmap = () => {
  return (
    <RoadmapTemplate
      title="Blockchain"
      description="Master blockchain technology, smart contracts, and decentralized application development"
      icon={Blocks}
      color="bg-indigo-500"
      duration="7-9 months"
      difficulty="Intermediate to Advanced"
      students="4,800+"
      rating={4.5}
      steps={blockchainSteps}
      pdfUrl="/pdfs/blockchain-roadmap.pdf"
      prerequisites={["Programming fundamentals", "Basic cryptography", "Web development basics"]}
      careerPaths={[
        "Blockchain Developer",
        "Smart Contract Engineer",
        "DeFi Developer",
        "Blockchain Architect",
        "Web3 Developer"
      ]}
    />
  );
};

export default BlockchainRoadmap;