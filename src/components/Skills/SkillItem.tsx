import { Typography, Paper } from '@mui/material';
import { type Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  const { name, IconComponent } = skill;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => theme.shadows[4],
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
      }}
    >
      <IconComponent size={40} />
      <Typography variant="body2" fontWeight="medium">
        {name}
      </Typography>
    </Paper>
  );
};

export default SkillItem;
