import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[2px] z-[90]">
      <div
        className="bg-primary/60 w-full transition-all duration-100"
        style={{ height: `${progress}%`, boxShadow: '0 0 8px hsl(187, 100%, 50%)' }}
      />
    </div>
  );
}
