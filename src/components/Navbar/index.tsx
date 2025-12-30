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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
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
          >
            <MenuIcon />
          </IconButton>

          <Typography
            color="text.primary"
            variant="h6"
            onClick={scrollToTop}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <NavLinks onItemClick={handleNavClick} />
          </Box>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{ color: 'text.primary' }}
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
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
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
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
