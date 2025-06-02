"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DeFi Trading Platform",
    description: "A comprehensive decentralized exchange with automated market making, yield farming, and advanced trading features built on Ethereum.",
    image: "💰",
    status: "Live" as const,
    technologies: ["React", "Solidity", "Web3.js", "Hardhat", "TypeScript"],
    githubUrl: "https://github.com/Madhusahitya/Defi__Portfolio",
    liveUrl: "https://defilanding.netlify.app/",
  },
  {
    title: "NFT Marketplace",
    description: "Full-stack NFT marketplace with minting, trading, and auction features. Supports multiple blockchains and layer 2 solutions.",
    image: "💎",
    status: "In Progress" as const,
    technologies: ["Next.js", "Solidity", "IPFS", "Polygon", "Tailwind"],
    githubUrl: "https://github.com/Madhusahitya/nft_dapp",
  },
  {
    title: "DAO Governance Platform",
    description: "Decentralized autonomous organization platform enabling community governance, proposal creation, and token-based voting.",
    image: "🏛️",
    status: "Completed" as const,
    technologies: ["Vue.js", "Solidity", "Ethers.js", "The Graph", "Aragon"],
    githubUrl: "https://github.com/Madhusahitya/DAO-VOTING",
    liveUrl: "https://chainvoting.netlify.app/",
  },
  {
    title: "Crypto Landing Page from Figma",
    description: "A stunning, fully-functional cryptocurrency landing page built with modern web technologies.",
    image: "🌉",
    status: "Live" as const,
    technologies: [" Next.js", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/Madhusahitya/Crypto-Landing-Page---Figma",
    liveUrl: "https://novacoinweb3.netlify.app/",
  },
  {
    title: "Real Estate Dapp",
    description: "A decentralized platform to tokenize, list, buy, and sell real estate assets as NFTs with on-chain ownership verification and IPFS-hosted property metadata.",
    image: "🏠",
    status: "In Progress" as const,
    technologies: ["React","Tailwind CSS", "Solidity", "Ethers.js", "IPFS (Web3.Storage)", "Framer Motion", "Polygon"],
    githubUrl: "https://github.com/Madhusahitya/realestate-dapp",
    liveUrl: "https://estateforyou.netlify.app/",
  },
  {
    title: "Uniswap UI Clone with Wallet Support",
    description: "A Uniswap-inspired decentralized exchange interface that enables users to connect their wallets",
    image: "🦄",
    status: "In Progress" as const,
    technologies: ["React.js","Tailwind CSS", "Ethers.js", "Solidity", "Hardhat", "Ethereum Testnet (Goerli/Sepolia)"],
    githubUrl: "https://github.com/Madhusahitya/Uniswap_Clone",
    liveUrl:"https://uniswapclo.netlify.app/",
    
  },
];

export default function ProjectsSection() {
  console.log("Rendering ProjectsSection with", projects.length, "projects");

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-gray mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcasing innovative Web3 solutions that push the boundaries of decentralized technology
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            status={project.status}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
          />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 mb-6">
          Interested in collaborating on Web3 projects?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Let's Build Together
        </motion.button>
      </motion.div>
    </section>
  );
}