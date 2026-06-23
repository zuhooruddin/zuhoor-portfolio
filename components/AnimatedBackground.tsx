'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let running = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) draw();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['rgba(79,136,255,', 'rgba(217,164,65,', 'rgba(147,161,191,'];

    const PARTICLE_COUNT = 36;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.22 + 0.06,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,136,255,${0.03 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      time += 0.005;
      if (running) animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      {/* Canvas particle network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.42 }}
      />

      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left accent orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: '-200px',
            left: '-200px',
            background: 'radial-gradient(circle, rgba(217,164,65,0.08) 0%, transparent 72%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        {/* Center-right primary orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: '20%',
            right: '-150px',
            background: 'radial-gradient(circle, rgba(79,136,255,0.09) 0%, transparent 72%)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        {/* Bottom neutral orb */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            bottom: '10%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(147,161,191,0.06) 0%, transparent 74%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </>
  );
}
