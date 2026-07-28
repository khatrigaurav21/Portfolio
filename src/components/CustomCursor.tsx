import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 1000, damping: 50, mass: 0.2 });
  const ringY = useSpring(y, { stiffness: 1000, damping: 50, mass: 0.2 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add('cursor-none-custom');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.getAttribute('data-cursor') || null);
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.classList.remove('cursor-none-custom');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference"
        animate={{ width: hovering ? 56 : 22, height: hovering ? 56 : 22 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      {label && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-ink border border-amber-400/60 px-3 py-1"
          style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-150%' }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200 whitespace-nowrap">{label}</span>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
