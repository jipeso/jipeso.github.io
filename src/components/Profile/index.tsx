import { Box, Container, Stack, Typography, Avatar } from '@mui/material';

import LocationPinIcon from '@mui/icons-material/LocationPin';

import SocialLinks from './SocialLinks';

import profileImg from '../../assets/profile-image.webp';

const Profile = () => {
  return (
    <Box component="section" id="profile">
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 4, sm: 12 }}
          alignItems="center"
        >
          <Stack spacing={1}>
            <Typography variant="h1">Joni Pesonen</Typography>
            <Typography variant="body1" color="primary.main">
              CS Student & Software Developer
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              <LocationPinIcon />
              <Typography variant="body1">Helsinki, Finland</Typography>
            </Stack>

            <SocialLinks />
          </Stack>

          <Avatar
            src={profileImg}
            alt="Joni Pesonen"
            sx={{
              width: 180,
              height: 180,
              border: '3px solid',
              borderColor: 'primary.main',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Profile;
