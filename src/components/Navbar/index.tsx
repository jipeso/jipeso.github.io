import { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  useColorScheme,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import NavLinks from './NavLinks'

const DRAWER_WIDTH = 140

const Navbar = () => {
  const { mode, setMode } = useColorScheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light')
  const handleDrawerToggle = () => setMobileOpen(prev => !prev)

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ block: 'start' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'text.primary' }}
            aria-label='open navigation menu'
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='subtitle1'
            color='text.primary'
            onClick={scrollToTop}
            sx={{
              cursor: 'pointer',
              userSelect: 'none',
              fontFamily: 'monospace',
            }}
          >
            {'[jipeso]'}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <NavLinks onItemClick={handleNavClick} />
          </Box>

          <IconButton
            onClick={toggleTheme}
            color='inherit'
            sx={{ color: 'text.primary' }}
            aria-label={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{ backdrop: { sx: { backdropFilter: 'blur(4px)' } } }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant='subtitle1' sx={{ mb: 2 }}>
            MENU
          </Typography>
          <Divider />
          <List>
            <NavLinks onItemClick={handleNavClick} isMobile />
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
