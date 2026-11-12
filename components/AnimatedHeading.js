'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedHeading({ children, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: reduced ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
