import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  company: string;
  year: string;
  challenge: string;
  solution: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Slack Bot Rollout',
    company: 'Betfair',
    year: '2024',
    challenge: 'Internal support queries were fragmented, slowing issue resolution.',
    solution: 'Designed and deployed a Slack bot that auto-routed queries based on topic and urgency.',
    impact: 'Resolution time dropped by 20%, and cross-team collaboration significantly improved.'
  },
  {
    id: 'project-2',
    title: 'Client Onboarding Automation',
    company: 'RBS',
    year: '2015–2018',
    challenge: 'Manual KYC and credit review created compliance risks and delays.',
    solution: 'Co-led the development of a new onboarding application that automated checks and approvals.',
    impact: 'Reduced fraud losses by 40% and decreased turnaround time for new clients.'
  },
  {
    id: 'project-3',
    title: 'Analytics Dashboard for Client Retention',
    company: 'Illion',
    year: '2019',
    challenge: 'No visibility into account health or churn signals.',
    solution: 'Built interactive dashboards using real-time performance data.',
    impact: 'Client engagement rose sharply, contributing to a 30% increase in retention.'
  },
  {
    id: 'project-4',
    title: 'Process Reengineering',
    company: 'Genpact',
    year: '2010–2012',
    challenge: 'Legacy reporting processes were inefficient and resource-heavy.',
    solution: 'Led a business automation project and facilitated stakeholder workshops to map out solutions.',
    impact: 'Cut reporting time by 50% and achieved a 15% cost reduction.'
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 cursor-pointer border border-transparent hover:border-blue-500 active:scale-100 block"
            >
              <div className="flex items-center text-sm text-gray-800 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
              </div>
              <div className="text-sm text-gray-500 mb-3">{project.company} &bull; {project.year}</div>
              <div className="mb-2 text-gray-800">
                <strong>Challenge:</strong> {project.challenge}
              </div>
              <div className="mb-2 text-gray-800">
                <strong>Solution:</strong> {project.solution}
              </div>
              <div className="text-gray-800">
                <strong>Impact:</strong> {project.impact}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 