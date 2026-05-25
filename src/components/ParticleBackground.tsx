import { useEffect, useRef } from 'react';

type P = {
  x: number; y: number; z: number;
  vx: number; vy: number;
  r: number; baseAlpha: number; twinkle: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    let isDark = document.documentElement.classList.contains('dark');

    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(280, Math.floor((width * height) / 5200));
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.9 + 0.1,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        r: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.5,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    init();

    const cx = () => width / 2;
    const cy = () => height / 2;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle galaxy glow center
      const grad = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), Math.max(width, height) * 0.6);
      if (isDark) {
        grad.addColorStop(0, 'rgba(140, 110, 240, 0.18)');
        grad.addColorStop(0.5, 'rgba(70, 120, 220, 0.08)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
      } else {
        grad.addColorStop(0, 'rgba(108, 31, 42, 0.10)');
        grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const rot = t * 0.00002;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      for (const p of particles) {
        // gentle drift + parallax via z
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        p.twinkle += 0.02;

        // soft rotational pull around center for galaxy feel
        const dx = p.x - cx();
        const dy = p.y - cy();
        const rx = dx * cosR - dy * sinR;
        const ry = dx * sinR + dy * cosR;
        let sx = cx() + rx;
        let sy = cy() + ry;

        // wrap
        if (sx < -10) { p.x += width + 20; sx += width + 20; }
        if (sx > width + 10) { p.x -= width + 20; sx -= width + 20; }
        if (sy < -10) { p.y += height + 20; sy += height + 20; }
        if (sy > height + 10) { p.y -= height + 20; sy -= height + 20; }

        const alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.twinkle)) * p.z;
        const radius = p.r * (0.5 + p.z);

        if (isDark) {
          ctx.fillStyle = `rgba(210, 225, 255, ${Math.min(1, alpha * 1.4)})`;
          ctx.shadowColor = 'rgba(170, 190, 255, 0.95)';
          ctx.shadowBlur = 14 * p.z;
        } else {
          ctx.fillStyle = `rgba(108, 31, 42, ${Math.min(1, alpha * 0.95)})`;
          ctx.shadowColor = 'rgba(108, 31, 42, 0.55)';
          ctx.shadowBlur = 8 * p.z;
        }
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
