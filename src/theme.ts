import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  defaultColorScheme: 'dark',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6366F1',
        },
        background: {
          default: '#F8FAFC',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        },
        action: {
          hover: 'rgba(99, 102, 241, 0.04)',
          selected: 'rgba(99, 102, 241, 0.08)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#A5B4FC',
        },
        background: {
          default: '#020617',
          paper: '#0F172A',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
        action: {
          hover: 'rgba(255, 255, 255, 0.08)',
          selected: 'rgba(255, 255, 255, 0.16)',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '2.4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.7rem',
      fontWeight: 650,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    overline: {
      fontWeight: 700,
    },
    body2: {
      fontWeight: 500,
    },
  },
});
