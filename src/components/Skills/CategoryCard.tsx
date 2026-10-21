import { Box, Typography } from '@mui/material'
import type { Skill } from '../../types'
import SkillItem from './SkillItem'

interface CategoryCardProps {
  title: string
  skills: Skill[]
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => {
  return (
    <Box
      sx={{
        p: 1.5,
        border: '1px solid',
        borderRadius: 2,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        height: '100%',
      }}
    >
      <Typography variant='h3' gutterBottom>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </Box>
    </Box>
  )
}

export default CategoryCard
