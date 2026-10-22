import newsArticlesImage from '../assets/articles-project.webp'
import infopisteImage from '../assets/infopiste-project.webp'
import bibtexProjectImage from '../assets/bibtex-project.webp'
import itArkkitehtuuriTableImage from '../assets/it-arkkitehtuuri-table-view.webp'
import itArkkitehtuuriDiagramImage from '../assets/it-arkkitehtuuri-diagram-builder.webp'
import duunitOverviewImage from '../assets/duunit-overview.webp'
import duunitApplicationsImage from '../assets/duunit-applications.webp'
import duunitJobAnalysisImage from '../assets/duunit-job-analysis.webp'
import duunitResumeViewerImage from '../assets/duunit-resume-viewer.webp'
import duunitSettingsImage from '../assets/duunit-settings.webp'
import duunitProfileImage from '../assets/duunit-profile.webp'
import { type SkillName } from './skills'

export interface Screenshot {
  src: string
  caption?: string
}

export interface Project {
  title: string
  company?: string
  year: number
  onCv?: boolean
  description: string
  highlights?: string[]
  production?: string
  repository?: string
  screenshots: Screenshot[]
  skills: SkillName[]
  fi?: Pick<Project, 'description' | 'highlights'>
}

export const projects: Project[] = [
  {
    title: 'Duunit',
    year: 2026,
    onCv: true,
    company: 'University project',
    description:
      'Job application tracker for keeping track of applications, interviews and deadlines, with statistics on your job search. One feature uses AI to fill in the application form from a pasted job description.',
    highlights: [
      'Built solo for my own job search, as the project for the Full Stack Open course (10 credits)',
      "AI output is forced into a JSON schema generated from the app's shared Zod types, and the job description is treated strictly as data to guard against prompt injection",
      'Automated release pipeline with end-to-end tests',
    ],
    repository: 'https://github.com/jipeso/duunit',
    screenshots: [
      {
        src: duunitOverviewImage,
        caption: 'Upcoming deadlines, interviews and sent applications',
      },
      { src: duunitApplicationsImage, caption: 'Applications' },
      { src: duunitJobAnalysisImage, caption: 'AI job description analysis' },
      { src: duunitResumeViewerImage, caption: 'Resume viewer' },
      {
        src: duunitSettingsImage,
        caption: 'Finnish, English or Swedish, light or dark',
      },
      {
        src: duunitProfileImage,
        caption: 'Profile with data export and account deletion',
      },
    ],
    production: 'https://duunit.site',
    skills: [
      'TypeScript',
      'React',
      'Express',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Playwright',
    ],
    fi: {
      description:
        'Työnhakusovellus hakemusten, haastattelujen ja määräaikojen seurantaan sekä työnhaun tilastoihin. Tekoäly täyttää hakemuslomakkeen liitetyn työpaikkailmoituksen pohjalta.',
      highlights: [
        'Tein yksin omaa työnhakuani varten Full Stack Open -kurssin projektina (10 op)',
        'Tekoälyn vastaus pakotetaan JSON-skeemaan, joka generoidaan sovelluksen jaetuista Zod-tyypeistä, ja työpaikkailmoitusta käsitellään pelkkänä datana prompt injectionin estämiseksi',
        'Automatisoitu julkaisuputki ja end-to-end-testit',
      ],
    },
  },
  {
    title: 'IT-Arkkitehtuuri',
    year: 2026,
    company: '2M-IT Oy',
    description:
      'Customer tool for searching and browsing IT architecture data synchronized from the ServiceNow REST API: 3000+ systems and 6000+ relationships between them.',
    highlights: [
      'Built solo during my internship, from architecture to deployment',
      'Diagram builder: from any system, draw everything related to it based on the relationship data',
      'Interactive data grids and report generation',
    ],
    screenshots: [
      { src: itArkkitehtuuriDiagramImage, caption: 'Diagram builder' },
      {
        src: itArkkitehtuuriTableImage,
        caption: 'Data synced from ServiceNow',
      },
    ],
    skills: [
      'TypeScript',
      'React',
      'Express',
      'PostgreSQL',
      'Docker',
      'NGINX',
      'Azure',
    ],
  },
  {
    title: 'Infopiste',
    year: 2025,
    onCv: true,
    company: 'University project',
    description:
      "Info screen for the University of Helsinki's Exactum building with an interactive floor plan, real-time room availability, a PDF bulletin board and campus restaurant menus.",
    highlights: [
      'Built in a team of six',
      "Integrated the Microsoft Graph API for real-time room availability and updated the SVG floor plan to show each room's status",
      'Also worked on the backend and the production deployment',
    ],
    repository: 'https://github.com/Infopisteprojekti/infopiste',
    screenshots: [{ src: infopisteImage }],
    fi: {
      description:
        'Infonäyttö Helsingin yliopiston Exactum-rakennukseen: interaktiivinen pohjapiirros, huoneiden reaaliaikainen varaustilanne, PDF-ilmoitustaulu ja kampusravintoloiden ruokalistat.',
      highlights: [
        'Toteutettu kuuden hengen tiimissä',
        'Toin huoneiden reaaliaikaisen varaustilanteen SVG-pohjapiirrokseen Microsoft Graph API:lla',
        'Osallistuin myös backendin ja tuotantoympäristön toteutukseen',
      ],
    },
    skills: [
      'JavaScript',
      'React',
      'Express',
      'MongoDB',
      'Redis',
      'Kubernetes',
    ],
  },
  {
    title: 'News article manager',
    year: 2025,
    company: 'University project',
    description:
      'Application for saving and managing news articles from RSS feeds.',
    highlights: [
      'Built solo with a layered architecture',
      'Automated tests and CI with coverage reporting',
    ],
    repository: 'https://github.com/jipeso/ohjelmistotekniikka',
    screenshots: [{ src: newsArticlesImage }],
    skills: ['Python', 'Flask', 'SQLite', 'Pytest'],
  },
  {
    title: 'BibTeX reference manager',
    year: 2024,
    company: 'University project',
    description:
      'Application for creating and managing BibTeX references for academic writing.',
    highlights: [
      'Built in a Scrum team of six',
      'Contributed to frontend development',
      'Automated tests and CI with coverage reporting',
    ],
    repository: 'https://github.com/ruokokoski/ohtu-miniprojekti',
    screenshots: [{ src: bibtexProjectImage }],
    skills: ['Python', 'Flask', 'PostgreSQL', 'Pytest'],
  },
]
