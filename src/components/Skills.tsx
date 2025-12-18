import { Container, Typography, Grid, Paper, Box, Chip } from '@mui/material';
import { skills, categories } from '../data/skills';
import { getSkillIcon, getBrandColor } from '../utils/skillUtils';

const Skills = () => {
  return (
    <Container id="skills" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
        Technical Skills
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid size={{ xs: 12, md: 6 }} key={category}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                color="text.secondary"
                sx={{ fontWeight: 'bold' }}
              >
                {category}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const IconComponent = getSkillIcon(skill.icon);
                    const brandColor = getBrandColor(skill.icon);
                    return (
                      <Chip
                        key={skill.name}
                        label={skill.name}
                        variant="outlined"
                        size="medium"
                        icon={
                          IconComponent ? (
                            <IconComponent
                              style={{
                                color: brandColor || 'inherit',
                                fontSize: '2rem',
                              }}
                            />
                          ) : undefined
                        }
                        sx={{
                          py: 3,
                          px: 1,
                          fontSize: '1.1rem',
                          fontWeight: 750,
                          borderRadius: '12px',
                          borderWidth: '2px',
                        }}
                      />
                    );
                  })}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
