export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  timeline: string;
  hook: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Betfair',
    role: 'Customer Service Team Lead',
    location: 'Darwin, NT',
    timeline: 'Nov 2024 – Present',
    hook: 'Walked into a team drowning in Slack tickets and a phone system nobody trusted.',
    points: [
      'Led a full phone system replacement to fix call routing.',
      'Built a Slack bot that cut resolution time 20%.',
      'Drove UI changes in Telbet to cut daily friction.',
      'Coached the team to a 15% lift in key metrics.'
    ]
  },
  {
    company: 'Sportsbet',
    role: 'Customer Service Advisor',
    location: 'Darwin, NT',
    timeline: 'Mar 2023 – Nov 2024',
    hook: "KPIs were sliding and the scripts hadn't been touched in years.",
    points: [
      'Rebuilt scripts from sentiment data and call review.',
      'Cut average handling time 20%.',
      'Lifted first-call resolution 15% and CSAT 10%.'
    ]
  },
  {
    company: 'Illion Australia',
    role: 'Account Manager',
    location: 'Melbourne, VIC',
    timeline: 'Oct 2018 – Oct 2021',
    hook: 'Nobody knew an account was at risk until it was already gone.',
    points: [
      'Built a real time analytics dashboard for account health.',
      'Lifted client retention 30%.',
      'Boosted operational efficiency 20%.'
    ]
  },
  {
    company: 'Royal Bank of Scotland',
    role: 'Unit Lead',
    location: 'Delhi, India',
    timeline: 'Jul 2012 – Jul 2018',
    hook: 'Credit risk got assessed by feel, chased down by paperwork.',
    points: [
      'Directed a digital onboarding and credit risk system.',
      'Cut fraud losses 40%.',
      'Managed 15 analysts to 95% on-time delivery.'
    ]
  }
];
