import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'gk-preloaded';
const NAME = 'Gaurav Khatri';

const letterContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } }
};

const letter = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const Preloader = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = 'hidden';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdTime = reduced ? 200 : 1000;

    const timer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setVisible(false);
    }, holdTime);

    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.h1
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="flex overflow-hidden text-2xl sm:text-4xl font-medium tracking-tight text-white"
            aria-label={NAME}
          >
            {NAME.split('').map((char, idx) => (
              <motion.span key={idx} variants={letter} className="inline-block">
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
