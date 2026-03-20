import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'CLIENT_01',
    role: 'CEO // TECH STARTUP',
    text: 'Edouard delivered a flawless backend system that scaled beyond our expectations. His attention to detail and clean architecture made maintenance a breeze.',
    rating: 5,
  },
  {
    name: 'CLIENT_02',
    role: 'PROJECT MANAGER // FINTECH',
    text: 'Working with Edouard was seamless. He understood our requirements from day one and delivered ahead of schedule. The mobile app he built is rock solid.',
    rating: 5,
  },
  {
    name: 'CLIENT_03',
    role: 'CTO // E-COMMERCE',
    text: 'Exceptional problem-solving skills. Edouard tackled our most complex database challenges and optimized query performance by 300%. Highly recommended.',
    rating: 5,
  },
  {
    name: 'CLIENT_04',
    role: 'FOUNDER // SAAS PLATFORM',
    text: 'Edouard brought our vision to life with precision. His full-stack expertise and proactive communication made him an invaluable part of our team.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            05 // OPERATOR_FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            TRANSMISSIONS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="terminal-panel p-6 flex flex-col justify-between"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-[10px]">◆</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs leading-relaxed text-foreground/80 mb-6 flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-primary/10 pt-4">
                <div className="text-xs font-bold text-primary tracking-wider">{t.name}</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
