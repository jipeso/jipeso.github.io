import { Card, Box, Typography, Button } from '@mui/material'
import { type Project } from '../../data/projects'
import BulletList from '../BulletList'
import Screenshots from './Screenshots'

interface ProjectCardProps {
  project: Project
}

interface ExternalLink {
  label: string
  href: string
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const links = [
    { label: 'Live site', href: project.production },
    { label: 'Source code', href: project.repository },
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
      <Screenshots title={project.title} screenshots={project.screenshots} />
      <Typography color='textSecondary'>{project.description}</Typography>
      {project.highlights && <BulletList items={project.highlights} />}
      <Box
        sx={{
          mt: 'auto',
          pt: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography variant='body2' color='textSecondary'>
          {project.skills.join(' · ')}
        </Typography>

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
