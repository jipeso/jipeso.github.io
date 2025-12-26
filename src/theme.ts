import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#5321faff',
        },
        background: {
          default: '#F8FAFC',
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
});
