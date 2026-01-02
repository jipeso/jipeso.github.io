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
          main: '#5321faff',
        },
        background: {
          default: '#F1F5F9',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#818CF8',
        },
        background: {
          default: '#020617',
          paper: '#0F172A',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
  },
});
