import { type ElementType } from 'react'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import PythonOriginal from 'devicons-react/icons/PythonOriginal'
import FlaskOriginal from 'devicons-react/icons/FlaskOriginal'
import DjangoPlain from 'devicons-react/icons/DjangoPlain'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal'
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal'
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal'
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal'
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal'
import RedisOriginal from 'devicons-react/icons/RedisOriginal'
import DockerOriginal from 'devicons-react/icons/DockerOriginal'
import GitOriginal from 'devicons-react/icons/GitOriginal'
import Html5Original from 'devicons-react/icons/Html5Original'
import Css3Original from 'devicons-react/icons/Css3Original'
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal'
import ReduxOriginal from 'devicons-react/icons/ReduxOriginal'
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal'
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal'
import GithubactionsOriginal from 'devicons-react/icons/GithubactionsOriginal'
import PlaywrightOriginal from 'devicons-react/icons/PlaywrightOriginal'
import ApollographqlOriginal from 'devicons-react/icons/ApollographqlOriginal'
import PoetryOriginal from 'devicons-react/icons/PoetryOriginal'
import MaterialuiOriginal from 'devicons-react/icons/MaterialuiOriginal'
import ReactnativeOriginal from 'devicons-react/icons/ReactnativeOriginal'
import ExpoOriginal from 'devicons-react/icons/ExpoOriginal'
import SqliteOriginal from 'devicons-react/icons/SqliteOriginal'
import NextjsPlain from 'devicons-react/icons/NextjsPlain'
import NginxOriginal from 'devicons-react/icons/NginxOriginal'
import AzureOriginal from 'devicons-react/icons/AzureOriginal'
import AmazonwebservicesPlainWordmark from 'devicons-react/icons/AmazonwebservicesPlainWordmark'
import PytestOriginal from 'devicons-react/icons/PytestOriginal'
import VitestOriginal from 'devicons-react/icons/VitestOriginal'

export interface Skill {
  name: string
  Icon: ElementType
  familiar?: boolean
  monochrome?: boolean
}

export const skillsByCategory = {
  Languages: [
    { name: 'TypeScript', Icon: TypescriptOriginal },
    { name: 'JavaScript', Icon: JavascriptOriginal },
    { name: 'Python', Icon: PythonOriginal },
    { name: 'HTML', Icon: Html5Original },
    { name: 'CSS', Icon: Css3Original },
  ],
  Frontend: [
    { name: 'React', Icon: ReactOriginal },
    { name: 'Material UI', Icon: MaterialuiOriginal },
    { name: 'Redux', Icon: ReduxOriginal, familiar: true },
    { name: 'Tailwind', Icon: TailwindcssOriginal, familiar: true },
    { name: 'Next.js', Icon: NextjsPlain, familiar: true, monochrome: true },
    { name: 'React Native', Icon: ReactnativeOriginal, familiar: true },
    { name: 'Expo', Icon: ExpoOriginal, familiar: true, monochrome: true },
  ],
  Backend: [
    { name: 'Node.js', Icon: NodejsOriginal },
    { name: 'Express', Icon: ExpressOriginal, monochrome: true },
    { name: 'Flask', Icon: FlaskOriginal, monochrome: true },
    { name: 'Django', Icon: DjangoPlain, familiar: true, monochrome: true },
    {
      name: 'Apollo GraphQL',
      Icon: ApollographqlOriginal,
      familiar: true,
      monochrome: true,
    },
  ],
  Databases: [
    { name: 'PostgreSQL', Icon: PostgresqlOriginal },
    { name: 'MongoDB', Icon: MongodbOriginal },
    { name: 'SQLite', Icon: SqliteOriginal },
    { name: 'Redis', Icon: RedisOriginal },
  ],
  'DevOps & Cloud': [
    { name: 'Docker', Icon: DockerOriginal },
    { name: 'GitHub Actions', Icon: GithubactionsOriginal },
    { name: 'Kubernetes', Icon: KubernetesOriginal },
    { name: 'NGINX', Icon: NginxOriginal },
    { name: 'Azure', Icon: AzureOriginal },
    { name: 'AWS', Icon: AmazonwebservicesPlainWordmark, monochrome: true },
  ],
  'Testing & Tooling': [
    { name: 'Playwright', Icon: PlaywrightOriginal },
    { name: 'Vitest', Icon: VitestOriginal },
    { name: 'Pytest', Icon: PytestOriginal },
    { name: 'Vite', Icon: VitejsOriginal },
    { name: 'Poetry', Icon: PoetryOriginal },
    { name: 'Git', Icon: GitOriginal },
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
