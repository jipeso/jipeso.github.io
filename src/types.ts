export type Category =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Other Tools';

export interface Skill {
  name: string;
  category: Category;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}
