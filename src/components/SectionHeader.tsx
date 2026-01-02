import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  overline: string;
  title: string;
}

const SectionHeader = ({ overline, title }: SectionHeaderProps) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="overline"
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        letterSpacing: 2,
        display: 'block',
      }}
    >
      {overline}
    </Typography>
    <Typography
      variant="h2"
      sx={{
        fontWeight: 500,
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default SectionHeader;
