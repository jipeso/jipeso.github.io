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
          spacing={{ sm: 14 }}
          alignItems="center"
        >
          <Stack
            spacing={1}
            sx={{
              order: { xs: 2, sm: 1 },
              pt: { xs: 3, sm: 0 },
            }}
          >
            <Typography variant="h1">Joni Pesonen</Typography>
            <Typography color="text.secondary">
              CS Student & Software Engineer
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ color: 'text.secondary' }}
            >
              <LocationPinIcon />
              <Typography>Helsinki, Finland</Typography>
            </Stack>

            <SocialLinks />
          </Stack>

          <Avatar
            src={profileImg}
            alt="Joni Pesonen"
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
  );
};

export default Profile;
