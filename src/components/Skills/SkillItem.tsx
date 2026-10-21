import { Box, Paper, Typography } from '@mui/material'
import { type Skill } from '../../data/skills'

interface SkillItemProps {
  skill: Skill
  muted?: boolean
}

const SkillItem = ({ skill, muted = false }: SkillItemProps) => {
  const { name, icon, monochrome } = skill
  const size = muted ? 18 : 22

  return (
    <Paper
      variant='outlined'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.25,
        py: 0.75,
        bgcolor: 'background.default',
        opacity: muted ? 0.75 : 1,
      }}
    >
      {monochrome ? (
        <Box
          aria-hidden
          sx={{
            width: size,
            height: size,
            bgcolor: 'currentColor',
            mask: `url(${icon}) center / contain no-repeat`,
          }}
        />
      ) : (
        <img src={icon} alt='' width={size} height={size} loading='lazy' />
      )}
      <Typography variant='body2' component='span' sx={{ lineHeight: 1 }}>
        {name}
      </Typography>
    </Paper>
  )
}

export default SkillItem
