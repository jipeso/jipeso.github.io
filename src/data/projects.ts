import newsArticlesImage from '../assets/articles-project.webp'
import infoScreenImage from '../assets/infoscreen-project.webp'
import bibtexProjectImage from '../assets/bibtex-project.webp'
import itArkkitehtuuriImage from '../assets/it-arkkitehtuuri-project.webp'
import duunitImage from '../assets/duunit-project.webp'
import { type SkillName } from './skills'

export interface Project {
  title: string
  company?: string
  description: string
  highlights?: string[]
  production?: string
  repository?: string
  image: string
  skills: SkillName[]
}

export const projects: Project[] = [
  {
    title: 'Duunit',
    company: 'University project',
    description:
      'Job application tracker with a statistics dashboard and AI-powered job description analysis.',
    highlights: [
      'Designed and developed solo for Full Stack -web development project',
      'AI job description analysis using the OpenRouter API',
      'Automated release pipeline with end-to-end tests',
    ],
    repository: 'https://github.com/jipeso/duunit',
    image: duunitImage,
    production: 'https://duunit.site',
    skills: [
      'TypeScript',
      'Docker',
      'Node.js',
      'React',
      'Material UI',
      'Express',
      'PostgreSQL',
      'AWS',
      'Vite',
      'GitHub Actions',
      'Playwright',
    ],
  },
  {
    title: 'IT-Arkkitehtuuri',
    company: '2M-IT Oy',
    description:
      'Tool for viewing and managing IT architecture data synchronized from ServiceNow.',
    highlights: [
      'Designed and developed solo',
      'Interactive data grids, report generation and a diagram builder that visualizes relationships automatically',
    ],
    image: itArkkitehtuuriImage,
    skills: [
      'TypeScript',
      'Docker',
      'Node.js',
      'React',
      'Material UI',
      'Express',
      'PostgreSQL',
      'NGINX',
      'Azure',
      'Vite',
      'GitHub Actions',
      'Vitest',
    ],
  },
  {
    title: 'Infoscreen',
    company: 'University project',
    description:
      "Info screen for the University of Helsinki's Exactum building with an interactive floor plan, real-time room availability, a PDF bulletin board and campus restaurant menus.",
    highlights: [
      'Built in a team of six',
      'Contributed to the production deployment, floor plan, backend and Microsoft Graph API integration for room availability',
    ],
    repository: 'https://github.com/Infopisteprojekti/infopiste',
    image: infoScreenImage,
    skills: [
      'JavaScript',
      'Docker',
      'Node.js',
      'React',
      'Express',
      'MongoDB',
      'Kubernetes',
      'Redis',
      'Vite',
      'GitHub Actions',
      'Playwright',
      'Vitest',
    ],
  },
  {
    title: 'News article manager',
    company: 'University project',
    description:
      'Application for saving and managing news articles from RSS feeds.',
    highlights: [
      'Built solo with a layered architecture',
      'Automated tests and CI with coverage reporting',
    ],
    repository: 'https://github.com/jipeso/ohjelmistotekniikka',
    image: newsArticlesImage,
    skills: ['Python', 'Flask', 'Poetry', 'SQLite', 'Pytest', 'GitHub Actions'],
  },
  {
    title: 'BibTeX reference manager',
    company: 'University project',
    description:
      'Application for creating and managing BibTeX references for academic writing.',
    highlights: [
      'Built in a Scrum team of six',
      'Contributed to frontend development',
      'Automated tests and CI with coverage reporting',
    ],
    repository: 'https://github.com/ruokokoski/ohtu-miniprojekti',
    image: bibtexProjectImage,
    skills: [
      'Python',
      'Flask',
      'Poetry',
      'PostgreSQL',
      'Pytest',
      'GitHub Actions',
    ],
  },
]
