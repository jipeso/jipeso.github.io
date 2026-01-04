import { Button, ListItem, ListItemText, ListItemButton } from '@mui/material';

const NAV_ITEMS = ['about', 'skills', 'projects'];

interface NavLinkProps {
  onItemClick: (id: string) => void;
  isMobile?: boolean;
}

const NavLinks = ({ onItemClick, isMobile = false }: NavLinkProps) => (
  <>
    {NAV_ITEMS.map((item) =>
      isMobile ? (
        <ListItem key={item}>
          <ListItemButton onClick={() => onItemClick(item)}>
            <ListItemText primary={item} sx={{ textTransform: 'capitalize' }} />
          </ListItemButton>
        </ListItem>
      ) : (
        <Button
          key={item}
          color="inherit"
          onClick={() => onItemClick(item)}
          sx={{ textTransform: 'capitalize', color: 'text.primary' }}
        >
          {item}
        </Button>
      )
    )}
  </>
);

export default NavLinks;
