import { type Project } from '../types';

import newsArticlesImage from '../assets/articles-project.webp';
import infoScreenImage from '../assets/infoscreen-project.webp';
import bibtexProjectImage from '../assets/bibtex-project.webp';

export const projectData: Project[] = [
  {
    title: 'Infoscreen',
    description:
      "Info screen application for the University of Helsinki's Exactum building, featuring an interactive floor plan with real-time room availability, a pdf bulletin board, and campus restaurant menus",
    link: 'https://github.com/Infopisteprojekti/infopiste',
    image: infoScreenImage,
  },
  {
    title: 'News article manager',
    description:
      'Application for saving and managing news articles from RSS feeds',
    link: 'https://github.com/jipeso/ohjelmistotekniikka',
    image: newsArticlesImage,
  },
  {
    title: 'BibTeX reference manager',
    description:
      'Application for creating and managing BibTeX references for academic writing',
    link: 'https://github.com/ruokokoski/ohtu-miniprojekti',
    image: bibtexProjectImage,
  },
];
