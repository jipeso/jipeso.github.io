import { Box, Link, Typography } from '@mui/material'
import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Box component='footer' sx={{ py: 10, px: 1.5 }}>
    <Typography variant='body2' align='center' color='textSecondary'>
      This page is rendered with React at build time and ships almost no
      JavaScript. <Link href={profile.repository}>Source on GitHub</Link>.
    </Typography>
    <Typography
      variant='body2'
      align='center'
      color='textSecondary'
      sx={{ mt: 1 }}
    >
      © {currentYear} {profile.name}
    </Typography>
  </Box>
)

export default Footer
