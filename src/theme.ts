import { alpha, createTheme } from '@mui/material/styles'

const light = {
  primary: '#B8862E',
  text: '#1C1917',
}

const dark = {
  primary: '#D4A857',
  text: '#F2F0EB',
}

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  defaultColorScheme: 'dark',
  colorSchemes: {
    light: {
      palette: {
        primary: { main: light.primary },
        background: { default: '#FAF8F4', paper: '#FFFFFF' },
        text: { primary: light.text, secondary: '#78716C' },
        action: {
          hover: alpha(light.primary, 0.05),
          selected: alpha(light.primary, 0.1),
        },
      },
    },
    dark: {
      palette: {
        primary: { main: dark.primary },
        background: { default: '#0D0E12', paper: '#16181D' },
        text: { primary: dark.text, secondary: '#9B9791' },
        action: {
          hover: alpha(dark.primary, 0.08),
          selected: alpha(dark.primary, 0.16),
        },
        divider: alpha(dark.text, 0.08),
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: { fontSize: '2.4rem', fontWeight: 700 },
    h2: { fontSize: '1.7rem', fontWeight: 650 },
    h3: { fontSize: '1.2rem', fontWeight: 600 },
    subtitle1: { fontSize: '1.1rem', fontWeight: 600 },
    overline: { fontWeight: 700 },
    body2: { fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => ({
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: 72,
          [theme.breakpoints.up('sm')]: { scrollPaddingTop: 80 },
          '@media (prefers-reduced-motion: reduce)': {
            scrollBehavior: 'auto',
          },
        },
      }),
    },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: ({ theme }) => ({ padding: theme.spacing(2.5) }),
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true, enterDelay: 300, enterNextDelay: 300 },
    },
  },
})
