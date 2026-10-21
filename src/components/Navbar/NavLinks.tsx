import { Button, ListItem, ListItemText, ListItemButton } from '@mui/material'

const NAV_ITEMS = ['about', 'skills', 'experience', 'projects']

interface NavLinkProps {
  onItemClick: (id: string) => void
  isMobile?: boolean
}

const NavLinks = ({ onItemClick, isMobile = false }: NavLinkProps) => (
  <>
    {NAV_ITEMS.map(item =>
      isMobile ? (
        <ListItem key={item} disablePadding>
          <ListItemButton
            onClick={() => onItemClick(item)}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={item} sx={{ textTransform: 'capitalize' }} />
          </ListItemButton>
        </ListItem>
      ) : (
        <Button key={item} color='inherit' onClick={() => onItemClick(item)}>
          {item}
        </Button>
      )
    )}
  </>
)

export default NavLinks
