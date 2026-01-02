import { Container, Box, Grid } from '@mui/material';
import { skillData, categories } from '../../data/skills';
import CategoryCard from './CategoryCard';
import SectionHeader from '../SectionHeader';

const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeader overline="Technical Stack" title="Skills" />
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={category}>
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
