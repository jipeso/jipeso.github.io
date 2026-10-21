import { type Project } from '../types'

import newsArticlesImage from '../assets/articles-project.webp'
import infoScreenImage from '../assets/infoscreen-project.webp'
import bibtexProjectImage from '../assets/bibtex-project.webp'
import itArkkitehtuuriImage from '../assets/it-arkkitehtuuri-project.webp'
import duunitImage from '../assets/duunit-project.webp'

export const projectData: Project[] = [
  {
    title: 'Duunit',
    company: 'University project',
    description:
      'Duunit is a personal job application tracker. Users can create and manage job applications and track their progress. The application also provides a dashboard for visualizing application statistics and an AI job description analysis tool.',
    link: 'https://github.com/jipeso/duunit',
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
      'Specialized tool designed for viewing and managing IT architecture data synchronized from ServiceNow. It provides capabilities for data exploration via interactive grids, report generation, and automated relationship visualization through a dynamic diagram builder',
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
    company: 'University of Helsinki',
    description:
      "Application for the University of Helsinki's Exactum building, featuring an interactive floor plan with real-time room availability, a pdf bulletin board, and campus restaurant menus",
    link: 'https://github.com/Infopisteprojekti/infopiste',
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
      'Application for saving and managing news articles from RSS feeds',
    link: 'https://github.com/jipeso/ohjelmistotekniikka',
    image: newsArticlesImage,
    skills: ['Python', 'Flask', 'Poetry', 'SQLite', 'Pytest', 'GitHub Actions'],
  },
  {
    title: 'BibTeX reference manager',
    company: 'University project',
    description:
      'Application for creating and managing BibTeX references for academic writing',
    link: 'https://github.com/ruokokoski/ohtu-miniprojekti',
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
