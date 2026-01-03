import { Box, Container, Stack, Typography } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import SocialLinks from './SocialLinks';

const Profile = () => {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Stack spacing={1}>
          <Typography variant="h1">Joni Pesonen</Typography>

          <Typography variant="body1" color="text.secondary">
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
        </Stack>
        <SocialLinks />
      </Container>
    </Box>
  );
};

export default Profile;
