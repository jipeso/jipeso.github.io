import { Box, Typography } from '@mui/material'

interface BulletListProps {
  items: string[]
}

const BulletList = ({ items }: BulletListProps) => (
  <Box component='ul' sx={{ mt: 1.5, mb: 0, pl: 2.5 }}>
    {items.map(item => (
      <Typography
        key={item}
        component='li'
        color='text.secondary'
        sx={{ mb: 0.5 }}
      >
        {item}
      </Typography>
    ))}
  </Box>
)

export default BulletList
