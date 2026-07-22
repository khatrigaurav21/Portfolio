import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { hero } from '../data/profile';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-28 pb-16 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.p variants={item} className="text-xs sm:text-sm tracking-[0.2em] uppercase text-amber-400/90 mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.img
          variants={item}
          src="/profile.jpeg"
          alt="Gaurav Khatri"
          className="w-24 h-24 rounded-full object-cover border border-white/15 mb-6"
        />

        <motion.h1 variants={item} className="text-4xl sm:text-6xl font-medium text-white mb-6 leading-[1.1]">
          {hero.name}
        </motion.h1>

        <motion.p variants={item} className="text-xl sm:text-2xl text-gray-200 mb-6 leading-snug max-w-2xl">
          {hero.hook}
        </motion.p>

        {hero.body.map((paragraph, idx) => (
          <motion.p key={idx} variants={item} className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-4">
            {paragraph}
          </motion.p>
        ))}

        <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 rounded-md bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            See the work
          </a>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Download resume
          </a>
          <a
            href="https://www.linkedin.com/in/kha3gaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 sm:left-10 lg:left-20 flex items-center gap-2 text-gray-500"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.span>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
