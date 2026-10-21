import { Box, Grid, Typography } from '@mui/material'
import { familiarSkills, skillCategories } from '../../data/skills'
import Section from '../Section'
import CategoryCard from './CategoryCard'
import SkillItem from './SkillItem'

const primaryCategories = skillCategories
  .map(([title, skills]) => ({
    title,
    skills: skills.filter(skill => !skill.familiar),
  }))
  .filter(category => category.skills.length > 0)

const Skills = () => (
  <Section id='skills'>
    <Grid container spacing={3}>
      {primaryCategories.map(({ title, skills }) => (
        <Grid size={{ xs: 12, sm: 6 }} key={title}>
          <CategoryCard title={title} skills={skills} />
        </Grid>
      ))}
    </Grid>

    {familiarSkills.length > 0 && (
      <Box sx={{ mt: 3 }}>
        <Typography variant='subtitle1' color='text.secondary' sx={{ mb: 1 }}>
          Also familiar with
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {familiarSkills.map(skill => (
            <SkillItem key={skill.name} skill={skill} muted />
          ))}
        </Box>
      </Box>
    )}
  </Section>
)

export default Skills
