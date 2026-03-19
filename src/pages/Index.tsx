import { useState, useCallback } from 'react';
import BootScreen from '@/components/BootScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CommandTerminal from '@/components/CommandTerminal';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import UniverseBackground from '@/components/UniverseBackground';

export default function Index() {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <>
      <BootScreen onComplete={handleBootComplete} />

      {booted && (
        <>
          <CustomCursor />
          <UniverseBackground />
          <ScrollProgress />

          {/* CRT + Noise overlays */}
          <div className="crt-overlay" />
          <div className="noise-overlay" />

          <div className="relative z-10">
            <Navbar />
            <HeroSection />

            {/* Liquid divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <AboutSection />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <SkillsSection />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <ProjectsSection />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <StatsSection />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <ContactSection />
            <Footer />
          </div>

          <CommandTerminal />
        </>
      )}
    </>
  );
}
