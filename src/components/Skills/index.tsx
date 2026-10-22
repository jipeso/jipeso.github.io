import { Box, Typography } from '@mui/material'
import { familiarSkills, skillCategories } from '../../data/skills'
import Section from '../Section'

const rows: [string, readonly string[]][] = [
  ...skillCategories,
  ['Also familiar with', familiarSkills],
]

const Skills = () => (
  <Section id='skills'>
    <Box
      component='dl'
      sx={{
        m: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'max-content 1fr' },
        columnGap: 4,
        rowGap: { xs: 0.5, sm: 1.5 },
      }}
    >
      {rows.map(([category, skills]) => (
        <Box key={category} sx={{ display: 'contents' }}>
          <Typography
            component='dt'
            color='textSecondary'
            sx={{ mt: { xs: 1.5, sm: 0 } }}
          >
            {category}
          </Typography>
          <Typography component='dd' sx={{ m: 0 }}>
            {skills.join(', ')}
          </Typography>
        </Box>
      ))}
    </Box>
  </Section>
)

export default Skills
