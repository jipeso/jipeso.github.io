import { Tooltip, Paper } from '@mui/material';
import { type Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  const { name, IconComponent } = skill;

  return (
    <Tooltip title={name} arrow enterDelay={300} enterNextDelay={300}>
      <Paper
        variant="outlined"
        component="div"
        role="img"
        aria-label={name}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: 2,
          backgroundColor: '#fff',
          color: 'text.primary',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.2s, background-color 0.2s',
          '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: '#f8f8f8',
          },
        }}
      >
        <IconComponent size={32} />
      </Paper>
    </Tooltip>
  );
};

export default SkillItem;
