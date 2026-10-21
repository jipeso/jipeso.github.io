import { Stack } from '@mui/material'
import { education, work } from '../../data/experience'
import Section from '../Section'
import TimelineCard from './TimelineCard'

const Experience = () => (
  <Section id='experience'>
    <Stack spacing={3}>
      <TimelineCard title='Work' entries={work} />
      <TimelineCard title='Education' entries={education} />
    </Stack>
  </Section>
)

export default Experience
