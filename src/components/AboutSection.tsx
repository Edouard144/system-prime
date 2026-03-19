import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            02 // HUMAN_INTERFACE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            ABOUT_OPERATOR
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              {/* Holographic frame */}
              <div className="absolute inset-0 border border-primary/30" />
              <div className="absolute -inset-2 border border-primary/10" />
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 right-0 h-[1px] bg-primary/40 animate-scan" />
              </div>
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">[PHOTO]</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="terminal-panel p-6 space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-primary/50 mb-4">
                {'>'} cat /home/edouard/about.md
              </div>
              <p className="text-sm leading-relaxed tracking-wide text-foreground">
                I BUILD SCALABLE BACKEND SYSTEMS AND MOBILE APPLICATIONS THAT MAKE PRODUCTS SHINE BY SOLVING REAL PROBLEMS WITH PRECISION AND PERFORMANCE.
              </p>
              <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
                PASSIONATE ABOUT FINANCIAL TECHNOLOGY, REAL ESTATE PLATFORMS, AND DEVELOPER TOOLS. BUILDING THE DIGITAL FUTURE OF RWANDA — ONE SYSTEM AT A TIME.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted-foreground uppercase tracking-wider mt-4 pt-4 border-t border-primary/10">
                <span>LOCATION: <span className="text-primary">KIGALI, RW</span></span>
                <span className="text-primary/30">//</span>
                <span>STATUS: <span className="text-secondary">ACTIVE</span></span>
              </div>
            </div>

            {/* Quote */}
            <div className="terminal-panel p-4 border-l-2 border-l-secondary/50">
              <div className="text-[10px] text-muted-foreground mb-1">{'>'} OPERATOR_QUOTE:</div>
              <p className="text-xs italic tracking-wide text-secondary/80">
                "THE BEST SYSTEMS ARE INVISIBLE — UNTIL THEY'RE NEEDED."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
