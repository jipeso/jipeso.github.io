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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Projects'];

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& . MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Menu
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem
                component="div"
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
