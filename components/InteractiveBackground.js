'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 120;
const CURSOR_DISTANCE = 150;

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
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 0.85 + 0.5,
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
      particles = Array.from({ length: width < 640 ? 38 : PARTICLE_COUNT }, createParticle);
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (!reducedMotion.matches && distance < CURSOR_DISTANCE) {
          const force = (CURSOR_DISTANCE - distance) / CURSOR_DISTANCE;
          particle.vx += (dx / (distance || 1)) * force * 0.018;
          particle.vy += (dy / (distance || 1)) * force * 0.018;
        }

        particle.vx *= 0.992;
        particle.vy *= 0.992;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -12 || particle.x > width + 12) particle.vx *= -1;
        if (particle.y < -12 || particle.y > height + 12) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${particle.hue}, 98%, 76%, 0.9)`;
        context.fill();
      });

      const pointerIsOnPage = pointer.x >= 0 && pointer.y >= 0;

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
          // No links on page load. Hovering activates a generous connection field
          // so the network is always clearly visible around the cursor.
          if (!pointerIsOnPage || cursorDistance >= CURSOR_DISTANCE) continue;
          const cursorStrength = 1 - cursorDistance / CURSOR_DISTANCE;
          const alpha = (1 - distance / CONNECTION_DISTANCE) * (0.08 + cursorStrength * 0.22);

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(86, 209, 255, ${alpha})`;
          context.lineWidth = 0.55;
          context.stroke();
        }
      }

      if (pointerIsOnPage) {
        // Only the closest dots join the cursor. This avoids long spokes across
        // the page and keeps the hover interaction as a compact particle mesh.
        const closestParticles = particles
          .map((particle) => ({
            particle,
            distance: Math.hypot(particle.x - pointer.x, particle.y - pointer.y),
          }))
          .filter(({ distance }) => distance < CURSOR_DISTANCE)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 3);

        closestParticles.forEach(({ particle, distance }) => {
          const alpha = (1 - distance / CURSOR_DISTANCE) * 0.32;
          context.beginPath();
          context.moveTo(pointer.x, pointer.y);
          context.lineTo(particle.x, particle.y);
          context.strokeStyle = `rgba(56, 211, 255, ${alpha})`;
          context.lineWidth = 0.7;
          context.stroke();
        });

        context.beginPath();
        context.arc(pointer.x, pointer.y, 1.2, 0, Math.PI * 2);
        context.fillStyle = 'rgba(103, 232, 249, 0.8)';
        context.fill();
      }

      if (pointer.x > 0) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, CURSOR_DISTANCE);
        glow.addColorStop(0, 'rgba(34, 211, 238, 0.06)');
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

  return <canvas id="neural" ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />;
}
