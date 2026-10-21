import {
  Stack,
  Tooltip,
  IconButton,
  type SxProps,
  type Theme,
} from '@mui/material'
import { socials } from '../../data/socials'
import CopyEmailButton from './CopyEmailButton'

const iconButtonSx: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'divider',
  transition: theme => theme.transitions.create(['color', 'background-color']),
  '&:hover': { color: 'primary.main' },
}

const SocialLinks = () => (
  <Stack direction='row' spacing={1.5} sx={{ pt: 2 }}>
    {socials.map(({ title, link, Icon }) => (
      <Tooltip key={title} title={title}>
        <IconButton
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          sx={iconButtonSx}
        >
          <Icon />
        </IconButton>
      </Tooltip>
    ))}
    <CopyEmailButton sx={iconButtonSx} />
  </Stack>
)

export default SocialLinks
