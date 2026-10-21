import { CssBaseline, Stack, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Stack component='main' spacing={6} sx={{ pt: { xs: 4, sm: 8 } }}>
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </Stack>
    <Footer />
  </ThemeProvider>
)

export default App
