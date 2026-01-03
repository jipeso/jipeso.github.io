import { type ElementType } from 'react';

export type Category =
  | 'Languages'
  | 'Frameworks & Libraries'
  | 'Databases'
  | 'Tools & Platforms';

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
export interface SocialsLink {
  title: string;
  link: string;
  icon: ElementType;
  label: string;
}
