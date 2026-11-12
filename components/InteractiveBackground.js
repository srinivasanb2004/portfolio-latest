'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/** One viewport-sized film-dust layer, shared by all six section scenes. */
export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { setPaused(localStorage.getItem('portfolio-motion-paused') === 'true'); } catch {}
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sections = [...document.querySelectorAll('.cinematic-section')];
    const visible = new Set();
    let frame = 0;
    let previous = 0;
    let width = 0;
    let height = 0;
    let dust = [];
    const pointer = { x: 0, y: 0 };
    let dustColor = document.body.classList.contains('light-theme') ? '132,104,55' : '225,204,161';
    const themeObserver = new MutationObserver(() => { dustColor = document.body.classList.contains('light-theme') ? '132,104,55' : '225,204,161'; });
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('scene-visible', entry.isIntersecting);
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }), { rootMargin: '0px' });
    sections.forEach(section => observer.observe(section));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, width < 768 ? 1 : 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      dust = Array.from({ length: width < 768 ? 12 : 32 }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.3, speed: Math.random() * 0.18 + 0.08,
        phase: Math.random() * Math.PI * 2,
      }));
    }
    function draw(now) {
      frame = requestAnimationFrame(draw);
      if (now - previous < (width < 768 ? 50 : 33)) return;
      const delta = Math.min((now - previous) / 16.67, 3);
      previous = now;
      context.clearRect(0, 0, width, height);
      dust.forEach(dot => {
        dot.y -= dot.speed * delta;
        dot.x += Math.sin(now / 6000 + dot.phase) * 0.12 * delta;
        if (dot.y < -5) dot.y = height + 5;
        if (dot.x < -5) dot.x = width + 5;
        if (dot.x > width + 5) dot.x = -5;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${dustColor},${0.08 + (Math.sin(now / 2500 + dot.phase) + 1) * 0.08})`;
        context.fill();
      });
      visible.forEach(section => {
        const rect = section.getBoundingClientRect();
        const shift = Math.max(-100, Math.min(100, (height / 2 - rect.top - rect.height / 2) * 0.09));
        section.style.setProperty('--scene-shift', `${shift}px`);
        section.style.setProperty('--pointer-x', `${pointer.x}px`);
        section.style.setProperty('--pointer-y', `${pointer.y}px`);
      });
    }
    function sync() {
      cancelAnimationFrame(frame);
      setReduced(media.matches);
      const stopped = paused || media.matches || document.hidden;
      document.documentElement.dataset.motionPaused = String(stopped);
      if (stopped) context.clearRect(0, 0, width, height);
      else { previous = performance.now(); frame = requestAnimationFrame(draw); }
    }
    function move(event) {
      if (event.pointerType !== 'mouse') return;
      pointer.x = (event.clientX / width - 0.5) * 35;
      pointer.y = (event.clientY / height - 0.5) * 25;
    }
    resize();
    sync();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    media.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      media.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      delete document.documentElement.dataset.motionPaused;
    };
  }, [paused]);

  return <>
    <canvas ref={canvasRef} className="cinematic-dust" aria-hidden="true" />
    <button type="button" className="motion-control" disabled={reduced} onClick={() => { const next = !paused; setPaused(next); try { localStorage.setItem('portfolio-motion-paused', String(next)); } catch {} }} aria-pressed={paused || reduced} aria-label={reduced ? 'Animations disabled by your reduced motion preference' : paused ? 'Resume animations' : 'Pause animations'}>
      {paused && !reduced ? <Play size={12} /> : <Pause size={12} />} <span>{reduced ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'}</span>
    </button>
  </>;
}
