import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
} from '@mui/material'
import { type Project } from '../../types'
import { skillsByName } from '../../data/skills'
import SkillItem from '../Skills/SkillItem'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectSkills = (project.skills ?? []).flatMap(name => {
    const skill = skillsByName.get(name)
    return skill ? [skill] : []
  })

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
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box
          sx={{
            mb: 0.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: 1,
          }}
        >
          <Typography variant='h3'>{project.title}</Typography>
          {project.company && (
            <Typography variant='subtitle2' color='text.secondary'>
              {project.company}
            </Typography>
          )}
        </Box>
        <CardMedia
          component='img'
          image={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            mb: 2,
          }}
        />
        <Typography color='text.secondary'>{project.description}</Typography>
        {project.highlights && (
          <Box component='ul' sx={{ mt: 1.5, mb: 0, pl: 2.5 }}>
            {project.highlights.map(highlight => (
              <Typography
                key={highlight}
                component='li'
                color='text.secondary'
                sx={{ mb: 0.5 }}
              >
                {highlight}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
      <Box
        sx={{
          mt: 'auto',
          px: 2,
          pb: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box>
          {projectSkills.length > 0 && (
            <Box>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ mb: 1, display: 'block' }}
              >
                Key technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {projectSkills.map(skill => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {(project.production || project.link) && (
          <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
            {project.production && (
              <Button
                size='small'
                href={project.production}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Production
              </Button>
            )}
            {project.link && (
              <Button
                size='small'
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Repository
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Card>
  )
}

export default ProjectCard
