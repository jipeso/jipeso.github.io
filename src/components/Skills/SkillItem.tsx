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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 2,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
      }}
    >
      <IconComponent size={32} />
      <Typography
        variant="body2"
        fontWeight="medium"
        sx={{ mt: 1, textAlign: 'center' }}
      >
        {name}
      </Typography>
    </Paper>
  );
};

export default SkillItem;
