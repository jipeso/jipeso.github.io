import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', p: 6 }}>
      <Typography
        variant="subtitle1"
        align="center"
        color="grey.400"
        component="p"
      >
        Made with React + Vite, hosted on GitHub
      </Typography>
    </Box>
  );
};

export default Footer;
