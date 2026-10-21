import { Container, Box, Grid, Typography } from '@mui/material'
import { CATEGORIES, skillData } from '../../data/skills'
import CategoryCard from './CategoryCard'
import SkillItem from './SkillItem'

const primarySkills = skillData.filter(skill => skill.level === 'primary')

const familiarSkills = skillData
  .filter(skill => skill.level === 'familiar')
  .sort((a, b) => a.name.localeCompare(b.name))

const categories = CATEGORIES.filter(category =>
  primarySkills.some(skill => skill.category === category)
)

const Skills = () => {
  return (
    <Box component='section' id='skills' sx={{ scrollMarginTop: '60px' }}>
      <Container maxWidth='md'>
        <Typography variant='h2' sx={{ mb: 2 }}>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {categories.map(category => (
            <Grid size={{ xs: 12, sm: 6 }} key={category}>
              <CategoryCard
                title={category}
                skills={primarySkills.filter(
                  skill => skill.category === category
                )}
              />
            </Grid>
          ))}
        </Grid>

        {familiarSkills.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              sx={{ mb: 1 }}
            >
              Also familiar with
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {familiarSkills.map(skill => (
                <SkillItem key={skill.name} skill={skill} muted />
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Skills
