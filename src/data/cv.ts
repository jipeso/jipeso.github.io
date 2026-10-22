import { profile, profileFi } from './profile.ts'

export interface CvDocument {
  lang: string
  page: string
  pdf: string
  title: string
  description: string
  headings: Record<'experience' | 'projects' | 'education' | 'skills', string>
}

export const cvDocuments = {
  en: {
    lang: 'en',
    page: 'cv.html',
    pdf: 'joni_pesonen_cv.pdf',
    title: `${profile.name} — CV`,
    description: `CV of ${profile.name}, ${profile.role.toLowerCase()} in ${profile.location}.`,
    headings: {
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      skills: 'Skills',
    },
  },
  fi: {
    lang: 'fi',
    page: 'cv-fi.html',
    pdf: 'joni_pesonen_cv_fi.pdf',
    title: `${profile.name} — ansioluettelo`,
    description: `${profile.name}, ${profileFi.role.toLowerCase()}, ${profileFi.location}. Ansioluettelo.`,
    headings: {
      experience: 'Työkokemus',
      projects: 'Projektit',
      education: 'Koulutus',
      skills: 'Osaaminen',
    },
  },
} satisfies Record<string, CvDocument>

export const cvList: CvDocument[] = Object.values(cvDocuments)
