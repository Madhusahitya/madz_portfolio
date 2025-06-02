"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FlyingCharacterProps {
  isFlying: boolean;
  targetSection: string;
  onAnimationComplete: () => void;
}

export default function FlyingCharacter({ 
  isFlying, 
  targetSection, 
  onAnimationComplete 
}: FlyingCharacterProps) {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isFlying && targetSection) {
      const characterElement = document.querySelector('.hero-character');
      if (characterElement) {
        const rect = characterElement.getBoundingClientRect();
        setStartPosition({ x: rect.left, y: rect.top });
      }

      const targetElement = document.querySelector(targetSection);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setEndPosition({ 
          x: rect.left + rect.width / 2 - 100,
          y: rect.top + 100
        });
      }
    }
  }, [isFlying, targetSection]);

  const flyingVariants = {
    initial: {
      x: startPosition.x,
      y: startPosition.y,
      scale: 0.7,
      rotate: 0,
    },
    flying: {
      x: endPosition.x,
      y: endPosition.y,
      scale: 1.05, // Slightly bigger
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 3.5, // Slower flight
        ease: "easeInOut",
        rotate: {
          duration: 0.6,
          repeat: 2,
        }
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  if (!isFlying) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          left: 0,
          top: 0,
        }}
        variants={flyingVariants}
        initial="initial"
        animate="flying"
        exit="exit"
        onAnimationComplete={onAnimationComplete}
      >
        <div className="relative">
          <img
            src="https://assets.macaly-user-data.dev/teszl9l25tawgprrup3rqfg6/j9popo7pwfs2wx2yws8ox24z/W4SNQO0Y8HL1XB_yz84iv/104ef06b-4077-4a9a-8e10-64b3c53fc437-2-.webp"
            alt="Flying Madhu Sahitya"
            className="w-36 h-36 object-contain drop-shadow-xl" // Larger size
          />
          {/* Trail effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-purple/30 to-portfolio-blue/30"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
