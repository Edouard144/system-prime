import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  id: string;
  status: string;
  role: string;
  desc: string;
  results: string[];
  stack: string;
  links: { label: string; url: string }[];
  type: string;
}

const projects: Project[] = [
  {
    id: 'UMURAGE-TRUST',
    status: 'ACTIVE',
    role: 'FULLSTACK DEVELOPER',
    desc: 'THE GOLDEN STANDARD FOR REAL ESTATE IN RWANDA. HIGH-CONCURRENCY PROPERTY MARKETPLACE.',
    results: [
      'ENGINEERED POSTGRESQL DB HANDLING THOUSANDS OF CONCURRENT LISTINGS',
      'BUILT SEAMLESS NEXT.JS FRONTEND FOR ELITE UX',
      'IMPLEMENTED RESTFUL API ARCHITECTURE WITH FULL DOCS',
      'DEVELOPED SECURE AUTH AND SESSION MANAGEMENT',
    ],
    stack: 'NODE.JS // POSTGRESQL // NEXT.JS // REST APIS',
    links: [
      { label: 'API_DOCS', url: 'https://umuragetrust-backend.onrender.com/api/docs/' },
      { label: 'GITHUB', url: 'https://github.com/Edouard144/UmurageTrust' },
    ],
    type: 'FULLSTACK',
  },
  {
    id: 'SMART-SCCO',
    status: 'ACTIVE',
    role: 'FULLSTACK DEVELOPER',
    desc: 'FINTECH INFRASTRUCTURE DIGITIZING THE FUTURE OF FINANCIAL INCLUSION.',
    results: [
      'AUTOMATED LOAN TRACKING WITH TRANSACTION INTEGRITY',
      'BUILT FRAUD DETECTION AND AUDIT LOGGING',
      'INTEGRATED SMS + EMAIL NOTIFICATIONS',
      'DEVELOPED CREDIT SCORING AND KYC SYSTEM',
    ],
    stack: 'EXPRESS.JS // POSTGRESQL // REACT // TYPESCRIPT // JWT',
    links: [
      { label: 'API_DOCS', url: 'https://smartscco-api.onrender.com/api-docs/' },
      { label: 'GITHUB', url: 'https://github.com/Edouard144/SmartSCCO' },
    ],
    type: 'FULLSTACK',
  },
  {
    id: 'STAYAWAKE',
    status: 'ACTIVE',
    role: 'FULLSTACK DEVELOPER',
    desc: 'KEEP YOUR FREE-TIER HOSTED SITES ALIVE FOREVER. SERVER-SIDE PINGER.',
    results: [
      'BUILT JWT AUTH WITH EMAIL/PASSWORD',
      'MULTI-SITE MANAGEMENT WITH CUSTOM INTERVALS',
      'SERVER-SIDE CRON — BROWSER-INDEPENDENT',
      'PAUSE / RESUME / DELETE CONTROLS PER SITE',
    ],
    stack: 'NODE.JS // EXPRESS.JS // POSTGRESQL // NEONDB // NODE-CRON',
    links: [
      { label: 'LIVE', url: 'https://edouard144.github.io/StayAwake' },
      { label: 'GITHUB', url: 'https://github.com/Edouard144/StayAwake' },
    ],
    type: 'BACKEND',
  },
  {
    id: 'GYM-FRONTEND',
    status: 'ACTIVE',
    role: 'FRONTEND DEVELOPER',
    desc: 'MODERN RESPONSIVE GYM AND SAUNA FACILITY WEBSITE WITH FLUID ANIMATIONS.',
    results: [
      'BUILT FULLY RESPONSIVE UI WITH FRAMER MOTION',
      'IMPLEMENTED CAROUSELS, MODALS, AND FORMS',
      'INTEGRATED RADIX UI WITH CUSTOM DESIGN SYSTEM',
      'OPTIMIZED WITH NEXT.JS 13+ PERFORMANCE',
    ],
    stack: 'NEXT.JS 13+ // TYPESCRIPT // TAILWIND CSS // FRAMER MOTION',
    links: [
      { label: 'LIVE', url: 'https://gym-frontend-app-by-edouard.vercel.app/' },
      { label: 'GITHUB', url: 'https://github.com/Edouard144/Gym-Frontend-App' },
    ],
    type: 'FRONTEND',
  },
  {
    id: 'EDRIX-MISSION-CONTROL',
    status: 'ACTIVE',
    role: 'FULLSTACK DEVELOPER',
    desc: 'FULL-STACK DEVELOPER DASHBOARD FOR MANAGING DEVOPS RESOURCES.',
    results: [
      'BUILT MULTI-TENANT ORG SYSTEM WITH RBAC',
      'DEVELOPED WEBHOOK AND API KEY MANAGEMENT',
      'IMPLEMENTED BACKGROUND JOB TRACKING',
      'CREATED BILLING AND SUBSCRIPTION MODULE',
    ],
    stack: 'REACT 18 // TYPESCRIPT // VITE // NODE.JS // EXPRESS // SQLITE',
    links: [
      { label: 'LIVE', url: 'https://edrix-eight.vercel.app' },
      { label: 'API', url: 'https://edrix-api.onrender.com' },
    ],
    type: 'FULLSTACK',
  },
];

const filters = ['ALL', 'FULLSTACK', 'FRONTEND', 'BACKEND'];

function DeployLogs({ id }: { id: string }) {
  const [logs, setLogs] = useState<string[]>([]);
  const logLines = [
    `> INITIALIZING ${id}...`,
    '> PULLING DEPENDENCIES...',
    '> COMPILING SOURCE...',
    '> RUNNING TESTS... 14/14 PASSED',
    '> BUILDING PRODUCTION BUNDLE...',
    '> DEPLOYING TO CLUSTER...',
    '> STATUS: LIVE ✓',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logLines.length) {
        setLogs(prev => [...prev, logLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="text-[9px] text-primary/40 h-16 overflow-hidden mb-3">
      {logs.map((l, i) => (
        <div key={i} className={l.includes('LIVE') ? 'text-secondary/70' : ''}>{l}</div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, rotateY: 3, rotateX: -2 }}
      style={{ transformPerspective: 1000 }}
      className="terminal-panel p-6 group relative overflow-hidden"
    >
      {/* Holographic glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />

      <DeployLogs id={project.id} />

      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wide">
          {project.id}
        </h3>
        <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest border border-secondary/30 text-secondary">
          {project.status}
        </span>
      </div>

      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
        {project.role}
      </div>

      <p className="text-xs text-foreground/70 leading-relaxed mb-4 tracking-wide">
        {project.desc}
      </p>

      <div className="space-y-1 mb-4">
        {project.results.slice(0, 3).map((r, i) => (
          <div key={i} className="text-[10px] text-muted-foreground flex gap-2">
            <span className="text-primary/50">[+]</span>
            <span>{r}</span>
          </div>
        ))}
      </div>

      <div className="text-[10px] text-primary/50 tracking-wider mb-4">
        STACK: {project.stack}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.links.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none text-[10px] uppercase tracking-widest px-3 py-1 border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            [{link.label}]
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('ALL');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            04 // DEPLOYMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
            ACTIVE_DEPLOYMENTS
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`cursor-none text-[10px] uppercase tracking-widest px-4 py-2 border transition-all ${
                filter === f
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
