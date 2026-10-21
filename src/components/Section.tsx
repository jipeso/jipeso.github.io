import { Box, Container, Typography } from '@mui/material'
import { sectionTitles, type SectionId } from '../data/sections'

interface SectionProps {
  id: SectionId
  children: React.ReactNode
}

const Section = ({ id, children }: SectionProps) => (
  <Box component='section' id={id}>
    <Container maxWidth='md'>
      <Typography variant='h2' sx={{ mb: 2 }}>
        {sectionTitles[id]}
      </Typography>
      {children}
    </Container>
  </Box>
)

export default Section
