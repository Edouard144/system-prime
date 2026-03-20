import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEgg() {
  const [buffer, setBuffer] = useState('');
  const [triggered, setTriggered] = useState(false);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (triggered) return;
    const next = (buffer + e.key.toLowerCase()).slice(-7);
    setBuffer(next);
    if (next === 'edouard') {
      setTriggered(true);
      setTimeout(() => setTriggered(false), 4000);
      setBuffer('');
    }
  }, [buffer, triggered]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[10000] pointer-events-none"
        >
          {/* Glitch flash layers */}
          <motion.div
            className="absolute inset-0 bg-primary/20"
            animate={{
              opacity: [0, 1, 0, 1, 0, 0.5, 0],
              x: [0, -10, 10, -5, 5, 0],
            }}
            transition={{ duration: 0.4, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-0 bg-secondary/15"
            animate={{
              opacity: [0, 0.8, 0, 1, 0],
              skewX: [0, 5, -5, 3, 0],
            }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />

          {/* Scanline burst */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(187,100%,50%,0.15) 2px, hsla(187,100%,50%,0.15) 4px)',
            }}
            animate={{ opacity: [0, 1, 0.3, 1, 0] }}
            transition={{ duration: 0.6 }}
          />

          {/* Central text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.5, 1.1, 1, 1, 0.9] }}
            transition={{ duration: 3.5, times: [0, 0.1, 0.2, 0.8, 1] }}
          >
            <div className="text-center">
              <motion.div
                className="text-xs uppercase tracking-[0.5em] text-secondary mb-4"
                animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
                transition={{ duration: 2, times: [0, 0.15, 0.85, 1] }}
              >
                ▓▓▓ IDENTITY VERIFIED ▓▓▓
              </motion.div>
              <motion.div
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter gradient-text glitch-text"
                data-text="ACCESS GRANTED"
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [0, -3, 3, -2, 2, 0, 0, 0],
                }}
                transition={{ duration: 3, times: [0, 0.1, 0.85, 1] }}
              >
                ACCESS GRANTED
              </motion.div>
              <motion.div
                className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-4"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: 3, times: [0, 0.2, 0.3, 0.85, 1] }}
              >
                WELCOME TO THE INNER SANCTUM, OPERATOR
              </motion.div>
            </div>
          </motion.div>

          {/* Corner decorations */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <motion.div
              key={pos}
              className={`absolute ${pos} text-[8px] uppercase tracking-widest text-primary/60`}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, delay: i * 0.1 }}
            >
              {['SYS.AUTH', 'LVL.MAX', 'SEC.CLR', 'NODE.OK'][i]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
