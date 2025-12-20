import { Grid, Container, Typography, Box, Divider } from '@mui/material';
import { skillData, categories } from '../../data/skills';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          My tech stack
        </Typography>
        {categories.map((category) => (
          <Box key={category} sx={{ mb: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ mb: 2, color: 'text.secondary' }}
            >
              {category}
            </Typography>

            <Grid container spacing={1}>
              {skillData
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Grid key={skill.name}>
                    <SkillItem skill={skill} />
                  </Grid>
                ))}
            </Grid>

            <Divider sx={{ mt: 2, opacity: 0.6 }} />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
