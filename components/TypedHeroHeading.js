'use client';

import { useEffect, useState } from 'react';

const lines = ['Beautiful', 'interfaces.', 'Powerful systems.'];
const text = lines.join('');
const offsets = [0, lines[0].length, lines[0].length + lines[1].length];

export default function TypedHeroHeading() {
  const [count, setCount] = useState(text.length);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 767px), (pointer: coarse)');
    let timer;
    let current = 0;
    function type() {
      if (document.documentElement.dataset.motionPaused === 'true') { current = text.length; setCount(current); return; }
      if (document.hidden) { timer = setTimeout(type, 200); return; }
      current += 1;
      setCount(current);
      if (current < text.length) {
        const lineEnd = offsets.includes(current);
        timer = setTimeout(type, lineEnd ? 550 : 145 + (current % 4) * 20);
      }
    }
    function start() {
      clearTimeout(timer);
      setReduced(media.matches || compact.matches);
      if (media.matches || compact.matches) { current = text.length; setCount(current); }
      else { current = 0; setCount(0); timer = setTimeout(type, 500); }
    }
    start();
    const observer = new MutationObserver(() => {
      if (document.documentElement.dataset.motionPaused === 'true') { clearTimeout(timer); current = text.length; setCount(current); }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion-paused'] });
    media.addEventListener('change', start);
    compact.addEventListener('change', start);
    return () => { clearTimeout(timer); observer.disconnect(); media.removeEventListener('change', start); compact.removeEventListener('change', start); };
  }, []);

  return <h1 className="typed-hero" aria-label="Beautiful interfaces. Powerful systems.">
    {lines.map((line, lineIndex) => {
      const Tag = lineIndex === 1 ? 'em' : 'span';
      return <Tag className="typed-hero-line" aria-hidden="true" key={line}>
        {Array.from(line).map((letter, index) => {
          const position = offsets[lineIndex] + index;
          const visible = position < count;
          const cursor = !reduced && count < text.length && (count === 0 ? position === 0 : position === count - 1);
          return <span key={index} className={`typed-letter${cursor ? ' has-typing-cursor' : ''}${count === 0 && cursor ? ' cursor-at-start' : ''}`}><span style={{ visibility: visible ? 'visible' : 'hidden' }}>{letter}</span></span>;
        })}
      </Tag>;
    })}
  </h1>;
}
