import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        color="text.secondary"
      >
        Made with React + Vite, hosted on GitHub
      </Typography>
    </Box>
  );
};

export default Footer;
