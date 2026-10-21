import { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useColorScheme,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { profile } from '../../data/profile'
import { sections } from '../../data/sections'

const DRAWER_WIDTH = 140

const navItems = Object.entries(sections).map(([id, { label }]) => ({
  href: `#${id}`,
  label,
}))

const Navbar = () => {
  const { mode, systemMode, setMode } = useColorScheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const colorScheme = mode === 'system' ? systemMode : mode
  const nextColorScheme = colorScheme === 'light' ? 'dark' : 'light'

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
        color='inherit'
        elevation={0}
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            onClick={openDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
            aria-label='open navigation menu'
          >
            <MenuIcon />
          </IconButton>

          <Link
            href='#'
            variant='subtitle1'
            color='inherit'
            underline='none'
            sx={{ fontFamily: 'monospace' }}
          >
            [{profile.handle}]
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            {navItems.map(({ href, label }) => (
              <Button key={href} href={href} color='inherit'>
                {label}
              </Button>
            ))}
          </Box>

          <IconButton
            onClick={() => setMode(nextColorScheme)}
            color='inherit'
            aria-label={`switch to ${nextColorScheme} mode`}
          >
            {nextColorScheme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        open={drawerOpen}
        onClose={closeDrawer}
        disableScrollLock
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
        <Box onClick={closeDrawer} sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant='subtitle1' sx={{ mb: 2 }}>
            MENU
          </Typography>
          <Divider />
          <List>
            {navItems.map(({ href, label }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton
                  component='a'
                  href={href}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
