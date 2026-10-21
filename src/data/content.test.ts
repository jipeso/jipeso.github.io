import { describe, expect, it } from 'vitest'
import { education, work } from './experience'
import { about } from './profile'
import { projects } from './projects'
import { skillCategories } from './skills'
import { socials } from './socials'

const duplicates = (values: string[]) =>
  values.filter((value, index) => values.indexOf(value) !== index)

describe('content', () => {
  it('has unique skill names', () => {
    const names = skillCategories.flatMap(([, skills]) =>
      skills.map(skill => skill.name)
    )
    expect(duplicates(names)).toEqual([])
  })

  it('has unique project titles', () => {
    expect(duplicates(projects.map(project => project.title))).toEqual([])
  })

  it('lists each skill once per project', () => {
    const repeated = projects.flatMap(project => duplicates(project.skills))
    expect(repeated).toEqual([])
  })

  it('has unique entry titles in each timeline', () => {
    expect(duplicates(work.map(entry => entry.title))).toEqual([])
    expect(duplicates(education.map(entry => entry.title))).toEqual([])
  })

  it('uses https for every external link', () => {
    const links = [
      ...projects.flatMap(project => [project.production, project.repository]),
      ...socials.map(social => social.link),
    ].filter(link => link !== undefined)
    expect(links.filter(link => !link.startsWith('https://'))).toEqual([])
  })

  it('closes every highlight in the about text', () => {
    const unclosed = about.filter(
      paragraph => paragraph.split('**').length % 2 === 0
    )
    expect(unclosed).toEqual([])
  })
})
