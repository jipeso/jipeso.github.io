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
    period: 'May 2026 — Aug 2026',
    highlights: [
      'Designed, built and deployed a tool for a customer to browse their ServiceNow IT architecture data (thousands of systems and relationships), from an open brief',
      'Diagram builder that draws everything related to a system from the relationship data',
      'Set up the production server from a fresh Ubuntu install: Docker, NGINX, PostgreSQL, Redis and OAuth2 Proxy with Microsoft sign-in',
      'CI/CD in Azure Pipelines: builds the Docker image and pushes it to Azure Container Registry',
      'Worked directly with users and wrote setup, usage and architecture docs',
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'MSc, Computer Science',
    organization: 'University of Helsinki',
    period: '2026 — present',
    highlights: ['Software Engineering track'],
  },
  {
    title: 'BSc, Computer Science',
    organization: 'University of Helsinki',
    period: '2023 — 2026',
    highlights: ['GPA 3.41/5'],
  },
  {
    title: 'BSc studies, Physical Sciences',
    organization: 'University of Turku',
    period: '2020 — 2022',
  },
]
