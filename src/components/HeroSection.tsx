import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import MagneticParticles from './MagneticParticles';

const role = 'BACKEND & MOBILE DEVELOPER';

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const [gunShoot, setGunShoot] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= role.length) {
        setTyped(role.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Gun shoot glitch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGunShoot(true);
      setTimeout(() => setGunShoot(false), 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="aurora-bg" />
      <div className="perspective-grid" />
      <MagneticParticles />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* System status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          SYSTEM_STATUS: <span className="text-secondary">ONLINE</span> // OPERATOR: <span className="text-primary">EDOUARD</span>
        </motion.div>

        {/* Name with gun shoot glitch */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 glitch-text gradient-text ${gunShoot ? 'gun-shoot-active' : ''}`}
          data-text="TUYUBAHE EDOUARD"
        >
          TUYUBAHE EDOUARD
        </motion.h1>

        {/* Typed role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg tracking-[0.2em] text-primary mb-4 h-8"
        >
          {'> '}{typed}
          <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-blink align-middle" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12"
        >
          PRECISION_FUELS_PROGRESS. BUILDING_THE_DIGITAL_FUTURE_OF_RWANDA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/Edouard144"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none terminal-panel px-8 py-3 text-xs uppercase tracking-widest text-primary hover:text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          >
            [ VIEW_GITHUB ]
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="cursor-none terminal-panel px-8 py-3 text-xs uppercase tracking-widest text-secondary hover:bg-secondary/10 transition-all duration-200"
          >
            [ INITIATE_CONTACT ]
          </button>
        </motion.div>

        {/* System strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-wider text-muted-foreground"
        >
          <span>PROJECTS: <span className="text-primary">10+</span></span>
          <span className="text-primary/30">//</span>
          <span>STACKS: <span className="text-primary">15+</span></span>
          <span className="text-primary/30">//</span>
          <span>EXP: <span className="text-primary">2+ YRS</span></span>
          <span className="text-primary/30">//</span>
          <span>STATUS: <span className="text-secondary">FREELANCER</span></span>
        </motion.div>
      </div>

      {/* Heartbeat EKG */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden opacity-30">
        <svg viewBox="0 0 1200 50" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M0,25 L200,25 L220,10 L240,40 L260,5 L280,45 L300,25 L500,25 L520,10 L540,40 L560,5 L580,45 L600,25 L800,25 L820,10 L840,40 L860,5 L880,45 L900,25 L1200,25"
            fill="none"
            stroke="hsl(187, 100%, 50%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    </section>
  );
}
