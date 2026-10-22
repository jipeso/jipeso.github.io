import { Box, Typography } from '@mui/material'

interface CvSectionProps {
  title: string
  children: React.ReactNode
}

const CvSection = ({ title, children }: CvSectionProps) => (
  <Box component='section' sx={{ mt: 2 }}>
    <Typography variant='h2' sx={{ mb: 0.75 }}>
      {title}
    </Typography>
    {children}
  </Box>
)

export default CvSection
