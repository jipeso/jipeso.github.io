import { describe, expect, it } from 'vitest'
import { cvs } from './cvContent'
import { education, work } from './experience'
import { projects } from './projects'
import { familiarSkills, skillCategories } from './skills'
import { socials } from './socials'

const duplicates = (values: string[]) =>
  values.filter((value, index) => values.indexOf(value) !== index)

describe('content', () => {
  it('has unique skill names', () => {
    const names = [
      ...skillCategories.flatMap(([, skills]) => skills),
      ...familiarSkills,
    ]
    expect(duplicates(names)).toEqual([])
  })

  it('has unique project titles', () => {
    expect(duplicates(projects.map(project => project.title))).toEqual([])
  })

  it('puts projects on the CV', () => {
    expect(projects.some(project => project.onCv)).toBe(true)
  })

  it('translates every CV project', () => {
    const untranslated = projects
      .filter(project => project.onCv && !project.fi)
      .map(project => project.title)
    expect(untranslated).toEqual([])
  })

  it('has the same entries in every CV language', () => {
    const shape = (entries: { highlights?: string[] }[]) =>
      entries.map(entry => entry.highlights?.length)
    for (const cv of cvs) {
      expect(shape(cv.work)).toEqual(shape(work))
      expect(shape(cv.education)).toEqual(shape(education))
      expect(shape(cv.projects)).toEqual(
        shape(projects.filter(project => project.onCv))
      )
    }
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
})
