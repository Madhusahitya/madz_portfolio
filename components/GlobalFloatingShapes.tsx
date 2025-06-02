"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: string;
  type: "sphere" | "cube" | "star" | "cloud";
  size: number;
  color: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function GlobalFloatingShapes() {
  console.log("Rendering GlobalFloatingShapes");
  
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    // Generate random shapes for background ambiance
    const generateShapes = () => {
      const shapeTypes: Array<"sphere" | "cube" | "star" | "cloud"> = ["sphere", "cube", "star", "cloud"];
      const colors = ["#8B5CF6", "#F97316", "#3B82F6", "#10B981"];
      const newShapes: Shape[] = [];

      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: `shape-${i}`,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          size: Math.random() * 40 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 10 + 15, // 15-25 seconds
          delay: Math.random() * 5,
        });
      }
      
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  const renderShape = (shape: Shape) => {
    const baseClasses = "absolute opacity-30 pointer-events-none";
    
    switch (shape.type) {
      case "sphere":
        return (
          <div
            className={`${baseClasses} rounded-full bg-gradient-to-br`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              background: `linear-gradient(135deg, ${shape.color}40, ${shape.color}20)`,
              filter: 'blur(1px)',
            }}
          />
        );
      case "cube":
        return (
          <div
            className={`${baseClasses} rounded-lg`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              background: `linear-gradient(45deg, ${shape.color}40, ${shape.color}20)`,
              transform: 'rotate(45deg)',
            }}
          />
        );
      case "star":
        return (
          <div
            className={`${baseClasses} flex items-center justify-center`}
            style={{
              fontSize: `${shape.size}px`,
              color: `${shape.color}60`,
            }}
          >
            ✦
          </div>
        );
      case "cloud":
        return (
          <div
            className={`${baseClasses} flex items-center justify-center`}
            style={{
              fontSize: `${shape.size}px`,
              color: `${shape.color}40`,
            }}
          >
            ☁
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-10, 10, -10],
            rotate: shape.type === "cube" ? [45, 135, 45] : [0, 360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
}