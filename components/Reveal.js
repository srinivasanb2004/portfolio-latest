'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Wraps content and animates it in (fade + slide up) the first time
 * it scrolls into view. Use `delay` to stagger multiple items.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className = '',
  once = true,
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: reduced ? 0 : 0.95, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
