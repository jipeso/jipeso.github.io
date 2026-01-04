import { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  useColorScheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import NavLinks from './NavLinks';

const Navbar = () => {
  const { mode, setMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light');
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'text.primary' }}
            aria-label="open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="subtitle1"
            color="text.primary"
            onClick={scrollToTop}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {'PORTFOLIO'}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <NavLinks onItemClick={handleNavClick} />
          </Box>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{ color: 'text.primary' }}
            aria-label={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{ backdrop: { sx: { backdropFilter: 'blur(4px)' } } }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 100 },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="overline" sx={{ mb: 2 }}>
            MENU
          </Typography>
          <List>
            <NavLinks onItemClick={handleNavClick} isMobile />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
