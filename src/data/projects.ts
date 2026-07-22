export interface Project {
  id: string;
  title: string;
  company: string;
  timeline: string;
  role: string;
  tagline: string;
  overview: string;
  actions: string[];
  impact: string[];
  impactHighlight: string;
  skills: string[];
  featured: boolean;
  order: number;
  externalLink?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: 'credit-case-automation',
    title: 'Credit case tracking automation',
    company: 'Personal prototype, RBS-inspired',
    timeline: '2025',
    role: 'Builder',
    tagline: 'No-code Zapier automation that replaced manual queue-checking for credit analysts.',
    overview: 'Based on a real operational bottleneck I led through as Unit Lead at RBS: analysts had to manually monitor a shared case log throughout the day, then compile a weekly summary by hand. This prototype rebuilds that workflow with no-code tools to show what an automated version looks like end to end.',
    actions: [
      'Modeled the case log as a Google Sheet acting as a shared source of truth.',
      'Built a Zapier automation that watches for new or updated rows.',
      'Routed real-time notifications to analysts and a rolling status summary to managers.',
      'Documented the full reproduction steps and architecture for anyone to fork.'
    ],
    impact: [
      'Eliminates manual queue-checking throughout the day.',
      'Removes the end-of-week manual summary compilation.',
      'Fully documented with a working demo, architecture diagram, and HOWTO.'
    ],
    impactHighlight: 'Live demo + docs',
    skills: ['Zapier', 'Google Sheets', 'process automation', 'no-code tooling', 'documentation'],
    featured: true,
    order: 1,
    externalLink: 'https://github.com/khatrigaurav21/Automated-Credit-Case-Tracking-Reporting-System-Prototype-',
    linkLabel: 'View repo & demo'
  },
  {
    id: 'project-2',
    title: 'Digital onboarding platform',
    company: 'RBS',
    timeline: '2015 – 2018',
    role: 'Unit Lead',
    tagline: 'Manual KYC and credit review were slowing acquisition and creating audit risk.',
    overview: 'Onboarding clients at RBS involved a mix of manual paperwork, separate KYC tools, and inconsistent risk controls. This was slowing down acquisition and exposing the bank to audit risks.',
    actions: [
      'Co-led the development of a digital onboarding application with built-in KYC/AML checks, credit reviews, and approval workflows.',
      'Collaborated with cross-regional stakeholders (UK, India) to align compliance needs.',
      'Defined user stories, reviewed UI/UX flow, and coordinated UAT.',
      'Designed training modules for 200+ users globally.',
      'Monitored post-launch adoption and incident reporting.'
    ],
    impact: [
      'Reduced new customer onboarding time by 30%.',
      'Fraud losses dropped by 40% in the credit function.',
      '98% user training satisfaction rate.',
      'Application became a global template for other RBS markets.'
    ],
    impactHighlight: '-40% fraud loss',
    skills: ['Agile project delivery', 'stakeholder management', 'compliance', 'CRM integration', 'fraud control metrics', 'UI/UX feedback loops'],
    featured: true,
    order: 2
  },
  {
    id: 'project-3',
    title: 'Client analytics dashboard',
    company: 'Illion Australia',
    timeline: '2019 – 2021',
    role: 'Account Manager',
    tagline: 'No real-time visibility into account health meant retention was reactive, not proactive.',
    overview: 'Client managers had no real-time visibility into account health or product usage. Retention was dropping due to reactive rather than proactive engagement.',
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
    impactHighlight: '+30% retention',
    skills: ['Tableau', 'client success management', 'cross-functional coordination', 'data storytelling', 'executive presentations'],
    featured: true,
    order: 3
  },
  {
    id: 'project-1',
    title: 'Slack bot implementation',
    company: 'Betfair',
    timeline: 'Dec 2024 – Mar 2025',
    role: 'Customer Service Team Lead',
    tagline: 'A manual Slack process for internal queries caused delays and inconsistent handling.',
    overview: 'To improve operational efficiency in a fast-paced betting environment, Betfair’s customer service team needed a more streamlined way to resolve internal queries. The manual Slack channel process led to delays, lost requests, and inconsistent communication.',
    actions: [
      'Identified repeat patterns in agent queries and common escalation bottlenecks.',
      'Designed and developed a custom Slack bot using pre-set workflows to categorize and route requests.',
      'Worked closely with frontline agents to map urgent vs. non-urgent ticket types.',
      'Coordinated with backend systems (e.g., Telbet) to ensure integration and reporting.',
      'Led training and adoption across the team.'
    ],
    impact: [
      'Resolution time dropped by 20% in the first month post-implementation.',
      'Team reported smoother collaboration and less friction in escalation paths.',
      'Allowed supervisors to focus more on coaching, not triaging.'
    ],
    impactHighlight: '-20% resolution time',
    skills: ['Slack API', 'Agile sprint planning', 'automation logic design', 'stakeholder training', 'root cause analysis'],
    featured: false,
    order: 4
  },
  {
    id: 'project-4',
    title: 'Service optimization & process coaching',
    company: 'Sportsbet',
    timeline: '2023 – 2024',
    role: 'Customer Service Advisor',
    tagline: 'Outdated scripts and rigid processes were holding customer service KPIs below target.',
    overview: 'Customer service KPIs were below target, and internal team feedback highlighted outdated scripts and a lack of flexibility in handling complex queries.',
    actions: [
      'Initiated service improvement sessions focused on agent feedback loops.',
      'Created updated response scripts based on sentiment analysis and call review.',
      'Introduced a peer coaching system for junior advisors.',
      'Monitored KPIs using custom dashboards to track first-call resolution and CSAT.'
    ],
    impact: [
      '15% increase in first-call resolution.',
      '20% reduction in call handling time.',
      '10% lift in customer satisfaction scores over 6 months.'
    ],
    impactHighlight: '+10% CSAT',
    skills: ['CX strategy', 'peer coaching', 'real-time analytics', 'operational improvement', 'customer sentiment mapping'],
    featured: false,
    order: 5
  },
  {
    id: 'project-5',
    title: 'Reporting automation & cost reduction',
    company: 'Genpact',
    timeline: '2010 – 2012',
    role: 'Assistant Project Manager',
    tagline: 'Legacy finance reporting took hours of manual compilation every cycle.',
    overview: 'Legacy reporting processes in finance ops required hours of manual compilation and review. The leadership team needed faster, automated, and more visual reporting.',
    actions: [
      'Identified inefficiencies and mapped out automation opportunities.',
      'Implemented automated workflows using internal tools and Excel VBA.',
      'Led stakeholder workshops to validate KPIs and reporting logic.',
      'Streamlined approvals and automated exception reporting.'
    ],
    impact: [
      '50% reduction in reporting time.',
      '15% cost reduction through better resource allocation and tooling.',
      'Enabled faster decision-making in daily ops reviews.'
    ],
    impactHighlight: '-50% reporting time',
    skills: ['Process automation', 'VBA', 'Excel macros', 'stakeholder facilitation', 'Lean thinking'],
    featured: false,
    order: 6
  }
];

export const getFeaturedProjects = () =>
  [...projects].filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getAllProjectsOrdered = () =>
  [...projects].sort((a, b) => a.order - b.order);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const toolkit = [
  'Agile / Scrum',
  'Stakeholder management',
  'Tableau',
  'KYC / compliance',
  'Process automation',
  'Zapier',
  'Risk & controls',
  'Cross-functional delivery'
];
