import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Github } from 'lucide-react';

const testimonials = [
  {
    name: 'IHIRWE PATRICK',
    role: 'SENIOR UI/UX DESIGNER',
    phone: '+250796402848',
    github: 'https://github.com/ihirwepatrick',
    text: 'Edouard transforms complex requirements into elegant, user-friendly interfaces. His backend expertise combined with design sensibility creates seamless digital experiences.',
    rating: 5,
  },
  {
    name: 'IZERE SHEMA LEANDRE',
    role: 'CEO // ECHOSOLS',
    phone: '+250793373953',
    github: 'https://github.com/leandre000',
    text: 'Working with Edouard was transformative for our platform. He delivered a robust, scalable system that exceeded our expectations. True professional expertise.',
    rating: 5,
  },
  {
    name: 'BIENVENUE ALLIANCE',
    role: 'CEO // BLINKTECH',
    phone: '+250735057868',
    github: 'https://github.com/alliance74',
    text: 'Edouard built our entire mobile infrastructure from scratch. His precision, reliability, and technical depth made him an essential partner for our startup.',
    rating: 5,
  },
  {
    name: 'RUKUNDO FURAHA DIVIN',
    role: 'CEO // SICILY LABS',
    phone: '+250792050511',
    github: 'https://github.com/divin-d1',
    text: 'Exceptional developer with deep understanding of system architecture. Edouard delivered solutions that scaled effortlessly under heavy load.',
    rating: 5,
  },
  {
    name: 'KANEZA AMANDINE',
    role: 'UI/UX DESIGNER // CO-FOUNDER BLINKTECH',
    phone: '+250793131491',
    github: '',
    text: 'Edouard brings rare combination of technical excellence and creative problem-solving. Our collaboration resulted in products that users love.',
    rating: 5,
  },
  {
    name: 'JEAN DIEUDONNE MUNEZA',
    role: 'FULL STACK DEVELOPER // UI/UX DESIGNER',
    phone: '+250793095768',
    github: 'https://github.com/Dieudonne000',
    text: 'Edouard is an exceptional developer with deep technical expertise. His ability to build scalable systems and beautiful interfaces makes him a valuable collaborator on any project.',
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
                <div className="flex items-center gap-4 mt-2">
                  {t.phone && (
                    <a
                      href={`https://wa.me/${t.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{t.phone}</span>
                    </a>
                  )}
                  {t.github && (
                    <a
                      href={t.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

