import { Box, CardMedia, IconButton, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { type Screenshot } from '../../data/projects'

interface ScreenshotsProps {
  title: string
  screenshots: Screenshot[]
}

const Screenshots = ({ title, screenshots }: ScreenshotsProps) => {
  const isCarousel = screenshots.length > 1

  return (
    <Box
      data-carousel={isCarousel || undefined}
      sx={{ position: 'relative', mb: 2, containerType: 'inline-size' }}
    >
      <Box
        data-carousel-track
        role={isCarousel ? 'region' : undefined}
        aria-label={isCarousel ? `${title} screenshots` : undefined}
        tabIndex={isCarousel ? 0 : undefined}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          '@media (prefers-reduced-motion: no-preference)': {
            scrollBehavior: 'smooth',
          },
        }}
      >
        {screenshots.map(({ src, caption }) => (
          <Box
            component='figure'
            key={src}
            sx={{ m: 0, flex: '0 0 100%', scrollSnapAlign: 'start' }}
          >
            <CardMedia
              component='img'
              image={src}
              alt={caption ? `${title}: ${caption}` : `Screenshot of ${title}`}
              loading='lazy'
              decoding='async'
              sx={{
                aspectRatio: '16 / 9',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
              }}
            />
            {caption && (
              <Typography
                component='figcaption'
                variant='body2'
                color='textSecondary'
                sx={{ mt: 0.75, pr: isCarousel ? 14 : 0 }}
              >
                {caption}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
      {isCarousel && (
        <Box
          data-carousel-controls
          hidden
          sx={{
            position: 'absolute',
            top: 'calc(100cqw * 9 / 16)',
            right: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            '&[hidden]': { display: 'none' },
            '& button:disabled': { color: 'action.disabled' },
          }}
        >
          <IconButton
            data-carousel-previous
            size='small'
            aria-label='Previous screenshot'
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            data-carousel-status
            variant='body2'
            color='textSecondary'
            component='output'
          />
          <IconButton
            data-carousel-next
            size='small'
            aria-label='Next screenshot'
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default Screenshots
