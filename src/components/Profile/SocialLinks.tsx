import { Stack, Tooltip, IconButton } from '@mui/material'
import { socialsData } from '../../data/socials'
import CopyEmailButton from './CopyEmailButton'

const iconButtonSx = {
  border: '1px solid',
  borderColor: 'divider',
  transition: 'all 0.3s ease-in-out',
  '&:hover': { color: 'primary.main' },
}

const SocialLinks = () => {
  return (
    <Stack direction='row' spacing={1.5} sx={{ pt: 2 }}>
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
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            sx={iconButtonSx}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
      <CopyEmailButton sx={iconButtonSx} />
    </Stack>
  )
}

export default SocialLinks
