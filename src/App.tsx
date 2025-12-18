import { CssBaseline, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Profile />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
