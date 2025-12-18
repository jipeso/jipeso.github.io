import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

import { projectData } from '../data/projects';
import { type Project } from '../types';

const Projects = () => {
  return (
    <Container id="projects" sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {(projectData as Project[]).map((project, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                height="140"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link}>
                  View repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
