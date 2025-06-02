"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import FlyingCharacter from "@/components/FlyingCharacter";
import GlobalFloatingShapes from "@/components/GlobalFloatingShapes";

export default function Home() {
  console.log("Rendering Home page");
  
  const [characterFlying, setCharacterFlying] = useState(false);
  const [targetSection, setTargetSection] = useState("");

  const handleNavClick = (href: string) => {
    console.log("Character animation triggered for:", href);
    setTargetSection(href);
    setCharacterFlying(true);
  };

  const handleAnimationComplete = () => {
    console.log("Character animation completed");
    setCharacterFlying(false);
    setTargetSection("");
  };

  return (
    <main className="min-h-screen bg-white relative">
      {/* Global floating shapes background */}
      <GlobalFloatingShapes />
      
      {/* Flying character animation */}
      <FlyingCharacter
        isFlying={characterFlying}
        targetSection={targetSection}
        onAnimationComplete={handleAnimationComplete}
      />
      
      <Navigation onNavClick={handleNavClick} />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      
      {/* About Section Placeholder */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-portfolio-gray mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Passionate Web3 developer with 2+ years of experience as a student in building decentralized applications. 
          I specialize in creating user-friendly interfaces for complex blockchain protocols and smart contracts.
          When I'm not coding, you'll find me contributing to open-source projects and exploring the latest in DeFi innovation.
        </p>
      </section>

      {/* Contact Section - Centered Vertically and Horizontally */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="bg-gray-50 rounded-3xl p-12 max-w-2xl w-full text-center shadow-xl">
          <h2 className="text-4xl font-bold text-portfolio-gray mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to collaborate on your next Web3 project? Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a href="mailto:madhusahitya@example.com" className="inline-block">
              <button className="px-8 py-4 bg-portfolio-purple text-white rounded-full font-semibold hover:bg-portfolio-purple/90 transition-all duration-300">
                     Send Message
               </button>
            </a>
            <a href="/public/Madhu_Sahitya_Resume.pdf"download className="inline-block ml-4">
               <button className="px-8 py-4 border-2 border-portfolio-purple text-portfolio-purple rounded-full font-semibold hover:bg-portfolio-purple hover:text-white transition-all duration-300">
                       Download Resume
               </button>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
