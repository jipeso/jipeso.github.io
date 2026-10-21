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
import BulletList from '../BulletList'

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
      variant='outlined'
      sx={{
        p: 2.5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
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
            aspectRatio: '16 / 9',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            mb: 2,
          }}
        />
        <Typography color='text.secondary'>{project.description}</Typography>
        {project.highlights && <BulletList items={project.highlights} />}
      </CardContent>
      <Box
        sx={{
          mt: 'auto',
          pt: 2,
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
