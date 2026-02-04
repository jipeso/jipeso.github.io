import { Container, Box, Grid, Typography } from '@mui/material';
import { skillData } from '../../data/skills';
import CategoryCard from './CategoryCard';

const Skills = () => {
  const categories = Array.from(
    new Set(skillData.map((skill) => skill.category))
  );

  return (
    <Box component="section" id="skills" sx={{ scrollMarginTop: '60px' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2 }}>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, sm: 6 }} key={category}>
              <CategoryCard
                title={category}
                skills={skillData.filter(
                  (skill) => skill.category === category
                )}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
