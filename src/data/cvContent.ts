import { cvDocuments, type CvDocument } from './cv'
import {
  education,
  educationFi,
  work,
  workFi,
  type TimelineEntry,
} from './experience'
import {
  profile,
  profileFi,
  spokenLanguages,
  spokenLanguagesFi,
} from './profile'
import { projects, type Project } from './projects'
import { skillCategories, skillCategoryNamesFi } from './skills'

export interface CvContent extends CvDocument {
  role: string
  location: string
  work: TimelineEntry[]
  projects: Project[]
  education: TimelineEntry[]
  skillRows: [string, string][]
}

const cvProjects = projects.filter(project => project.onCv)

const english: CvContent = {
  ...cvDocuments.en,
  role: profile.role,
  location: profile.location,
  work,
  projects: cvProjects,
  education,
  skillRows: [
    ...skillCategories.map(([category, skills]): [string, string] => [
      category,
      skills.join(', '),
    ]),
    ['Spoken languages', spokenLanguages.join(', ')],
  ],
}

const finnish: CvContent = {
  ...cvDocuments.fi,
  role: profileFi.role,
  location: profileFi.location,
  work: workFi,
  projects: cvProjects.map(({ fi, ...project }) => ({ ...project, ...fi })),
  education: educationFi,
  skillRows: [
    ...skillCategories.map(([category, skills]): [string, string] => [
      skillCategoryNamesFi[category],
      skills.join(', '),
    ]),
    ['Kielitaito', spokenLanguagesFi.join(', ')],
  ],
}

export const cvs = [english, finnish]
