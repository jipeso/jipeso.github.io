import { Box, Container, Typography } from '@mui/material'
import { sections, type SectionId } from '../data/sections'

interface SectionProps {
  id: SectionId
  children: React.ReactNode
}

const Section = ({ id, children }: SectionProps) => (
  <Box component='section' id={id}>
    <Container maxWidth='md'>
      <Typography variant='h2' sx={{ mb: 2 }}>
        {sections[id].title}
      </Typography>
      {children}
    </Container>
  </Box>
)

export default Section
