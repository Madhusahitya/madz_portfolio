"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
  type: "sphere" | "cube" | "star";
  size: number;
  color: string;
  position: { x: number; y: number };
  delay?: number;
}

export default function FloatingShape({
  type,
  size,
  color,
  position,
  delay = 0,
}: FloatingShapeProps) {
  console.log("Rendering FloatingShape:", { type, size, color, position });

  const shapeVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const renderShape = () => {
    const commonClasses = `absolute animate-float shadow-lg`;

    switch (type) {
      case "sphere":
        return (
          <div
            className={`${commonClasses} rounded-full animate-spin-slow`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${position.x}%`,
              top: `${position.y}%`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      case "cube":
        return (
          <div
            className={`${commonClasses} animate-pulse-glow`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${position.x}%`,
              top: `${position.y}%`,
              borderRadius: '8px',
              transform: 'rotate(45deg)',
            }}
          />
        );
      case "star":
        return (
          <div
            className={`${commonClasses} animate-float-slow`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              color: color,
              fontSize: `${size}px`,
            }}
          >
            ✦
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="pointer-events-none"
    >
      {renderShape()}
    </motion.div>
  );
}