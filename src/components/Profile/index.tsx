import { Box, Container, Stack, Typography, Avatar } from '@mui/material'
import LocationPinIcon from '@mui/icons-material/LocationPin'

import { profile } from '../../data/profile'
import profileImage from '../../assets/profile-image.webp'
import SocialLinks from './SocialLinks'

const Profile = () => {
  return (
    <Box component='section' id='profile'>
      <Container maxWidth='md'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ sm: 14 }}
          sx={{ alignItems: 'center' }}
        >
          <Stack
            spacing={1}
            sx={{
              order: { xs: 2, sm: 1 },
              pt: { xs: 3, sm: 0 },
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Typography variant='h1'>{profile.name}</Typography>
            <Typography color='textSecondary'>{profile.role}</Typography>

            <Stack
              direction='row'
              spacing={0.5}
              sx={{ alignItems: 'center', color: 'text.secondary' }}
            >
              <LocationPinIcon />
              <Typography>{profile.location}</Typography>
            </Stack>

            <SocialLinks />
          </Stack>

          <Avatar
            src={profileImage}
            alt={profile.name}
            sx={{
              width: 180,
              height: 180,
              border: '1px solid',
              borderColor: 'text.secondary',
              order: { xs: 1, sm: 2 },
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Profile
