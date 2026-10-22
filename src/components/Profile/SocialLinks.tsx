import {
  Button,
  Stack,
  IconButton,
  type SxProps,
  type Theme,
} from '@mui/material'
import { profile } from '../../data/profile'
import { socials } from '../../data/socials'
import CopyEmailButton from './CopyEmailButton'

const outlinedSx: SxProps<Theme> = theme => ({
  border: '1px solid',
  borderColor: 'divider',
  transition: theme.transitions.create(['color', 'background-color']),
  '&:hover': { color: 'primary.main' },
})

const tooltipSx: SxProps<Theme> = theme => ({
  '&::after': {
    content: 'attr(aria-label)',
    position: 'absolute',
    top: '100%',
    left: '50%',
    mt: 1,
    px: 1,
    py: 0.5,
    borderRadius: 1,
    bgcolor: 'Tooltip.bg',
    color: 'common.white',
    fontSize: theme.typography.pxToRem(11),
    fontWeight: 500,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: 0,
    transform: 'translateX(-50%)',
    transition: theme.transitions.create('opacity'),
  },
  '&:hover::after': { opacity: 1, transitionDelay: '300ms' },
  '&:focus-visible::after': { opacity: 1 },
})

const iconButtonSx: SxProps<Theme> = [outlinedSx, tooltipSx]

const cvButtonSx: SxProps<Theme> = [
  outlinedSx,
  { height: 40, minWidth: 0, px: 2, borderRadius: 5 },
]

const SocialLinks = () => (
  <Stack direction='row' spacing={1.5} sx={{ pt: 2 }}>
    {socials.map(({ title, link, Icon }) => (
      <IconButton
        key={title}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={title}
        sx={iconButtonSx}
      >
        <Icon />
      </IconButton>
    ))}
    <CopyEmailButton sx={iconButtonSx} />
    <Button href={profile.cv} color='inherit' sx={cvButtonSx}>
      CV
    </Button>
  </Stack>
)

export default SocialLinks
