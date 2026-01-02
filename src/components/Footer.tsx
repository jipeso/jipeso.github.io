import { Box, Typography } from '@mui/material';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 8 }}>
      <Typography variant="subtitle1" align="center" color="text.secondary">
        © {currentYear} Joni Pesonen. Made with React + Vite.
      </Typography>
    </Box>
  );
};

export default Footer;
