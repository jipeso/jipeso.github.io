import { type Project } from '../types';

import newsArticlesImage from '../assets/news-articles.png';
import infoScreenImage from '../assets/infoscreen.png';
import bibtexProjectImage from '../assets/bibtex-project.png';

export const projectData: Project[] = [
  {
    title: 'Infoscreen',
    description:
      "Web application for university's infoscreens with an interactive floorplan, a bulletin board and a restaurant menu built with React, Node.js, MongoDB, Redis and Docker",
    link: 'https://github.com/Infopisteprojekti/infopiste',
    image: infoScreenImage,
  },
  {
    title: 'BibTeX reference tool',
    description: 'A tool for creating BibTeX references built with Python',
    link: 'https://github.com/ruokokoski/ohtu-miniprojekti',
    image: bibtexProjectImage,
  },
  {
    title: 'News article scraping tool',
    description:
      'A tool for saving and managing news articles from RSS feeds, built with Tkinter and Python',
    link: 'https://github.com/jipeso/ohjelmistotekniikka',
    image: newsArticlesImage,
  },
];
