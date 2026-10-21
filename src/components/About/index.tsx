import { Box, Container, Typography } from '@mui/material'
import Highlight from './Highlight'

const About = () => {
  return (
    <Box component='section' id='about' sx={{ scrollMarginTop: '60px' }}>
      <Container maxWidth='md'>
        <Typography variant='h2' sx={{ mb: 2 }}>
          About me
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            maxWidth: '65ch',
          }}
        >
          I'm a <Highlight>Computer Science</Highlight> Master's student at the
          University of Helsinki, specializing in{' '}
          <Highlight>Software Engineering</Highlight>, with a background in
          Physics.
          <br />
          <br />I focus on building well-structured software, understanding
          systems, and making clear design decisions. I'm particularly
          interested in <Highlight>full-stack development</Highlight>, system
          design, and learning through practical projects and collaboration.
          <br />
          <br />
          I'm currently looking for{' '}
          <Highlight>internship and junior developer</Highlight> opportunities,
          and I'm happy to work in Finnish or English.
        </Typography>
      </Container>
    </Box>
  )
}

export default About
