import { type Skill, type Category } from '../types';

export const categories: Category[] = [
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database',
  'Other Tools',
];

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming Languages', icon: 'python' },
  { name: 'Flask', category: 'Backend', icon: 'flask' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'javascript' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'typescript' },
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Express', category: 'Backend', icon: 'express' },
  { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
  { name: 'MongoDB', category: 'Database', icon: 'mongodb' },
  { name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  { name: 'Redis ', category: 'Database', icon: 'redis' },
  { name: 'Docker', category: 'Other Tools', icon: 'docker' },
  { name: 'OpenShift', category: 'Other Tools', icon: 'openshift' },
  { name: 'GitHub', category: 'Other Tools', icon: 'github' },
  { name: 'Git', category: 'Other Tools', icon: 'git' },
  { name: 'HTML5', category: 'Frontend', icon: 'html5' },
  { name: 'Ubuntu', category: 'Other Tools', icon: 'ubuntu' },
  { name: 'GraphQL', category: 'Backend', icon: 'graphql' },
];
