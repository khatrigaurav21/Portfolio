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
  accent?: string;
  image?: string;
  imageAlt?: string;
  secondaryLink?: { url: string; label: string };
}

export const projects: Project[] = [
  {
    id: 'credit-case-automation',
    title: 'Credit case tracking automation',
    company: 'Personal prototype, RBS-inspired',
    timeline: '2025',
    role: 'Builder',
    tagline: 'Analysts were babysitting a spreadsheet all day. I built a bot to do it for them.',
    overview: 'This one is personal. At RBS, analysts manually checked a shared case log all day, then compiled a weekly summary by hand. This prototype rebuilds that job with Zapier, so nobody has to do it again.',
    actions: [
      'Modeled the case log as a Google Sheet acting as a shared source of truth.',
      'Built a Zapier automation that watches for new or updated rows.',
      'Routed real time alerts to analysts and a rolling summary to managers.',
      'Documented the whole thing so anyone can rebuild it.'
    ],
    impact: [
      'No more manual queue checking, all day, every day.',
      'No more end of week summary scramble.',
      'Fully documented with a working demo and architecture diagram.'
    ],
    impactHighlight: 'Live demo + docs',
    skills: ['Zapier', 'Google Sheets', 'process automation', 'no-code tooling', 'documentation'],
    featured: true,
    order: 1,
    externalLink: 'https://github.com/khatrigaurav21/Automated-Credit-Case-Tracking-Reporting-System-Prototype-',
    linkLabel: 'View repo & demo',
    accent: '#fbbf24',
    image: '/projects/credit-demo.gif',
    imageAlt: 'Credit case tracking automation demo',
    secondaryLink: { url: '/projects/credit-architecture.png', label: 'View architecture diagram' }
  },
  {
    id: 'dojo64',
    title: 'Dojo64 — Harada Method goal planner',
    company: 'Personal project',
    timeline: '2026',
    role: 'Builder',
    tagline: 'Ambitious goals get written down once and forgotten. I built a tool that forces one into 64 daily actions.',
    overview: 'Goal-setting without structure doesn\'t survive a normal week. Dojo64 digitizes the Harada Method — the 8x8 grid Shohei Ohtani used to map his own career at 16 — turning one goal into 8 supporting pillars and 64 concrete tasks, then tracks daily progress against it instead of letting it rot in a notes app.',
    actions: [
      'Designed and built the full product end to end: goal input, AI-generated 8x8 grid, daily focus panel, and weekly reflection.',
      'Built a custom design system from scratch — typography, color tokens, motion — rather than defaulting to a stock UI kit.',
      'Wired up Supabase edge functions for AI-assisted grid generation and task expansion.',
      'Shipped light/dark theming, a gallery of example plans, and shareable plan links with PNG export.'
    ],
    impact: [
      'Fully working end-to-end product, not a mockup — live grid, daily tracking, and weekly reflection.',
      'Custom design system refined through multiple rounds of UX audit and critique.',
      'Same instinct as everything else on this list — spot an unstructured process, replace it with a system — pointed at my own goal planning instead of an employer\'s.'
    ],
    impactHighlight: 'Full product, shipped',
    skills: ['Product design', 'React', 'TypeScript', 'Tailwind CSS', 'design systems', 'Supabase', 'UX critique & iteration'],
    featured: true,
    order: 2,
    externalLink: 'https://dojo64.vercel.app',
    linkLabel: 'Try it live',
    accent: '#38bdf8',
    image: '/projects/dojo64-og.jpg',
    imageAlt: 'Dojo64 8x8 goal grid interface'
  },
  {
    id: 'project-2',
    title: 'Digital onboarding platform',
    company: 'RBS',
    timeline: '2015 – 2018',
    role: 'Unit Lead',
    tagline: 'New clients meant paperwork, manual KYC, and a lot of risk. We digitized the whole thing.',
    overview: 'Onboarding at RBS ran on paperwork, disconnected KYC tools, and inconsistent risk checks. Acquisition was slow and every audit made people nervous.',
    actions: [
      'Co-led a digital onboarding app with built in KYC and AML checks.',
      'Aligned compliance across UK and India stakeholders.',
      'Defined user stories, reviewed UX flow, and ran UAT.',
      'Trained 200+ users globally.'
    ],
    impact: [
      'Onboarding time down 30%.',
      'Fraud losses down 40% in the credit function.',
      '98% training satisfaction.',
      'Became the template for other RBS markets.'
    ],
    impactHighlight: '-40% fraud loss',
    skills: ['Agile project delivery', 'stakeholder management', 'compliance', 'CRM integration', 'fraud control metrics', 'UI/UX feedback loops'],
    featured: true,
    order: 3,
    accent: '#fb7185'
  },
  {
    id: 'project-3',
    title: 'Client analytics dashboard',
    company: 'Illion Australia',
    timeline: '2019 – 2021',
    role: 'Account Manager',
    tagline: 'Account managers found out a client was unhappy the day they left. Not anymore.',
    overview: 'Client health had no visibility. Retention stayed reactive instead of proactive, because nobody could see the warning signs in time.',
    actions: [
      'Designed Tableau dashboards tracking usage and churn signals.',
      'Trained internal teams and C-level clients on the tool.',
      'Iterated on the design from real client feedback.'
    ],
    impact: [
      'Retention up 30%.',
      'Faster action on early risk signals.',
      'Better alignment across sales, service, and delivery.'
    ],
    impactHighlight: '+30% retention',
    skills: ['Tableau', 'Power BI', 'client success management', 'cross-functional coordination', 'data storytelling'],
    featured: true,
    order: 4,
    accent: '#34d399'
  },
  {
    id: 'project-1',
    title: 'Slack bot for internal support',
    company: 'Betfair',
    timeline: 'Dec 2024 – Mar 2025',
    role: 'Customer Service Team Lead',
    tagline: 'Support tickets sat in a Slack channel like a junk drawer. I built a bot to sort it.',
    overview: 'Internal support ran through one chaotic Slack channel. Requests got lost, urgent ones sat next to trivial ones, and nobody owned the queue.',
    actions: [
      'Mapped the most common queries and escalation bottlenecks.',
      'Built a Slack bot that auto-routes requests by topic and urgency.',
      'Trained the team on the new workflow.'
    ],
    impact: [
      'Resolution time down 20% in month one.',
      'Smoother handoffs between agents.',
      'Supervisors coaching instead of triaging.'
    ],
    impactHighlight: '-20% resolution time',
    skills: ['Slack API', 'Agile sprint planning', 'automation logic design', 'stakeholder training', 'root cause analysis'],
    featured: false,
    order: 5
  },
  {
    id: 'project-6',
    title: 'Telephone system overhaul',
    company: 'Betfair',
    timeline: '2024 – 2025',
    role: 'Customer Service Team Lead',
    tagline: 'The phone system was older than some of the team. We replaced it end to end.',
    overview: 'The existing phone setup was dragging down call routing and reporting. It needed a full rebuild, not a patch.',
    actions: [
      'Scoped requirements and evaluated vendors.',
      'Managed the vendor relationship through implementation.',
      'Planned the migration and trained the team.'
    ],
    impact: [
      'Better call routing and shorter wait times.',
      'Clean reporting for the first time.',
      'Smooth transition with no service gaps.'
    ],
    impactHighlight: 'Full system rebuild',
    skills: ['project management', 'vendor management', 'change management', 'requirements elicitation'],
    featured: false,
    order: 6
  },
  {
    id: 'project-7',
    title: 'Telbet UI improvements',
    company: 'Betfair',
    timeline: '2024 – 2025',
    role: 'Customer Service Team Lead',
    tagline: 'The tool agents used all day fought them at every click. We redesigned it around how they actually work.',
    overview: "Telbet's interface was slowing down the exact people who used it most. Small friction, repeated hundreds of times a day, adds up fast.",
    actions: [
      'Collected pain points directly from agents.',
      'Turned feedback into concrete design changes.',
      'Ran usability testing before rollout.'
    ],
    impact: [
      'Lower cognitive load for agents.',
      'Faster daily workflows.',
      'Higher satisfaction with the tool.'
    ],
    impactHighlight: 'UX overhaul',
    skills: ['UI/UX implementation', 'usability testing', 'stakeholder collaboration'],
    featured: false,
    order: 7
  },
  {
    id: 'project-4',
    title: 'Service optimization & process coaching',
    company: 'Sportsbet',
    timeline: '2023 – 2024',
    role: 'Customer Service Advisor',
    tagline: 'Scripts were stale and KPIs were sliding. Rebuilt both from the ground up.',
    overview: "Customer service KPIs had stalled. The scripts agents worked from hadn't kept pace with the questions customers actually asked.",
    actions: [
      'Ran feedback sessions with the team.',
      'Rewrote scripts based on sentiment and call review.',
      'Introduced peer coaching for junior advisors.'
    ],
    impact: [
      'First-call resolution up 15%.',
      'Handling time down 20%.',
      'CSAT up 10% over six months.'
    ],
    impactHighlight: '+10% CSAT',
    skills: ['CX strategy', 'peer coaching', 'real-time analytics', 'operational improvement'],
    featured: false,
    order: 8
  },
  {
    id: 'project-5',
    title: 'Reporting automation & cost reduction',
    company: 'Genpact',
    timeline: '2010 – 2012',
    role: 'Assistant Project Manager',
    tagline: 'Finance ran on manual reports that took all day to build. We automated the boring part.',
    overview: 'Legacy finance reporting ate hours of manual compilation every single cycle. Leadership needed it faster and easier to read.',
    actions: [
      'Mapped inefficiencies and automation opportunities.',
      'Built automated workflows with Excel VBA.',
      'Ran stakeholder workshops to lock down KPIs and logic.'
    ],
    impact: [
      'Reporting time down 50%.',
      'Costs down 15% through better tooling.',
      'Faster daily decision-making.'
    ],
    impactHighlight: '-50% reporting time',
    skills: ['process automation', 'VBA', 'Excel macros', 'stakeholder facilitation', 'Lean thinking'],
    featured: false,
    order: 9
  }
];

export const getFeaturedProjects = () =>
  [...projects].filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getAllProjectsOrdered = () =>
  [...projects].sort((a, b) => a.order - b.order);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
