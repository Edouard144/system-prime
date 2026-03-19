import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  '[SYS] INITIALIZING KERNEL v4.2.1...',
  '[SYS] LOADING NEURAL INTERFACE...',
  '[MEM] ALLOCATING 16GB VRAM...',
  '[NET] ESTABLISHING SECURE TUNNEL...',
  '[AUTH] BIOMETRIC SCAN INITIATED...',
  '[DB] CONNECTING TO POSTGRESQL CLUSTER...',
  '[API] MOUNTING REST ENDPOINTS...',
  '[GPU] RENDERING PIPELINE ACTIVE...',
  '[SYS] LOADING OPERATOR PROFILE: TUYUBAHE.EDOUARD',
  '[SEC] ENCRYPTION: AES-256-GCM ACTIVE',
  '[NET] LATENCY: 2ms // STATUS: OPTIMAL',
  '[SYS] ALL SUBSYSTEMS NOMINAL',
  '',
  '> AUTHORIZATION GRANTED',
  '> WELCOME, OPERATOR.',
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLines(prev => [...prev, bootLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
        setTimeout(() => onComplete(), 1200);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
        >
          {/* Loading bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: `${(lines.length / bootLogs.length) * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="max-w-2xl w-full px-6">
            <div className="mb-4 text-xs text-muted-foreground uppercase tracking-widest">
              [ET.SYS] BOOT SEQUENCE v4.2.1
            </div>
            <div className="font-mono text-xs space-y-1">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    line.includes('GRANTED') || line.includes('WELCOME')
                      ? 'text-secondary font-bold'
                      : line.includes('[SYS]')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }
                >
                  {line}
                </motion.div>
              ))}
              <span className="inline-block w-2 h-4 bg-primary animate-blink" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
