export interface TimelineEntry {
  title: string
  organization: string
  period: string
  highlights?: string[]
}

export const work: TimelineEntry[] = [
  {
    title: 'Software Developer Intern',
    organization: '2M-IT Oy',
    period: 'May 2026 - Aug 2026',
    highlights: [
      'Designed and developed a software system for managing IT architecture data synchronized from ServiceNow',
      'Worked independently from design to deployment',
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'MSc, Computer Science',
    organization: 'University of Helsinki',
    period: '2026 - present',
    highlights: ['Software Engineering track'],
  },
  {
    title: 'BSc, Computer Science',
    organization: 'University of Helsinki',
    period: '2023 - 2026',
  },
  {
    title: 'BSc studies, Physical Sciences',
    organization: 'University of Turku',
    period: '2020 - 2022',
    highlights: [
      'Studied physics and theoretical physics before switching to Computer Science',
    ],
  },
]
