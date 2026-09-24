'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 72;
const CONNECTION_DISTANCE = 145;
const CURSOR_DISTANCE = 190;

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: -1000, y: -1000 };
    let particles = [];
    let frameId;
    let width = 0;
    let height = 0;

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.35 + 0.45,
        hue: Math.random() > 0.72 ? 274 : 190,
      };
    }

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: width < 640 ? 34 : PARTICLE_COUNT }, createParticle);
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (!reducedMotion.matches && distance < CURSOR_DISTANCE) {
          const force = (CURSOR_DISTANCE - distance) / CURSOR_DISTANCE;
          particle.vx += (dx / (distance || 1)) * force * 0.045;
          particle.vy += (dy / (distance || 1)) * force * 0.045;
        }

        particle.vx *= 0.992;
        particle.vy *= 0.992;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -12 || particle.x > width + 12) particle.vx *= -1;
        if (particle.y < -12 || particle.y > height + 12) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${particle.hue}, 92%, 70%, 0.54)`;
        context.fill();
      });

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const a = particles[first];
          const b = particles[second];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > CONNECTION_DISTANCE) continue;

          const cursorDistance = Math.min(
            Math.hypot(a.x - pointer.x, a.y - pointer.y),
            Math.hypot(b.x - pointer.x, b.y - pointer.y),
          );
          // Keep the background calm until the cursor enters the particle field.
          // Nearby particles then form a small, responsive network around it.
          if (cursorDistance >= CURSOR_DISTANCE) continue;
          const cursorStrength = 1 - cursorDistance / CURSOR_DISTANCE;
          const alpha = (1 - distance / CONNECTION_DISTANCE) * (0.08 + cursorStrength * 0.35);

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(86, 209, 255, ${alpha})`;
          context.lineWidth = 0.6;
          context.stroke();
        }
      }

      if (pointer.x > 0) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, CURSOR_DISTANCE);
        glow.addColorStop(0, 'rgba(34, 211, 238, 0.055)');
        glow.addColorStop(1, 'rgba(34, 211, 238, 0)');
        context.fillStyle = glow;
        context.beginPath();
        context.arc(pointer.x, pointer.y, CURSOR_DISTANCE, 0, Math.PI * 2);
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    }

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    frameId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />;
}
