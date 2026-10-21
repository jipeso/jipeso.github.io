import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import PythonOriginal from 'devicons-react/icons/PythonOriginal'
import FlaskOriginal from 'devicons-react/icons/FlaskOriginal'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal'
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal'
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal'
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal'
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal'
import RedisOriginal from 'devicons-react/icons/RedisOriginal'
import DockerOriginal from 'devicons-react/icons/DockerOriginal'
import GithubOriginal from 'devicons-react/icons/GithubOriginal'
import GitOriginal from 'devicons-react/icons/GitOriginal'
import Html5Original from 'devicons-react/icons/Html5Original'
import Css3Original from 'devicons-react/icons/Css3Original'
import UbuntuOriginal from 'devicons-react/icons/UbuntuOriginal'
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
import NextjsOriginal from 'devicons-react/icons/NextjsOriginal'

import { type Skill } from '../types'
import {
  AzureOriginal,
  EslintOriginal,
  NginxOriginal,
  PostmanOriginal,
  PytestOriginal,
  SequelizeOriginal,
  VitestOriginal,
  VscodeOriginal,
} from 'devicons-react'

export const skillData: Skill[] = [
  {
    name: 'Python',
    category: 'Languages',
    IconComponent: PythonOriginal,
  },
  {
    name: 'Flask',
    category: 'Frameworks & UI',
    IconComponent: FlaskOriginal,
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    IconComponent: JavascriptOriginal,
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    IconComponent: TypescriptOriginal,
  },
  {
    name: 'React',
    category: 'Frameworks & UI',
    IconComponent: ReactOriginal,
  },
  {
    name: 'Express',
    category: 'Frameworks & UI',
    IconComponent: ExpressOriginal,
  },
  {
    name: 'Node.js',
    category: 'Developer Tools',
    IconComponent: NodejsOriginal,
  },
  { name: 'MongoDB', category: 'Databases', IconComponent: MongodbOriginal },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    IconComponent: PostgresqlOriginal,
  },
  { name: 'Redis', category: 'Databases', IconComponent: RedisOriginal },
  {
    name: 'Docker',
    category: 'DevOps & Infrastructure',
    IconComponent: DockerOriginal,
  },
  {
    name: 'Kubernetes',
    category: 'DevOps & Infrastructure',
    IconComponent: KubernetesOriginal,
  },
  {
    name: 'GitHub',
    category: 'Developer Tools',
    IconComponent: GithubOriginal,
  },
  { name: 'Git', category: 'Developer Tools', IconComponent: GitOriginal },
  {
    name: 'HTML',
    category: 'Languages',
    IconComponent: Html5Original,
  },
  {
    name: 'CSS',
    category: 'Languages',
    IconComponent: Css3Original,
  },
  {
    name: 'Ubuntu',
    category: 'DevOps & Infrastructure',
    IconComponent: UbuntuOriginal,
  },
  {
    name: 'Apollo GraphQL',
    category: 'Frameworks & UI',
    IconComponent: ApollographqlOriginal,
  },
  {
    name: 'Redux',
    category: 'Frameworks & UI',
    IconComponent: ReduxOriginal,
  },
  {
    name: 'Vite',
    category: 'Developer Tools',
    IconComponent: VitejsOriginal,
  },
  {
    name: 'Tailwind',
    category: 'Frameworks & UI',
    IconComponent: TailwindcssOriginal,
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps & Infrastructure',
    IconComponent: GithubactionsOriginal,
  },
  {
    name: 'Playwright',
    category: 'Testing & Automation',
    IconComponent: PlaywrightOriginal,
  },
  {
    name: 'Pytest',
    category: 'Testing & Automation',
    IconComponent: PytestOriginal,
  },
  {
    name: 'Poetry',
    category: 'Developer Tools',
    IconComponent: PoetryOriginal,
  },
  {
    name: 'Material UI',
    category: 'Frameworks & UI',
    IconComponent: MaterialuiOriginal,
  },
  {
    name: 'React Native',
    category: 'Frameworks & UI',
    IconComponent: ReactnativeOriginal,
  },
  {
    name: 'Expo',
    category: 'Developer Tools',
    IconComponent: ExpoOriginal,
  },
  {
    name: 'SQLite',
    category: 'Databases',
    IconComponent: SqliteOriginal,
  },
  {
    name: 'Postman',
    category: 'Developer Tools',
    IconComponent: PostmanOriginal,
  },
  {
    name: 'NGINX',
    category: 'DevOps & Infrastructure',
    IconComponent: NginxOriginal,
  },
  {
    name: 'Azure',
    category: 'DevOps & Infrastructure',
    IconComponent: AzureOriginal,
  },
  {
    name: 'Eslint',
    category: 'Developer Tools',
    IconComponent: EslintOriginal,
  },
  {
    name: 'Sequelize',
    category: 'Frameworks & UI',
    IconComponent: SequelizeOriginal,
  },
  {
    name: 'Vitest',
    category: 'Testing & Automation',
    IconComponent: VitestOriginal,
  },
  {
    name: 'VS Code',
    category: 'Developer Tools',
    IconComponent: VscodeOriginal,
  },
  {
    name: 'Next.js',
    category: 'Frameworks & UI',
    IconComponent: NextjsOriginal,
  },
]
