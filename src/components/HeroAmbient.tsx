import { useEffect, useRef } from 'react';

const HeroAmbient = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}%`);
        el.style.setProperty('--my', `${y}%`);
      });
    };
    const onLeave = () => {
      el.style.setProperty('--mx', `50%`);
      el.style.setProperty('--my', `50%`);
    };
    const parent = el.parentElement;
    parent?.addEventListener('mousemove', onMove);
    parent?.addEventListener('mouseleave', onLeave);
    return () => {
      parent?.removeEventListener('mousemove', onMove);
      parent?.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '50%' }}
    >
      {/* Ambient drifting orbs */}
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-primary/25 dark:bg-primary/30 blur-3xl animate-orb-a" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-sky-400/20 dark:bg-cyan-400/25 blur-3xl animate-orb-b" />
      <div className="absolute -bottom-40 left-1/4 h-[560px] w-[560px] rounded-full bg-indigo-400/20 dark:bg-violet-500/25 blur-3xl animate-orb-c" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Interactive spotlight that brightens grid lines under cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx) var(--my), hsl(var(--primary) / 0.18), transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay dark:mix-blend-screen"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx) var(--my), hsl(var(--foreground) / 0.10), transparent 70%)',
        }}
      />
    </div>
  );
};

export default HeroAmbient;
