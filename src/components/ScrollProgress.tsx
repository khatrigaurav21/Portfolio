import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-40 w-[3px] rounded-full bg-white/10 z-50 hidden md:block">
      <motion.div
        className="w-full rounded-full bg-amber-400 origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
};

export default ScrollProgress;
