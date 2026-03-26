import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TemplatesSection from "@/components/TemplatesSection";
import FeaturesSection from "@/components/FeaturesSection";
import GeneratorSection from "@/components/GeneratorSection";
import AboutSection from "@/components/AboutSection";
import Galaxy from "@/components/Galaxy";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Galaxy WebGL background */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.35}
          saturation={0.4}
          hueShift={220}
          twinkleIntensity={0.3}
          rotationSpeed={0.08}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent={false}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto [&_label]:pointer-events-auto">
        <Navbar />
        <HeroSection />
        <TemplatesSection />
        <FeaturesSection />
        <GeneratorSection />
        <AboutSection />
        {/* Footer */}
        <footer className="border-t border-border py-10 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-heading font-bold text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="neon-text">AI Marketing</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 AI Marketing. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
