import { Box, Typography } from '@mui/material'
import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Box component='footer' sx={{ py: 10 }}>
      <Typography variant='body2' align='center' color='textSecondary'>
        © {currentYear} {profile.name}. Made with React + Vite.
      </Typography>
    </Box>
  )
}

export default Footer
