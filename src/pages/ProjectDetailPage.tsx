import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProjectById(projectId ?? '');

  if (!project) {
    return (
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Projects
        </Link>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-900">{project.company}</span>
            <span className="mx-2">•</span>
            <span>{project.timeline}</span>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-gray-900">Role:</span> {project.role}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 mb-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {project.linkLabel ?? 'View repo & demo'} &rarr;
            </a>
          )}

          <div className="mb-4 text-gray-800">
            <strong>Overview:</strong> {project.overview}
          </div>
          <div className="mb-4 text-gray-800">
            <strong>Actions Taken:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              {project.actions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4 text-gray-800">
            <strong>Impact:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              {project.impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4 text-gray-800">
            <strong>Skills & Tools:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              {project.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
