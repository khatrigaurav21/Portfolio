import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../data/experience';

const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="px-6 sm:px-10 lg:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-amber-400/90 mb-3">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white">Four companies. One recurring job.</h2>
      </motion.div>

      <div ref={containerRef} className="relative max-w-3xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10" />
        <motion.div
          className="absolute left-[7px] top-2 w-[2px] bg-amber-400 origin-top"
          style={{ height: lineHeight }}
        />

        <div className="space-y-14">
          {experience.map((role) => (
            <motion.div
              key={role.company + role.timeline}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0b0e14] border-2 border-amber-400" />
              <p className="text-xs text-gray-500 mb-1">{role.timeline} &middot; {role.location}</p>
              <h3 className="text-lg font-medium text-white">{role.role}</h3>
              <p className="text-sm text-amber-400/90 mb-3">{role.company}</p>
              <p className="text-gray-300 mb-3 italic">{role.hook}</p>
              <ul className="space-y-1.5">
                {role.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-amber-400/70">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
