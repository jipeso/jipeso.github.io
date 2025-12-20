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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 2,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          height: 200,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography gutterBottom variant="h5">
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
