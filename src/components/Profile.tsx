import { Box, Container, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          align="center"
          sx={{ fontWeight: 400 }}
          gutterBottom
        >
          Joni Pesonen
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            href="https://github.com/jipeso"
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/joni-pesonen-876b9224b"
            variant="outlined"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
