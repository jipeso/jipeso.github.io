import { Box, Container, Stack, Typography } from '@mui/material'
import { educationData, workData } from '../../data/experience'
import TimelineCard from './TimelineCard'

const Experience = () => (
  <Box component='section' id='experience' sx={{ scrollMarginTop: '60px' }}>
    <Container maxWidth='md'>
      <Typography variant='h2' sx={{ mb: 2 }}>
        Experience
      </Typography>
      <Stack spacing={3}>
        <TimelineCard title='Work' entries={workData} />
        <TimelineCard title='Education' entries={educationData} />
      </Stack>
    </Container>
  </Box>
)

export default Experience
