import { motion } from 'framer-motion';
import { education, certifications } from '../data/profile';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const EducationSection = () => {
  return (
    <section id="education" className="px-6 sm:px-10 lg:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-amber-400/90 mb-3">Education & certifications</p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white">The paper trail.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <motion.div key={edu.degree} variants={item} className="border-l-2 border-white/10 pl-4">
                <p className="text-white font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.institution} &middot; {edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={item} className="border-l-2 border-amber-400/30 pl-4">
                <p className="text-white font-medium">{cert.name}</p>
                {(cert.institution || cert.year) && (
                  <p className="text-sm text-gray-500">
                    {cert.institution}
                    {cert.institution && cert.year ? ' · ' : ''}
                    {cert.year}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
