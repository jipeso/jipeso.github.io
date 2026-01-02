import { Container, Grid, Box } from '@mui/material';
import { projectData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeader from '../SectionHeader';

const Projects = () => {
  return (
    <Box component="section" id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeader overline="My Work" title="Featured Projects" />
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid key={index} size={{ xs: 12, sm: 12, md: 12 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
