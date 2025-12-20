import { Box, Container, Typography } from '@mui/material';

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
            color: 'primary.main',
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
          I'm a computer science master's student at the University of Helsinki
          passionate about software architecture and development. I enjoy
          building maintainable and performant applications with intuitive and
          accessible interfaces. Currently focused on full-stack web development
          with React and TypeScript.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
