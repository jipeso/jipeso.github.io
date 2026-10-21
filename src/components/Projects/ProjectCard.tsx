import { Card, CardMedia, Box, Typography, Button } from '@mui/material'
import { type Project } from '../../data/projects'
import { skillsByName } from '../../data/skills'
import SkillItem from '../Skills/SkillItem'
import BulletList from '../BulletList'

interface ProjectCardProps {
  project: Project
}

interface ExternalLink {
  label: string
  href: string
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const links = [
    { label: 'View Production', href: project.production },
    { label: 'View Repository', href: project.repository },
  ].filter((link): link is ExternalLink => link.href !== undefined)

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
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
          <Typography variant='subtitle2' color='textSecondary'>
            {project.company}
          </Typography>
        )}
      </Box>
      <CardMedia
        component='img'
        image={project.image}
        alt={`Screenshot of ${project.title}`}
        loading='lazy'
        decoding='async'
        sx={{
          aspectRatio: '16 / 9',
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
          mb: 2,
        }}
      />
      <Typography color='textSecondary'>{project.description}</Typography>
      {project.highlights && <BulletList items={project.highlights} />}
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
          <Typography
            variant='caption'
            color='textSecondary'
            sx={{ mb: 1, display: 'block' }}
          >
            Key technologies:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.skills.map(name => (
              <SkillItem key={name} skill={skillsByName[name]} />
            ))}
          </Box>
        </Box>

        {links.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
            {links.map(({ label, href }) => (
              <Button
                key={label}
                size='small'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Card>
  )
}

export default ProjectCard
