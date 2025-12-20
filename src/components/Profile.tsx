import { Box, Container, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Joni Pesonen
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            href="https://github.com/jipeso"
            variant="contained"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button variant="outlined" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
