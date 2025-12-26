import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { type Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        border: '2px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'contain',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography gutterBottom variant="h5" color="text.primary">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button
          size="small"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
