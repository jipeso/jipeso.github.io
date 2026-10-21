import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  defaultColorScheme: 'dark',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#B8862E',
        },
        background: {
          default: '#FAF8F4',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1C1917',
          secondary: '#78716C',
        },
        action: {
          hover: 'rgba(184, 134, 46, 0.05)',
          selected: 'rgba(184, 134, 46, 0.1)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#D4A857',
        },
        secondary: {
          main: '#7C9885',
        },
        background: {
          default: '#0D0E12',
          paper: '#16181D',
        },
        text: {
          primary: '#F2F0EB',
          secondary: '#9B9791',
        },
        action: {
          hover: 'rgba(212, 168, 87, 0.08)',
          selected: 'rgba(212, 168, 87, 0.16)',
        },
        divider: 'rgba(242, 240, 235, 0.08)',
      },
    },
  },
  typography: {
    h1: { fontSize: '2.4rem', fontWeight: 700 },
    h2: { fontSize: '1.7rem', fontWeight: 650 },
    h3: { fontSize: '1.2rem', fontWeight: 600 },
    subtitle1: { fontSize: '1.1rem', fontWeight: 600 },
    overline: { fontWeight: 700 },
    body2: { fontWeight: 500 },
  },
})
