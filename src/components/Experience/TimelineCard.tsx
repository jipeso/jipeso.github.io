import { Box, Card, Divider, Typography } from '@mui/material'
import { type TimelineEntry } from '../../data/experience'
import BulletList from '../BulletList'

interface TimelineCardProps {
  title: string
  entries: TimelineEntry[]
}

const TimelineCard = ({ title, entries }: TimelineCardProps) => (
  <Card>
    <Typography variant='overline' color='text.secondary'>
      {title}
    </Typography>
    {entries.map((entry, index) => (
      <Box key={entry.title}>
        {index > 0 && <Divider sx={{ my: 2 }} />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { sm: 'baseline' },
            columnGap: 2,
          }}
        >
          <Typography variant='h3'>{entry.title}</Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ flexShrink: 0 }}
          >
            {entry.period}
          </Typography>
        </Box>
        <Typography color='primary.main'>{entry.organization}</Typography>
        {entry.highlights && <BulletList items={entry.highlights} />}
      </Box>
    ))}
  </Card>
)

export default TimelineCard
