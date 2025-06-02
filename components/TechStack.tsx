"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-portfolio-purple to-portfolio-blue",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"]
  },
  {
    title: "Blockchain",
    icon: "⛓️",
    color: "from-portfolio-orange to-portfolio-purple",
    technologies: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "OpenZeppelin"]
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-portfolio-green to-portfolio-blue",
    technologies: ["Node.js", "Python", "Go", "Javascript", "MongoDB", "RestAPI"]
  },
  {
    title: "Web3 Tools",
    icon: "🛠️",
    color: "from-portfolio-blue to-portfolio-green",
    technologies: ["MetaMask", "WalletConnect", "IPFS", "The Graph", "Chainlink", "Polygon"]
  }
];

export default function TechStack() {
  console.log("Rendering TechStack component");

  return (
    <section id="stack" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-gray mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Modern technologies and frameworks I use to build cutting-edge Web3 applications
        </p>
      </motion.div>

      {/* Tech Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-portfolio-gray group-hover:text-portfolio-purple transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 hover:bg-gradient-to-r hover:from-portfolio-purple/10 hover:to-portfolio-blue/10 rounded-lg px-3 py-2 text-center text-sm font-medium text-portfolio-gray border border-gray-200 hover:border-portfolio-purple/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 rounded-2xl p-8 border border-portfolio-purple/20">
          <h4 className="text-xl font-semibold text-portfolio-gray mb-3">
            Always Learning
          </h4>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Web3 ecosystem evolves rapidly, and I'm constantly exploring new technologies like Layer 2 solutions, zero-knowledge proofs, emerging consensus mechanisms, permissionless technologies, and currently learning the Go programming language to stay at the forefront of blockchain innovation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}