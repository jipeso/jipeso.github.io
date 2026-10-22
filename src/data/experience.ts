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
      'Designed, built and deployed a tool for a customer to browse their ServiceNow IT architecture data (3000+ systems and 6000+ relationships), from an open brief',
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

export const workFi: TimelineEntry[] = [
  {
    title: 'Ohjelmistokehittäjäharjoittelija',
    organization: '2M-IT Oy',
    period: '5/2026 — 8/2026',
    highlights: [
      'Suunnittelin, toteutin ja vein tuotantoon avoimen toimeksiannon pohjalta asiakkaalle työkalun ServiceNow-IT-arkkitehtuuridatan selaamiseen (3000+ järjestelmää ja 6000+ suhdetta)',
      'Kaaviotyökalu, joka piirtää suhdetietojen perusteella järjestelmien väliset riippuvuudet automaattisesti',
      'Pystytin tuotantopalvelimen tyhjästä Ubuntu-asennuksesta: Docker, NGINX, PostgreSQL, Redis ja OAuth2 Proxy Microsoft-kirjautumisella',
      'CI/CD Azure Pipelinesissa: Docker-imagen rakennus ja julkaisu Azure Container Registryyn',
      'Työskentelin suoraan käyttäjien kanssa ja kirjoitin asennus-, käyttö- ja arkkitehtuuridokumentit',
    ],
  },
]

export const educationFi: TimelineEntry[] = [
  {
    title: 'FM, tietojenkäsittelytiede',
    organization: 'Helsingin yliopisto',
    period: '2026 — nyt',
    highlights: ['Ohjelmistot-opintosuunta'],
  },
  {
    title: 'LuK, tietojenkäsittelytiede',
    organization: 'Helsingin yliopisto',
    period: '2023 — 2026',
    highlights: ['Keskiarvo 3,41/5'],
  },
  {
    title: 'Kandidaattiopintoja, fysikaaliset tieteet',
    organization: 'Turun yliopisto',
    period: '2020 — 2022',
  },
]
