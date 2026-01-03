import { Stack, Tooltip, IconButton } from '@mui/material';
import { socialsData } from '../../data/socials';

const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
      {socialsData.map(({ title, link, icon: Icon, label }) => (
        <Tooltip
          key={title}
          title={title}
          arrow
          enterDelay={300}
          enterNextDelay={300}
        >
          <IconButton
            href={link}
            target="_blank"
            aria-label={label}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default SocialLinks;
