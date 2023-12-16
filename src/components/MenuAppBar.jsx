import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ borderRadius: '20px', backgroundColor: 'transparent' }}
        >
          <Toolbar sx={{ width: '100%' }}>
            <IconButton
              onClick={handleClick}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 9, backgroundColor: 'red' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
              Eventos UNLaR
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        style={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{
              mr: 1,
            }}
          />{' '}
          Eventos
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{
              mr: 1,
            }}
          />{' '}
          Crear Evento
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize='small' />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
