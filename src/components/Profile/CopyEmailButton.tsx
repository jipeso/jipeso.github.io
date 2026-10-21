import { IconButton, type SxProps, type Theme } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CheckIcon from '@mui/icons-material/Check'
import { profile } from '../../data/profile'

interface CopyEmailButtonProps {
  sx: SxProps<Theme>
}

const copiedStateSx: SxProps<Theme> = {
  '&[data-copied]': { color: 'primary.main' },
  '&[data-copied] [data-icon=copy], &:not([data-copied]) [data-icon=copied]': {
    display: 'none',
  },
}

const CopyEmailButton = ({ sx }: CopyEmailButtonProps) => (
  <IconButton
    aria-label='Copy email'
    data-copy={profile.email}
    data-copied-label='Email copied'
    sx={[copiedStateSx, sx].flat()}
  >
    <EmailIcon data-icon='copy' />
    <CheckIcon data-icon='copied' />
  </IconButton>
)

export default CopyEmailButton
