import reactIcon from '../assets/skills/react.svg'
import pythonIcon from '../assets/skills/python.svg'
import flaskIcon from '../assets/skills/flask.svg'
import djangoIcon from '../assets/skills/django.svg'
import javascriptIcon from '../assets/skills/javascript.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import nodejsIcon from '../assets/skills/nodejs.svg'
import expressIcon from '../assets/skills/express.svg'
import mongodbIcon from '../assets/skills/mongodb.svg'
import postgresqlIcon from '../assets/skills/postgresql.svg'
import redisIcon from '../assets/skills/redis.svg'
import dockerIcon from '../assets/skills/docker.svg'
import gitIcon from '../assets/skills/git.svg'
import html5Icon from '../assets/skills/html5.svg'
import css3Icon from '../assets/skills/css3.svg'
import kubernetesIcon from '../assets/skills/kubernetes.svg'
import reduxIcon from '../assets/skills/redux.svg'
import vitejsIcon from '../assets/skills/vitejs.svg'
import tailwindcssIcon from '../assets/skills/tailwindcss.svg'
import githubactionsIcon from '../assets/skills/githubactions.svg'
import playwrightIcon from '../assets/skills/playwright.svg'
import apollographqlIcon from '../assets/skills/apollographql.svg'
import poetryIcon from '../assets/skills/poetry.svg'
import materialuiIcon from '../assets/skills/materialui.svg'
import reactnativeIcon from '../assets/skills/reactnative.svg'
import expoIcon from '../assets/skills/expo.svg'
import sqliteIcon from '../assets/skills/sqlite.svg'
import nextjsIcon from '../assets/skills/nextjs.svg'
import nginxIcon from '../assets/skills/nginx.svg'
import azureIcon from '../assets/skills/azure.svg'
import amazonwebservicesIcon from '../assets/skills/amazonwebservices.svg'
import pytestIcon from '../assets/skills/pytest.svg'
import vitestIcon from '../assets/skills/vitest.svg'

export interface Skill {
  name: string
  icon: string
  familiar?: boolean
  monochrome?: boolean
}

export const skillsByCategory = {
  Languages: [
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'HTML', icon: html5Icon },
    { name: 'CSS', icon: css3Icon },
  ],
  Frontend: [
    { name: 'React', icon: reactIcon },
    { name: 'Material UI', icon: materialuiIcon },
    { name: 'Redux', icon: reduxIcon, familiar: true },
    { name: 'Tailwind', icon: tailwindcssIcon, familiar: true },
    { name: 'Next.js', icon: nextjsIcon, familiar: true, monochrome: true },
    { name: 'React Native', icon: reactnativeIcon, familiar: true },
    { name: 'Expo', icon: expoIcon, familiar: true, monochrome: true },
  ],
  Backend: [
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Express', icon: expressIcon, monochrome: true },
    { name: 'Flask', icon: flaskIcon, monochrome: true },
    { name: 'Django', icon: djangoIcon, familiar: true, monochrome: true },
    {
      name: 'Apollo GraphQL',
      icon: apollographqlIcon,
      familiar: true,
      monochrome: true,
    },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'SQLite', icon: sqliteIcon },
    { name: 'Redis', icon: redisIcon },
  ],
  'DevOps & Cloud': [
    { name: 'Docker', icon: dockerIcon },
    { name: 'GitHub Actions', icon: githubactionsIcon },
    { name: 'Kubernetes', icon: kubernetesIcon },
    { name: 'NGINX', icon: nginxIcon },
    { name: 'Azure', icon: azureIcon },
    { name: 'AWS', icon: amazonwebservicesIcon, monochrome: true },
  ],
  'Testing & Tooling': [
    { name: 'Playwright', icon: playwrightIcon },
    { name: 'Vitest', icon: vitestIcon },
    { name: 'Pytest', icon: pytestIcon },
    { name: 'Vite', icon: vitejsIcon },
    { name: 'Poetry', icon: poetryIcon },
    { name: 'Git', icon: gitIcon },
  ],
} as const satisfies Record<string, readonly Skill[]>

export type SkillName =
  (typeof skillsByCategory)[keyof typeof skillsByCategory][number]['name']

export const skillCategories: [string, readonly Skill[]][] =
  Object.entries(skillsByCategory)

const allSkills: Skill[] = Object.values(skillsByCategory).flat()

export const familiarSkills = allSkills
  .filter(skill => skill.familiar)
  .sort((a, b) => a.name.localeCompare(b.name))

export const skillsByName = Object.fromEntries(
  allSkills.map(skill => [skill.name, skill])
) as Record<SkillName, Skill>
