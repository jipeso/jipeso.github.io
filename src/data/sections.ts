export const sections = {
  about: { label: 'About', title: 'About me' },
  skills: { label: 'Skills', title: 'Skills' },
  experience: { label: 'Experience', title: 'Experience' },
  projects: { label: 'Projects', title: 'Featured projects' },
}

export type SectionId = keyof typeof sections
