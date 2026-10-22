import { alpha, createTheme, type Theme } from '@mui/material/styles'

export const colors = {
  light: { primary: '#9A6811', text: '#1C1917', background: '#FAF8F4' },
  dark: { primary: '#D4A857', text: '#F2F0EB', background: '#0D0E12' },
}

const { light, dark } = colors

const fontFamily = '"Schibsted Grotesk", system-ui, sans-serif'

const lightPalette = {
  primary: { main: light.primary },
  background: { default: light.background, paper: '#FFFFFF' },
  text: { primary: light.text, secondary: '#78716C' },
  action: {
    hover: alpha(light.primary, 0.05),
    selected: alpha(light.primary, 0.1),
  },
}

const focusOutline = (theme: Theme) => ({
  outline: `2px solid ${(theme.vars ?? theme).palette.primary.main}`,
  outlineOffset: 2,
})

export const theme = createTheme({
  cssVariables: true,
  defaultColorScheme: 'dark',
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: {
        primary: { main: dark.primary },
        background: { default: dark.background, paper: '#16181D' },
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
    fontFamily,
    h1: { fontSize: '2.4rem', fontWeight: 700 },
    h2: { fontSize: '1.7rem', fontWeight: 700 },
    h3: { fontSize: '1.2rem', fontWeight: 700 },
    subtitle1: { fontSize: '1.1rem', fontWeight: 600 },
    overline: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => ({
        ':focus-visible': focusOutline(theme),
      }),
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: ({ theme }) => ({ '&:focus-visible': focusOutline(theme) }),
      },
    },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: ({ theme }) => ({ padding: theme.spacing(2.5) }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: { subtitle1: 'p', subtitle2: 'p' },
      },
    },
  },
})

export const cvTheme = createTheme({
  palette: {
    ...lightPalette,
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily,
    fontSize: 12.5,
    h1: { fontSize: '1.75rem', fontWeight: 700 },
    h2: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: light.primary,
    },
    h3: { fontSize: '0.95rem', fontWeight: 600 },
    body1: { lineHeight: 1.4 },
    body2: { lineHeight: 1.4 },
  },
})
