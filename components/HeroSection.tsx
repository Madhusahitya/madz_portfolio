"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import FloatingShape from "./FloatingShape";

export default function HeroSection() {
  console.log("Rendering HeroSection component");

  const floatingShapes = [
    { type: "sphere" as const, size: 60, color: "#8B5CF6", position: { x: 15, y: 20 }, delay: 0.5 },
    { type: "cube" as const, size: 40, color: "#F97316", position: { x: 80, y: 15 }, delay: 0.7 },
    { type: "star" as const, size: 35, color: "#3B82F6", position: { x: 10, y: 70 }, delay: 0.9 },
    { type: "sphere" as const, size: 45, color: "#10B981", position: { x: 85, y: 75 }, delay: 1.1 },
    { type: "cube" as const, size: 30, color: "#8B5CF6", position: { x: 20, y: 45 }, delay: 1.3 },
    { type: "star" as const, size: 28, color: "#F97316", position: { x: 75, y: 45 }, delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Shapes */}
      {floatingShapes.map((shape, index) => (
        <FloatingShape
          key={index}
          type={shape.type}
          size={shape.size}
          color={shape.color}
          position={shape.position}
          delay={shape.delay}
        />
      ))}

      {/* Scrolling Background Name */}
    <motion.div
  className="absolute inset-0 flex items-center overflow-hidden pointer-events-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <div className="flex whitespace-nowrap">
    <motion.div
      className="flex"
      animate={{ x: ['0%', '-100%'] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium select-none mr-10" style={{ color: '#ddbbf0' }}>
        Madhu Sahitya! Madhu Sahitya! Madhu Sahitya!
      </h1>
    </motion.div>
    <motion.div
      className="flex"
      animate={{ x: ['0%', '-100%'] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium select-none mr-10" style={{ color: '#ddbbf0' }}>
        Madhu Sahitya! Madhu Sahitya! Madhu Sahitya!
      </h1>
    </motion.div>
  </div>
</motion.div>

      {/* Avatar Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10"
      >
        <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-3xl">
          <div className="text-center space-y-6">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                scale: { duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="hero-character mx-auto w-40 h-40 rounded-3xl bg-white shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white"
            >
              <img
                src="https://assets.macaly-user-data.dev/teszl9l25tawgprrup3rqfg6/j9popo7pwfs2wx2yws8ox24z/6MDVRgxLGnSgXNBorN2YO/fe1dbbd6-8fa4-4e24-b32f-55f11b59e9b4-2-.webp"
                alt="Madhu Sahitya - Web3 Developer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold text-portfolio-gray">Hi, I'm Madhu!</h2>
              <p className="text-lg text-gray-600 font-medium">Web3 Developer & Blockchain Enthusiast</p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-gray-600 max-w-md mx-auto leading-relaxed"
            >
              Building the future of decentralized applications with cutting-edge blockchain technology and modern web frameworks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-4 justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-portfolio-purple text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-portfolio-purple text-portfolio-purple rounded-full font-semibold hover:bg-portfolio-purple hover:text-white transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}