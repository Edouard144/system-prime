import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function WorldClock({ city, tz }: { city: string; tz: string }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: tz }));
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [tz]);

  return (
    <div className="terminal-panel p-4 text-center">
      <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">{city}</div>
      <div className="text-xl font-bold text-primary tracking-widest">{time}</div>
    </div>
  );
}

const stats = [
  { label: 'PROJECTS_DEPLOYED', value: 10, suffix: '+' },
  { label: 'YEARS_CODING', value: 3, suffix: '' },
  { label: 'TECH_STACKS', value: 15, suffix: '+' },
  { label: 'EXPERIENCE_LEVEL', value: 2, suffix: '+ YRS' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            05 // SYSTEM_METRICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            PERFORMANCE_DATA
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="terminal-panel p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* World clocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
            {'>'} WORLD_CLOCK_SYNC
          </div>
          <div className="grid grid-cols-3 gap-4">
            <WorldClock city="KIGALI" tz="Africa/Kigali" />
            <WorldClock city="LONDON" tz="Europe/London" />
            <WorldClock city="NEW YORK" tz="America/New_York" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
