import { motion } from 'framer-motion';
import { toolkit } from '../data/profile';

const SkillsBand = () => {
  const looped = [...toolkit, ...toolkit];

  return (
    <section id="skills" className="py-20 border-y border-white/10 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.2em] uppercase text-amber-400/90 mb-8 px-6 sm:px-10 lg:px-20"
      >
        The toolkit
      </motion.p>

      <div className="relative">
        <div className="flex w-max marquee-track motion-reduce:animate-none">
          {looped.map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="mx-3 whitespace-nowrap text-lg sm:text-xl text-gray-500 border border-white/10 rounded-full px-6 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBand;
