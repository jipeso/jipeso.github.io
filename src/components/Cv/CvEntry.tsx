import { Box, Typography } from '@mui/material'

interface CvEntryProps {
  title: string
  date: string
  details?: React.ReactNode
  summary?: string
  bullets?: string[]
}

const CvEntry = ({ title, date, details, summary, bullets }: CvEntryProps) => (
  <Box sx={{ mb: 1.25, breakInside: 'avoid' }}>
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', columnGap: 2 }}
    >
      <Typography variant='h3'>{title}</Typography>
      <Typography color='textSecondary' sx={{ flexShrink: 0 }}>
        {date}
      </Typography>
    </Box>
    {details && (
      <Typography variant='body2' color='textSecondary'>
        {details}
      </Typography>
    )}
    {summary && <Typography sx={{ mt: 0.25 }}>{summary}</Typography>}
    {bullets && (
      <Box component='ul' sx={{ my: 0.5, pl: 2.5 }}>
        {bullets.map(bullet => (
          <Typography key={bullet} component='li'>
            {bullet}
          </Typography>
        ))}
      </Box>
    )}
  </Box>
)

export default CvEntry
