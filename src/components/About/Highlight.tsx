import { Box } from '@mui/material';

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => (
  <Box component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
    {children}
  </Box>
);

export default Highlight;
