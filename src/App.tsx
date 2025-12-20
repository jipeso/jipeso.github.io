import { Stack, CssBaseline, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Stack component="main" spacing={0}>
        <Profile />
        <About />
        <Skills />
        <Projects />
      </Stack>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
