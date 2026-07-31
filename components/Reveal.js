'use client';

import { motion } from 'framer-motion';

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
