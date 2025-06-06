'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
};

export function ScrollAnimation({ children, type = 'fade', delay = 0 }: ScrollAnimationProps) {
  const animation = animations[type];

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
} 