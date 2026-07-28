import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { getFeaturedProjects, getAllProjectsOrdered, type Project } from '../data/projects';
import Magnetic from './Magnetic';
import CountUp from './CountUp';

const DEFAULT_ACCENT = '#fbbf24';

const IMPACT_PATTERN = /^([+-])(\d+)%(.*)$/;

const ImpactBadge = ({ text }: { text: string }) => {
  const match = text.match(IMPACT_PATTERN);
  if (!match) return <>{text}</>;
  const [, sign, value, rest] = match;
  return <CountUp value={Number(value)} prefix={sign} suffix={`%${rest}`} />;
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ProjectRow = ({
  project,
  big,
  onHoverAccent
}: {
  project: Project;
  big?: boolean;
  onHoverAccent: (accent: string | null) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => onHoverAccent(project.accent ?? DEFAULT_ACCENT)}
      onMouseLeave={() => onHoverAccent(null)}
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
        <div className="flex items-start gap-5 min-w-0">
          {big && project.image && (
            <img
              src={project.image}
              alt={project.imageAlt ?? ''}
              loading="lazy"
              className="w-20 h-14 sm:w-32 sm:h-20 rounded-lg object-cover border border-white/10 shrink-0"
            />
          )}
          <div className="min-w-0">
            <p className="text-xs font-mono text-gray-500 mb-1">{project.company} &middot; {project.timeline}</p>
            <h3 className={big ? 'text-xl font-medium text-white' : 'text-white font-medium'}>{project.title}</h3>
            {big && <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-md">{project.tagline}</p>}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono font-medium text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            <ImpactBadge text={project.impactHighlight} />
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
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                {project.externalLink && (
                  <Magnetic strength={0.4}>
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="view"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-amber-400 font-medium"
                    >
                      {project.linkLabel ?? 'View repo & demo'} <ArrowUpRight size={14} />
                    </a>
                  </Magnetic>
                )}
                {project.secondaryLink && (
                  <Magnetic strength={0.4}>
                    <a
                      href={project.secondaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="view"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-amber-400 transition-colors font-medium"
                    >
                      {project.secondaryLink.label} <ArrowUpRight size={14} />
                    </a>
                  </Magnetic>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const hexToRgba = (hex: string, alpha: number) => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const FeaturedWork = () => {
  const featured = getFeaturedProjects();
  const rest = getAllProjectsOrdered().filter((p) => !p.featured);
  const [hoveredAccent, setHoveredAccent] = useState<string | null>(null);

  return (
    <section id="work" className="relative px-6 sm:px-10 lg:px-20 py-24 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px]"
        style={{ width: 640, height: 640, top: '10%', left: '50%', translateX: '-50%' }}
        animate={{ backgroundColor: hexToRgba(hoveredAccent ?? DEFAULT_ACCENT, hoveredAccent ? 0.16 : 0.06) }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-amber-400/90 mb-3">Featured work</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-white">Eight problems. Eight fixes. Real numbers.</h2>
        </motion.div>

        <div className="space-y-4 mb-12">
          {featured.map((project) => (
            <ProjectRow key={project.id} project={project} big onHoverAccent={setHoveredAccent} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4"
        >
          More work
        </motion.p>

        <div className="border-t border-white/10">
          {rest.map((project) => (
            <ProjectRow key={project.id} project={project} onHoverAccent={setHoveredAccent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
