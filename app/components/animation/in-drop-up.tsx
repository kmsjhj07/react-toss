import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  mb?: number;
  y?: number;
  duration?: number;
}

export default function InDropUp({
  children,
  className,
  mb = -100,
  y = 100,
  duration = 0.6,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `0px 0px ${mb}px 0px` });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
