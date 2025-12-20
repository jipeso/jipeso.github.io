import { type ElementType } from 'react';

export type Category =
  | 'Programming Languages'
  | 'Frontend development'
  | 'Backend development'
  | 'Databases'
  | 'Other Tools';

export interface Skill {
  name: string;
  category: Category;
  IconComponent: ElementType;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}
