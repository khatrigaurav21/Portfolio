import React from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, X, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Slack Bot Rollout',
    description: 'Auto-routing support queries at Betfair (2024).'
  },
  {
    id: 'project-2',
    title: 'Client Onboarding Automation',
    description: 'Automated KYC and credit review at RBS (2015–2018).'
  },
  {
    id: 'project-3',
    title: 'Analytics Dashboard for Client Retention',
    description: 'Real-time retention analytics at Illion (2019).'
  },
  {
    id: 'project-4',
    title: 'Process Reengineering',
    description: 'Business automation at Genpact (2010–2012).'
  }
];

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white/70 z-50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
        style={{backdropFilter: open ? 'blur(8px)' : 'none', WebkitBackdropFilter: open ? 'blur(8px)' : 'none'}}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[30vw] max-w-lg bg-gray-100 shadow-2xl z-50 transform transition-transform duration-400 ease-in-out ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-95 opacity-0'}`}
        style={{ transitionProperty: 'transform, opacity, box-shadow', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
        aria-label="Menu Drawer"
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col gap-6 p-6 pt-16">
          {/* Capsule 1: About & Resume */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition text-lg font-semibold text-gray-800" onClick={onClose}>
              <User size={20} /> About
            </Link>
          </div>

          {/* Capsule 2: Featured Projects */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-gray-700 text-xs uppercase tracking-widest font-bold">
                <Briefcase size={16} /> Featured Projects
              </div>
              <Link to="/projects" className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:underline" onClick={onClose}>
                See all <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="flex flex-col gap-1">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex flex-col px-3 py-2 rounded-lg hover:bg-gray-50 transition text-gray-800"
                    onClick={onClose}
                  >
                    <span className="font-semibold text-base">{project.title}</span>
                    <span className="text-sm text-gray-500">{project.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capsule 3: Upcoming Projects */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
            <div className="text-gray-700 text-xs uppercase tracking-widest font-bold mb-2">Upcoming Projects</div>
            <div className="text-gray-400 text-base italic">Stay tuned for more exciting work!</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MenuDrawer; 