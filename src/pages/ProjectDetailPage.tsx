import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  company: string;
  timeline: string;
  role: string;
  overview: string;
  actions: string[];
  impact: string[];
  skills: string[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Slack Bot Implementation',
    company: 'Betfair',
    timeline: 'Dec 2024 – Mar 2025',
    role: 'Customer Service Team Lead',
    overview: `To improve operational efficiency in a fast-paced betting environment, Betfair's customer service team needed a more streamlined way to resolve internal queries. The manual Slack channel process led to delays, lost requests, and inconsistent communication.`,
    actions: [
      'Identified repeat patterns in agent queries and common escalation bottlenecks.',
      'Designed and developed a custom Slack bot using pre-set workflows to categorize and route requests.',
      'Worked closely with frontline agents to map urgent vs. non-urgent ticket types.',
      'Coordinated with backend systems (e.g., Telbet) to ensure integration and reporting.',
      'Led training and adoption across the team.'
    ],
    impact: [
      'Resolution time dropped by 20% in the first month post-implementation.',
      'Team reported a smoother collaboration and less friction in escalation paths.',
      'Allowed supervisors to focus more on coaching, not triaging.'
    ],
    skills: [
      'Slack API',
      'Agile sprint planning',
      'automation logic design',
      'stakeholder training',
      'root cause analysis'
    ]
  },
  {
    id: 'project-2',
    title: 'Digital Onboarding Platform',
    company: 'RBS',
    timeline: '2015 – 2018',
    role: 'Unit Lead',
    overview: `Onboarding clients at RBS involved a mix of manual paperwork, separate KYC tools, and inconsistent risk controls. This was slowing down acquisition and exposing the bank to audit risks.`,
    actions: [
      'Co-led the development of a digital onboarding application with built-in KYC/AML checks, credit reviews, and approval workflows.',
      'Collaborated with cross-regional stakeholders (UK, India) to align compliance needs.',
      'Defined user stories, reviewed UI/UX flow, and coordinated UAT.',
      'Designed training modules for 200+ users globally.',
      'Monitored post-launch adoption and incident reporting.'
    ],
    impact: [
      'Reduced new customer onboarding time by 30%',
      'Fraud losses dropped by 40% in the credit function.',
      '98% user training satisfaction rate',
      'Application became a global template for other RBS markets.'
    ],
    skills: [
      'Agile project delivery',
      'stakeholder management',
      'compliance',
      'CRM integration',
      'fraud control metrics',
      'UI/UX feedback loops'
    ]
  },
  {
    id: 'project-3',
    title: 'Client Analytics Dashboard',
    company: 'Illion Australia',
    timeline: '2019 – 2021',
    role: 'Account Manager',
    overview: `Client managers had no real-time visibility into account health or product usage. Retention was dropping due to reactive rather than proactive engagement.`,
    actions: [
      'Worked with the data and engineering teams to design Tableau dashboards for client performance tracking.',
      'Dashboards tracked usage, churn signals, and pending deliverables.',
      'Trained internal teams and C-level clients on using the tool.',
      'Integrated client feedback into dashboard iterations to improve usability.'
    ],
    impact: [
      '30% increase in client retention attributed to better engagement and response times.',
      'Decision-makers could act faster on early risk indicators.',
      'Improved alignment between sales, service, and delivery functions.'
    ],
    skills: [
      'Tableau',
      'client success management',
      'cross-functional coordination',
      'data storytelling',
      'executive presentations'
    ]
  },
  {
    id: 'project-4',
    title: 'Service Optimization & Process Coaching',
    company: 'Sportsbet',
    timeline: '2023 – 2024',
    role: 'Customer Service Advisor',
    overview: `Customer service KPIs were below target, and internal team feedback highlighted outdated scripts and a lack of flexibility in handling complex queries.`,
    actions: [
      'Initiated service improvement sessions focused on agent feedback loops.',
      'Created updated response scripts based on sentiment analysis and call review.',
      'Introduced a peer coaching system for junior advisors.',
      'Monitored KPIs using custom dashboards to track first-call resolution and CSAT.'
    ],
    impact: [
      '15% increase in first-call resolution',
      '20% reduction in call handling time',
      '10% lift in customer satisfaction scores over 6 months.'
    ],
    skills: [
      'CX strategy',
      'peer coaching',
      'real-time analytics',
      'operational improvement',
      'Zendesk (assumed)',
      'customer sentiment mapping'
    ]
  },
  {
    id: 'project-5',
    title: 'Reporting Automation & Cost Reduction',
    company: 'Genpact',
    timeline: '2010 – 2012',
    role: 'Assistant Project Manager',
    overview: `Legacy reporting processes in finance ops required hours of manual compilation and review. The leadership team needed faster, automated, and more visual reporting.`,
    actions: [
      'Identified inefficiencies and mapped out automation opportunities.',
      'Implemented automated workflows using internal tools and Excel VBA.',
      'Led stakeholder workshops to validate KPIs and reporting logic.',
      'Streamlined approvals and automated exception reporting.'
    ],
    impact: [
      '50% reduction in reporting time',
      '15% cost reduction through better resource allocation and tooling.',
      'Enabled faster decision-making in daily ops reviews.'
    ],
    skills: [
      'Process automation',
      'VBA',
      'Excel macros',
      'stakeholder facilitation',
      'Lean thinking'
    ]
  }
];

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

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