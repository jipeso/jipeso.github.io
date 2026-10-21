import { Box, Paper, Typography } from '@mui/material'
import type { Skill } from '../../types'
import SkillItem from './SkillItem'

interface CategoryCardProps {
  title: string
  skills: Skill[]
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => {
  return (
    <Paper variant='outlined' sx={{ p: 2.5, borderRadius: 2, height: '100%' }}>
      <Typography variant='h3' gutterBottom>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </Box>
    </Paper>
  )
}

export default CategoryCard
