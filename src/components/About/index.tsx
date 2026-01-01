import { Box, Container, Typography } from '@mui/material';
import Highlight from './Highlight';

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            color: 'text.default',
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          I'm a <Highlight>Computer Science</Highlight> Master's student at the
          University of Helsinki with a keen interest in{' '}
          <Highlight>Software Development</Highlight>. My background is in{' '}
          <Highlight>Theoretical Physics</Highlight>, where I got into
          programming. I enjoy building maintainable and performant applications
          with intuitive and accessible interfaces. Currently focused on{' '}
          <Highlight>Full Stack Web Development</Highlight> with TypeScript and
          React, and I'm actively seeking work opportunities in software
          development.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
