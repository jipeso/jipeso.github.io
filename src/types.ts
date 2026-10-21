import { type ElementType } from 'react'

export type Category =
  | 'Languages'
  | 'Frameworks & UI'
  | 'Databases'
  | 'DevOps & Infrastructure'
  | 'Developer Tools'
  | 'Testing & Automation'

export interface Skill {
  name: string
  category: Category
  IconComponent: ElementType
}

export interface Project {
  title: string
  company?: string
  description: string
  production?: string
  link?: string
  image?: string
  skills?: string[]
}
export interface SocialsLink {
  title: string
  link: string
  icon: ElementType
  label: string
}
