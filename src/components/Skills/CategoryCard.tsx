import { Box, Card, Typography } from '@mui/material'
import { type Skill } from '../../data/skills'
import SkillItem from './SkillItem'

interface CategoryCardProps {
  title: string
  skills: Skill[]
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => (
  <Card sx={{ height: '100%' }}>
    <Typography variant='h3' gutterBottom>
      {title}
    </Typography>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {skills.map(skill => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </Box>
  </Card>
)

export default CategoryCard
