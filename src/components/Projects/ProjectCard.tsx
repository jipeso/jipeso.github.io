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
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          width: '100%',
          aspectRatio: '16 / 9',
          objectFit: 'cover',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
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
