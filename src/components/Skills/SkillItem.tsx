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
        elevation={0}
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          bgcolor: '#FFFFFF',

          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <IconComponent size={40} />
      </Paper>
    </Tooltip>
  );
};

export default SkillItem;
