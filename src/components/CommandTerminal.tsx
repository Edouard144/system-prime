import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands: Record<string, string> = {
  help: 'AVAILABLE COMMANDS: help, whoami, projects, skills, contact, clear, status',
  whoami: 'TUYUBAHE EDOUARD // BACKEND & MOBILE DEVELOPER // KIGALI, RWANDA',
  projects: 'UMURAGE-TRUST // SMART-SCCO // STAYAWAKE // GYM-FRONTEND // EDRIX-MISSION-CONTROL',
  skills: 'REACT // NODE.JS // TYPESCRIPT // POSTGRESQL // NEXT.JS // SPRING BOOT // DOCKER',
  contact: 'EMAIL: edouardtuyubahe@gmail.com // WHATSAPP: +250 791 980 789',
  status: 'ALL SYSTEMS OPERATIONAL // STATUS: AVAILABLE FOR HIRE',
  edouard: '▓▓▓ ACCESS GRANTED ▓▓▓ WELCOME TO THE INNER SANCTUM, OPERATOR.',
};

export default function CommandTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ cmd: string; out: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
    } else {
      const out = commands[cmd] || `COMMAND NOT FOUND: "${cmd}" // TYPE "help" FOR AVAILABLE COMMANDS`;
      setHistory(prev => [...prev, { cmd: input, out }]);
    }
    setInput('');
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="cursor-none fixed bottom-6 right-6 z-[200] w-12 h-12 border border-primary/40 bg-background/80 backdrop-blur-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-lg font-bold">{open ? '×' : '>_'}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-6 z-[200] w-[90vw] max-w-md"
          >
            <div className="terminal-panel overflow-hidden">
              {/* Header */}
              <div className="px-4 py-2 border-b border-primary/10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="text-primary">ET.SYS</span>
                <span className="text-primary/30">//</span>
                <span>COMMAND_INTERFACE</span>
              </div>

              {/* Output */}
              <div ref={scrollRef} className="p-4 h-64 overflow-y-auto space-y-2 text-xs">
                <div className="text-primary/50">{'>'} TERMINAL READY. TYPE "help" TO BEGIN.</div>
                {history.map((h, i) => (
                  <div key={i}>
                    <div className="text-primary">{'>'} {h.cmd}</div>
                    <div className="text-muted-foreground ml-2">{h.out}</div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="border-t border-primary/10 flex">
                <span className="px-3 py-2 text-xs text-primary">{'>'}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="cursor-none flex-1 bg-transparent py-2 pr-4 text-xs text-foreground outline-none uppercase tracking-wider"
                  placeholder="ENTER COMMAND..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
