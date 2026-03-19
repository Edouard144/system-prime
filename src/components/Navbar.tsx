import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: '01', label: 'SYSTEM_BOOT', href: '#hero' },
  { id: '02', label: 'HUMAN_INTERFACE', href: '#about' },
  { id: '03', label: 'CORE_MODULES', href: '#skills' },
  { id: '04', label: 'DEPLOYMENTS', href: '#projects' },
  { id: '05', label: 'METRICS', href: '#stats' },
  { id: '06', label: 'CONNECT', href: '#contact' },
];

export default function Navbar() {
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Africa/Kigali' }));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 6) {
        e.preventDefault();
        document.querySelector(sections[num - 1].href)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between text-xs uppercase tracking-wider">
        <a href="#hero" className="text-primary font-bold tracking-widest">
          ET.SYS
        </a>

        <div className="hidden md:flex items-center gap-6">
          {sections.map(s => (
            <a
              key={s.id}
              href={s.href}
              className="text-muted-foreground hover:text-primary transition-colors cursor-none"
            >
              <span className="text-primary/50">{s.id}//</span>{s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-muted-foreground hidden sm:inline">
            SYS_TIME: <span className="text-primary">{time}</span>
          </span>
          <div className="flex items-center gap-1.5">
            <div className="pulse-dot" />
            <span className="text-secondary text-[10px]">AVAILABLE</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
