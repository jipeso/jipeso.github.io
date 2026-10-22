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

export type SkillName =
  | (typeof skillsByCategory)[keyof typeof skillsByCategory][number]
  | (typeof familiarSkills)[number]

export const skillCategories: [string, readonly string[]][] =
  Object.entries(skillsByCategory)
