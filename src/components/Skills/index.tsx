import { Grid, Container, Typography, Box, Divider } from '@mui/material';
import { skillData, categories } from '../../data/skills';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" align="center" gutterBottom>
          My tech stack
        </Typography>
      </Box>

      {categories.map((category) => (
        <Box key={category} sx={{ mb: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ mb: 2, fontWeight: 'medium', color: 'primary.main' }}
          >
            {category}
          </Typography>

          <Grid container spacing={1}>
            {skillData
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <Grid size={1.5} key={skill.name}>
                  <SkillItem skill={skill} />
                </Grid>
              ))}
          </Grid>

          <Divider sx={{ mt: 2, opacity: 0.6 }} />
        </Box>
      ))}
    </Container>
  );
};

export default Skills;
