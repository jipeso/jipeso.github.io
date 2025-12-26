import { Box, Typography, Grid } from '@mui/material';
import type { Skill } from '../../types';
import SkillItem from './SkillItem';

interface CategoryCardProps {
  title: string;
  skills: Skill[];
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid',
        borderRadius: 2,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        height: '100%',
      }}
    >
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid key={skill.name}>
            <SkillItem skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryCard;
