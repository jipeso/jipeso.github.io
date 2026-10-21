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

import { type Category, type Skill } from '../types'

export const CATEGORIES: Category[] = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'DevOps & Cloud',
  'Testing & Tooling',
]

export const skillData = [
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'primary',
    IconComponent: TypescriptOriginal,
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 'primary',
    IconComponent: JavascriptOriginal,
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 'primary',
    IconComponent: PythonOriginal,
  },
  {
    name: 'HTML',
    category: 'Languages',
    level: 'primary',
    IconComponent: Html5Original,
  },
  {
    name: 'CSS',
    category: 'Languages',
    level: 'primary',
    IconComponent: Css3Original,
  },

  {
    name: 'React',
    category: 'Frontend',
    level: 'primary',
    IconComponent: ReactOriginal,
  },
  {
    name: 'Material UI',
    category: 'Frontend',
    level: 'primary',
    IconComponent: MaterialuiOriginal,
  },
  {
    name: 'Redux',
    category: 'Frontend',
    level: 'familiar',
    IconComponent: ReduxOriginal,
  },
  {
    name: 'Tailwind',
    category: 'Frontend',
    level: 'familiar',
    IconComponent: TailwindcssOriginal,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 'familiar',
    IconComponent: NextjsPlain,
    monochrome: true,
  },
  {
    name: 'React Native',
    category: 'Frontend',
    level: 'familiar',
    IconComponent: ReactnativeOriginal,
  },
  {
    name: 'Expo',
    category: 'Frontend',
    level: 'familiar',
    IconComponent: ExpoOriginal,
    monochrome: true,
  },

  {
    name: 'Node.js',
    category: 'Backend',
    level: 'primary',
    IconComponent: NodejsOriginal,
  },
  {
    name: 'Express',
    category: 'Backend',
    level: 'primary',
    IconComponent: ExpressOriginal,
    monochrome: true,
  },
  {
    name: 'Flask',
    category: 'Backend',
    level: 'primary',
    IconComponent: FlaskOriginal,
    monochrome: true,
  },
  {
    name: 'Django',
    category: 'Backend',
    level: 'familiar',
    IconComponent: DjangoPlain,
    monochrome: true,
  },
  {
    name: 'Apollo GraphQL',
    category: 'Backend',
    level: 'familiar',
    IconComponent: ApollographqlOriginal,
    monochrome: true,
  },

  {
    name: 'PostgreSQL',
    category: 'Databases',
    level: 'primary',
    IconComponent: PostgresqlOriginal,
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    level: 'primary',
    IconComponent: MongodbOriginal,
  },
  {
    name: 'SQLite',
    category: 'Databases',
    level: 'primary',
    IconComponent: SqliteOriginal,
  },
  {
    name: 'Redis',
    category: 'Databases',
    level: 'primary',
    IconComponent: RedisOriginal,
  },

  {
    name: 'Docker',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: DockerOriginal,
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: GithubactionsOriginal,
  },
  {
    name: 'Kubernetes',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: KubernetesOriginal,
  },
  {
    name: 'NGINX',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: NginxOriginal,
  },
  {
    name: 'Azure',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: AzureOriginal,
  },
  {
    name: 'AWS',
    category: 'DevOps & Cloud',
    level: 'primary',
    IconComponent: AmazonwebservicesPlainWordmark,
    monochrome: true,
  },

  {
    name: 'Playwright',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: PlaywrightOriginal,
  },
  {
    name: 'Vitest',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: VitestOriginal,
  },
  {
    name: 'Pytest',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: PytestOriginal,
  },
  {
    name: 'Vite',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: VitejsOriginal,
  },
  {
    name: 'Poetry',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: PoetryOriginal,
  },
  {
    name: 'Git',
    category: 'Testing & Tooling',
    level: 'primary',
    IconComponent: GitOriginal,
  },
] as const satisfies readonly Skill[]

export type SkillName = (typeof skillData)[number]['name']

export const skillsByName = new Map<SkillName, Skill>(
  skillData.map(skill => [skill.name, skill])
)
