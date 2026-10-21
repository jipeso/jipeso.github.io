import { useState } from 'react'
import { IconButton, Tooltip, type SxProps } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CheckIcon from '@mui/icons-material/Check'
import { email } from '../../data/socials'

const COPIED_DURATION_MS = 1500

interface CopyEmailButtonProps {
  sx: SxProps
}

const CopyEmailButton = ({ sx }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), COPIED_DURATION_MS)
  }

  return (
    <Tooltip title='Copy email' arrow enterDelay={300} enterNextDelay={300}>
      <IconButton
        onClick={copyEmail}
        aria-label={copied ? 'Email copied' : 'Copy email'}
        color={copied ? 'primary' : 'default'}
        sx={sx}
      >
        {copied ? <CheckIcon /> : <EmailIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default CopyEmailButton
