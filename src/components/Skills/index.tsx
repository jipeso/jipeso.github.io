import { Container, Box, Grid } from '@mui/material';
import { skillData } from '../../data/skills';
import CategoryCard from './CategoryCard';
import SectionHeader from '../SectionHeader';

const Skills = () => {
  const categories = Array.from(
    new Set(skillData.map((skill) => skill.category))
  );

  return (
    <Box component="section" id="skills">
      <Container maxWidth="md">
        <SectionHeader overline="Technical Stack" title="Skills" />
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
