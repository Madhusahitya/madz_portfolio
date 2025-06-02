"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: "Live" | "In Progress" | "Completed";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  status,
  technologies,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  console.log("Rendering ProjectCard:", { title, status });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-50">{image}</span>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${getStatusColor(status)} border font-semibold`}>
              {status}
            </Badge>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-portfolio-gray group-hover:text-portfolio-purple transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 border-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-full border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300"
                onClick={() => {
                  console.log("GitHub button clicked:", githubUrl);
                  window.open(githubUrl, "_blank");
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
            {liveUrl && (
              <Button
                size="sm"
                className="flex-1 rounded-full bg-portfolio-purple hover:bg-portfolio-purple/90 transition-all duration-300"
                onClick={() => {
                  console.log("Live Demo button clicked:", liveUrl);
                  window.open(liveUrl, "_blank");
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}