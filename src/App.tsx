import { Stack, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Stack component="main" spacing={6} sx={{ pt: 5 }}>
        <Profile />
        <About />
        <Skills />
        <Projects />
      </Stack>
      <Footer />
    </>
  );
};

export default App;
