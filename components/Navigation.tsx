"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home", color: "#ddbbf0" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface NavigationProps {
  onNavClick: (href: string) => void;
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const handleNavClick = (href: string) => {
    onNavClick(href);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Gradient Border Wrapper */}
      <div className="p-[2px] rounded-full bg-gradient-to-r from-[#ddbbf0] via-[#cba2f2] to-[#ddbbf0] shadow-xl">
        {/* Inner Nav Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-1 md:space-x-2">
          {navItems.map((item, index) => {
            const isHome = item.label === "Home";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                    ${isHome
                      ? "bg-[#ddbbf0] text-white hover:bg-[#ddbbf0]"
                      : "text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {item.label}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
