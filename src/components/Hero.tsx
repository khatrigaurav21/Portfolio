import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { hero, heroStats } from '../data/profile';
import Magnetic from './Magnetic';
import CountUp from './CountUp';

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
    <section id="home" className="min-h-screen flex items-center px-6 sm:px-10 lg:px-20 pt-28 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-amber-400/90 mb-6">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 variants={item} className="text-4xl sm:text-6xl font-medium text-white mb-6 leading-[1.1]">
            {hero.name}
          </motion.h1>

          <motion.p variants={item} className="text-xl sm:text-2xl text-gray-200 mb-6 leading-snug max-w-xl">
            {hero.hook}
          </motion.p>

          {hero.body.map((paragraph, idx) => (
            <motion.p key={idx} variants={item} className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-4">
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={item} className="flex flex-wrap gap-8 mt-6 mb-2">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-mono font-medium text-amber-400">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center px-6 py-3 rounded-md bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
              >
                See the work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Download resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/kha3gaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                LinkedIn
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-amber-400/10 blur-3xl rounded-full scale-90" aria-hidden="true" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
            style={{ aspectRatio: '4 / 5' }}
          >
            <img
              src="/profile.jpeg"
              alt="Gaurav Khatri"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(11,14,20,0) 55%, rgba(11,14,20,0.85) 100%)' }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>

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
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
