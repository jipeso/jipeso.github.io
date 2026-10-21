import { Stack } from '@mui/material'
import { projects } from '../../data/projects'
import Section from '../Section'
import ProjectCard from './ProjectCard'

const Projects = () => (
  <Section id='projects'>
    <Stack spacing={4}>
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Stack>
  </Section>
)

export default Projects
