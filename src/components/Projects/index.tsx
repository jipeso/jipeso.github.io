import { Container, Grid, Box, Typography } from '@mui/material'
import { projectData } from '../../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Box component='section' id='projects' sx={{ scrollMarginTop: '60px' }}>
      <Container maxWidth='md'>
        <Typography variant='h2' sx={{ mb: 2 }}>
          Featured projects
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid key={index} size={12}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects
