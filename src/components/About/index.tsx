import { Stack, Typography } from '@mui/material'
import { about } from '../../data/profile'
import Section from '../Section'
import Highlight from './Highlight'

const withHighlights = (text: string) =>
  text
    .split(/\*\*(.+?)\*\*/)
    .map((part, index) =>
      index % 2 ? <Highlight key={index}>{part}</Highlight> : part
    )

const About = () => (
  <Section id='about'>
    <Stack spacing={2} sx={{ maxWidth: '65ch' }}>
      {about.map(paragraph => (
        <Typography key={paragraph} color='textSecondary'>
          {withHighlights(paragraph)}
        </Typography>
      ))}
    </Stack>
  </Section>
)

export default About
