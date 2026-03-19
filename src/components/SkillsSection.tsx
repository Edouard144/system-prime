import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DNAHelix from './DNAHelix';

const skillGroups = [
  {
    label: 'FRONTEND',
    skills: ['REACT.JS', 'NEXT.JS', 'REACT NATIVE', 'SWIFT', 'TAILWIND CSS', 'TYPESCRIPT'],
  },
  {
    label: 'BACKEND',
    skills: ['NODE.JS', 'EXPRESS.JS', 'JAVA', 'SPRING BOOT', 'LARAVEL', 'DJANGO', 'WORDPRESS'],
  },
  {
    label: 'LANGUAGES',
    skills: ['TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'C++', 'C#'],
  },
  {
    label: 'DATABASES',
    skills: ['POSTGRESQL', 'MONGODB', 'SQLITE', 'NEONDB'],
  },
  {
    label: 'TOOLS',
    skills: ['GIT', 'DOCKER', 'SWAGGER/OPENAPI', 'JWT', 'REST APIS', 'NODE-CRON'],
  },
];

function SkillBadge({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, type: 'spring', stiffness: 200 }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 0 20px hsla(187, 100%, 50%, 0.3)',
      }}
      className="cursor-none inline-block px-3 py-1.5 text-[10px] uppercase tracking-widest border border-primary/20 text-primary/80 hover:text-primary hover:border-primary/50 bg-primary/5 transition-colors"
    >
      {skill}
    </motion.span>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-4" ref={ref}>
      <DNAHelix />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            03 // CORE_MODULES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            SKILL_MATRIX
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15, duration: 0.5 }}
              className="terminal-panel p-6"
            >
              <div className="text-[10px] uppercase tracking-widest text-secondary/60 mb-4">
                {'>'} MODULE: {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillBadge key={skill} skill={skill} delay={gi * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
