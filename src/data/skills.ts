import {
  ReactOriginal,
  PythonOriginal,
  FlaskOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  PostgresqlOriginal,
  RedisOriginal,
  DockerOriginal,
  GithubOriginal,
  GitOriginal,
  Html5Original,
  Css3Original,
  UbuntuOriginal,
  GraphqlPlain,
  KubernetesOriginal,
} from 'devicons-react';

import type { Skill, Category } from '../types';

export const categories: Category[] = [
  'Programming Languages',
  'Frontend development',
  'Backend development',
  'Databases',
  'Other Tools',
];

export const skillData: Skill[] = [
  {
    name: 'Python',
    category: 'Programming Languages',
    IconComponent: PythonOriginal,
  },
  {
    name: 'Flask',
    category: 'Backend development',
    IconComponent: FlaskOriginal,
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    IconComponent: JavascriptOriginal,
  },
  {
    name: 'TypeScript',
    category: 'Programming Languages',
    IconComponent: TypescriptOriginal,
  },
  {
    name: 'React',
    category: 'Frontend development',
    IconComponent: ReactOriginal,
  },
  {
    name: 'Express',
    category: 'Backend development',
    IconComponent: ExpressOriginal,
  },
  {
    name: 'Node.js',
    category: 'Backend development',
    IconComponent: NodejsOriginal,
  },
  { name: 'MongoDB', category: 'Databases', IconComponent: MongodbOriginal },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    IconComponent: PostgresqlOriginal,
  },
  { name: 'Redis ', category: 'Databases', IconComponent: RedisOriginal },
  { name: 'Docker', category: 'Other Tools', IconComponent: DockerOriginal },
  {
    name: 'Kubernetes',
    category: 'Other Tools',
    IconComponent: KubernetesOriginal,
  },
  { name: 'GitHub', category: 'Other Tools', IconComponent: GithubOriginal },
  { name: 'Git', category: 'Other Tools', IconComponent: GitOriginal },
  {
    name: 'HTML',
    category: 'Frontend development',
    IconComponent: Html5Original,
  },
  {
    name: 'CSS',
    category: 'Frontend development',
    IconComponent: Css3Original,
  },
  { name: 'Ubuntu', category: 'Other Tools', IconComponent: UbuntuOriginal },
  {
    name: 'GraphQL',
    category: 'Backend development',
    IconComponent: GraphqlPlain,
  },
];
