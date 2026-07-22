import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { getFeaturedProjects, getAllProjectsOrdered, type Project } from '../data/projects';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ProjectRow = ({ project, big }: { project: Project; big?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={`rounded-2xl border transition-colors ${
        big
          ? 'border-white/10 bg-white/[0.03] hover:border-amber-400/40 p-7'
          : 'border-transparent border-b border-white/10 rounded-none'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left py-2"
        aria-expanded={open}
      >
        <div>
          <p className="text-xs text-gray-500 mb-1">{project.company} &middot; {project.timeline}</p>
          <h3 className={big ? 'text-xl font-medium text-white' : 'text-white font-medium'}>{project.title}</h3>
          {big && <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-md">{project.tagline}</p>}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            {project.impactHighlight}
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden="true">
            <ChevronDown size={18} className="text-gray-500" />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-5 text-sm text-gray-400 leading-relaxed max-w-2xl space-y-2">
              <p>{project.overview}</p>
              <p><span className="text-gray-300 font-medium">What I did: </span>{project.actions.join(' ')}</p>
              <p><span className="text-gray-300 font-medium">Result: </span>{project.impact.join(' ')}</p>
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-amber-400 font-medium pt-1"
                >
                  {project.linkLabel ?? 'View repo & demo'} <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const featured = getFeaturedProjects();
  const rest = getAllProjectsOrdered().filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 sm:px-10 lg:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-amber-400/90 mb-3">Featured work</p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white">Eight problems. Eight fixes. Real numbers.</h2>
      </motion.div>

      <div className="space-y-4 mb-12">
        {featured.map((project) => (
          <ProjectRow key={project.id} project={project} big />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-widest text-gray-500 mb-4"
      >
        More work
      </motion.p>

      <div className="border-t border-white/10">
        {rest.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
