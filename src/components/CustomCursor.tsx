import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Crosshair */}
      <motion.div
        className="fixed pointer-events-none z-[99999] mix-blend-difference"
        animate={{ x: pos.x - 10, y: pos.y - 10, scale: clicking ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-5 h-5 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary" />
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-primary" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(187,100%,50%)]" />
        </div>
      </motion.div>
      {/* Glow trail */}
      <motion.div
        className="fixed pointer-events-none z-[99998]"
        animate={{ x: pos.x - 15, y: pos.y - 15 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 1 }}
      >
        <div className="w-[30px] h-[30px] rounded-full bg-primary/10 blur-md" />
      </motion.div>
    </>
  );
}
