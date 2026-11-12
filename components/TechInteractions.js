'use client';
import { useEffect } from 'react';

export default function TechInteractions() {
  useEffect(() => {
    const targets = [...document.querySelectorAll('#skills article, #projects article, #experience .backdrop-blur-md, #about .backdrop-blur-md, #contact .backdrop-blur-md, .system-console, .machine-core')];
    targets.forEach(target => target.classList.add('tech-surface'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let latest;
    function move(event) {
      if (event.pointerType !== 'mouse' || reduced.matches || document.documentElement.dataset.motionPaused === 'true') return;
      const target = event.target.closest('.tech-surface');
      if (!target) return;
      latest = { target, x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = latest.target.getBoundingClientRect();
        latest.target.style.setProperty('--hover-x', `${latest.x - rect.left}px`);
        latest.target.style.setProperty('--hover-y', `${latest.y - rect.top}px`);
      });
    }
    document.addEventListener('pointermove', move, { passive: true });
    return () => { cancelAnimationFrame(frame); document.removeEventListener('pointermove', move); targets.forEach(target => target.classList.remove('tech-surface')); };
  }, []);
  return null;
}
