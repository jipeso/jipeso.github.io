import { Stack, Typography } from '@mui/material'
import { about } from '../../data/profile'
import Section from '../Section'

const About = () => (
  <Section id='about'>
    <Stack spacing={2} sx={{ maxWidth: '65ch' }}>
      {about.map(paragraph => (
        <Typography key={paragraph} color='textSecondary'>
          {paragraph}
        </Typography>
      ))}
    </Stack>
  </Section>
)

export default About
