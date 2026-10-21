import { Typography } from '@mui/material'

interface HighlightProps {
  children: React.ReactNode
}

const Highlight = ({ children }: HighlightProps) => (
  <Typography component='span' sx={{ color: 'primary.main' }}>
    {children}
  </Typography>
)

export default Highlight
