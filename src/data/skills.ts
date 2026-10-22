export const skillsByCategory = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  Frontend: ['React', 'Material UI'],
  Backend: ['Node.js', 'Express', 'Flask'],
  Databases: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'],
  'DevOps & Cloud': [
    'Docker',
    'GitHub Actions',
    'Kubernetes',
    'NGINX',
    'Azure',
    'AWS',
  ],
  'Testing & Tooling': [
    'Playwright',
    'Vitest',
    'Pytest',
    'Vite',
    'Poetry',
    'Git',
    'Robot Framework',
  ],
} as const

export const familiarSkills = [
  'Apollo GraphQL',
  'Django',
  'Expo',
  'Next.js',
  'React Native',
  'Redux',
  'Tailwind',
] as const

export type SkillCategory = keyof typeof skillsByCategory

export const skillCategoryNamesFi: Record<SkillCategory, string> = {
  Languages: 'Ohjelmointikielet',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Databases: 'Tietokannat',
  'DevOps & Cloud': 'DevOps ja pilvi',
  'Testing & Tooling': 'Testaus ja työkalut',
}

export type SkillName =
  | (typeof skillsByCategory)[keyof typeof skillsByCategory][number]
  | (typeof familiarSkills)[number]

export const skillCategories = Object.entries(skillsByCategory) as [
  SkillCategory,
  readonly string[],
][]
