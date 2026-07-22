import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';

const featuredProjects = getFeaturedProjects();

const ProjectsHomeSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Featured Projects</h2>
          <Link to="/projects" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 self-start md:self-center">
            See all projects <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const CardInner = (
              <>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <div className="text-sm text-gray-500 mb-3">{project.company} &bull; {project.timeline}</div>
                <p className="text-gray-700 mb-4">{project.tagline}</p>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full self-start">
                  {project.impactHighlight}
                </span>
              </>
            );

            const cardClasses = "bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 cursor-pointer border border-transparent hover:border-blue-500 active:scale-100 flex flex-col h-full";

            return project.externalLink ? (
              <a
                key={project.id}
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {CardInner}
              </a>
            ) : (
              <Link key={project.id} to={`/projects/${project.id}`} className={cardClasses}>
                {CardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
