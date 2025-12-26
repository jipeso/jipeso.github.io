import { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useColorScheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const navItems = ['about', 'skills', 'projects'];

const Navbar = () => {
  const { mode, setMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          color: 'primary.main',
          bgcolor: 'background.paper',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{ textTransform: 'capitalize' }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </Box>

          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          backdrop: { sx: { backdropFilter: 'blur(4px)' } },
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& . MuiDrawer-paper': { width: 240 },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            MENU
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item)}>
                  <ListItemText
                    primary={item}
                    slotProps={{
                      primary: { sx: { textTransform: 'capitalize' } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
