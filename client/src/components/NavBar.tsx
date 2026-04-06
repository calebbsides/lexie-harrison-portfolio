import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface NavBarProps {
  items: NavItem[];
  activeSection: string;
}

function scrollToSection(sectionId: string): void {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

// ── Desktop ──────────────────────────────────────────────────────────────────

function DesktopNav({ items, activeSection }: NavBarProps) {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ gap: 0.5, flexWrap: 'wrap' }}>
        {items.map((item) => {
          const isActive = item.sectionId === activeSection;
          return (
            <Button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              sx={{
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
                fontWeight: isActive ? 700 : 400,
                borderBottom: isActive
                  ? `2px solid ${theme.palette.primary.main}`
                  : '2px solid transparent',
                borderRadius: 0,
                textTransform: 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}

// ── Mobile ───────────────────────────────────────────────────────────────────

function MobileDrawer({ items, activeSection }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  function handleNavClick(sectionId: string) {
    scrollToSection(sectionId);
    setOpen(false);
  }

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="open navigation menu"
            onClick={() => setOpen(true)}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }} role="navigation">
          {items.map((item) => {
            const isActive = item.sectionId === activeSection;
            return (
              <ListItem key={item.sectionId} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.sectionId)}
                  selected={isActive}
                  sx={{
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: theme.palette.action.selected,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

// ── NavBar (public export) ────────────────────────────────────────────────────

export default function NavBar(props: NavBarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <MobileDrawer {...props} /> : <DesktopNav {...props} />;
}
