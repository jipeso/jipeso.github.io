import { type ElementType } from 'react'
import { type SkillName } from './data/skills'

export type Category =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'DevOps & Cloud'
  | 'Testing & Tooling'

export type Level = 'primary' | 'familiar'

export interface Skill {
  name: string
  category: Category
  level: Level
  IconComponent: ElementType
  monochrome?: boolean
}

export interface Project {
  title: string
  company?: string
  description: string
  production?: string
  link?: string
  image?: string
  skills?: SkillName[]
}
export interface SocialsLink {
  title: string
  link: string
  icon: ElementType
  label: string
}
