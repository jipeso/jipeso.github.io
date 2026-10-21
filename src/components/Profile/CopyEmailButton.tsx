import { useEffect, useRef, useState } from 'react'
import { IconButton, Tooltip, type SxProps, type Theme } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CheckIcon from '@mui/icons-material/Check'
import { profile } from '../../data/profile'

const COPIED_DURATION_MS = 1500

interface CopyEmailButtonProps {
  sx?: SxProps<Theme>
}

const CopyEmailButton = ({ sx }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false)
  const resetTimeout = useRef<number>(undefined)

  useEffect(() => () => clearTimeout(resetTimeout.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      return
    }
    setCopied(true)
    clearTimeout(resetTimeout.current)
    resetTimeout.current = window.setTimeout(
      () => setCopied(false),
      COPIED_DURATION_MS
    )
  }

  return (
    <Tooltip title={copied ? 'Email copied' : 'Copy email'}>
      <IconButton
        onClick={copyEmail}
        color={copied ? 'primary' : 'default'}
        sx={sx}
      >
        {copied ? <CheckIcon /> : <EmailIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default CopyEmailButton
