import { Link } from 'react-router-dom';
import { getAllProjectsOrdered } from '../data/projects';

const allProjects = getAllProjectsOrdered();

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {allProjects.map((project) => {
            const cardClasses = "bg-white rounded-lg shadow-sm p-6 hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 cursor-pointer border border-transparent hover:border-blue-500 active:scale-100 block";
            const CardInner = (
              <>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.impactHighlight}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-3">{project.company} &bull; {project.timeline}</div>
                <p className="text-gray-800">{project.tagline}</p>
              </>
            );

            return project.externalLink ? (
              <a key={project.id} href={project.externalLink} target="_blank" rel="noopener noreferrer" className={cardClasses}>
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

export default Projects;
