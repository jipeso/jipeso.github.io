import { Paper, Typography } from '@mui/material'
import { type Skill } from '../../types'

interface SkillItemProps {
  skill: Skill
  muted?: boolean
}

const SkillItem = ({ skill, muted = false }: SkillItemProps) => {
  const { name, IconComponent, monochrome } = skill

  return (
    <Paper
      variant='outlined'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.25,
        py: 0.75,
        borderRadius: 2,
        bgcolor: 'background.default',
        opacity: muted ? 0.75 : 1,
        ...(monochrome && {
          '& svg, & svg *': { fill: 'currentColor !important' },
        }),
      }}
    >
      <IconComponent size={muted ? 18 : 22} />
      <Typography variant='body2' component='span' sx={{ lineHeight: 1 }}>
        {name}
      </Typography>
    </Paper>
  )
}

export default SkillItem
