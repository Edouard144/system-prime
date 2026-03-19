import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const copyEmail = () => {
    navigator.clipboard.writeText('edouardtuyubahe@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            06 // INITIATE_CONNECTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            OPEN_CHANNEL
          </h2>
        </motion.div>

        <div className="space-y-4">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="terminal-panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">EMAIL</div>
              <div className="text-sm text-primary tracking-wider">EDOUARDTUYUBAHE@GMAIL.COM</div>
            </div>
            <button
              onClick={copyEmail}
              className="cursor-none text-[10px] uppercase tracking-widest px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              {copied ? '[ COPIED ✓ ]' : '[ COPY ]'}
            </button>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="terminal-panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">WHATSAPP</div>
              <div className="text-sm text-primary tracking-wider">+250 791 980 789</div>
            </div>
            <a
              href="https://wa.me/250791980789"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-[10px] uppercase tracking-widest px-4 py-2 border border-secondary/30 text-secondary hover:bg-secondary/10 transition-all"
            >
              [ OPEN_WHATSAPP ]
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="terminal-panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">GITHUB</div>
              <div className="text-sm text-primary tracking-wider">GITHUB.COM/EDOUARD144</div>
            </div>
            <a
              href="https://github.com/Edouard144"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-[10px] uppercase tracking-widest px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              [ VIEW_PROFILE ]
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
