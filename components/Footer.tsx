"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Madhusahitya", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/madhu-sahitya-09432934b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:madhusahitya.works@gmail.com", label: "Email" },
];

export default function Footer() {
  console.log("Rendering Footer component");

  return (
    <footer className="bg-portfolio-gray text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Let's Build the Future Together</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating on innovative Web3 projects? I'm always excited to work with 
              passionate teams and individuals pushing the boundaries of blockchain technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-portfolio-purple transition-all duration-300"
                onClick={() => console.log("Social link clicked:", social.label)}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2025 Madhu Sahitya. Built with Next.js, Tailwind CSS, and Framer Motion.
              </p>
              <div className="flex space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}