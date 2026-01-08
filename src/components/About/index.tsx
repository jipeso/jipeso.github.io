import { Box, Container, Typography } from '@mui/material';
import Highlight from './Highlight';
import SectionHeader from '../SectionHeader';

const About = () => {
  return (
    <Box component="section" id="about" sx={{ scrollMarginTop: '60px' }}>
      <Container maxWidth="md">
        <SectionHeader overline="Introduction" title="About Me" />
        <Typography
          sx={{
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          I'm a <Highlight>Computer Science</Highlight> MSc student at the
          University of Helsinki specializing in{' '}
          <Highlight>Software Engineering</Highlight>. Before transitioning to
          CS, I studied Physics at the University of Turku for two years, where
          I discovered my passion for programming. I enjoy building maintainable
          and performant applications with intuitive and accessible interfaces.
          Currently focused on <Highlight>Web Development</Highlight> with
          TypeScript and React, and actively seeking professional opportunities
          in software engineering.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
