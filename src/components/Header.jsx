import * as React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { navs } from '../constants/menus';

function ResponsiveHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingBottom: 2,
      }}
      position='static'
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#f5167e',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img className='logo' src='/logo.svg' alt='Logo eventos unlar' />
            </Box>
            EVENTOS UNLAR
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              sx={{
                color: '#f5167e',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navs.map((nav) => (
                <MenuItem key={nav.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={nav.to}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography
                      sx={{ color: '#f5167e' }}
                      fontWeight={800}
                      textAlign='center'
                    >
                      {nav.name}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
            }}
          >
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#f5167e',
                textDecoration: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img className='logo' src='/logo.svg' alt='Logo eventos unlar' />
              EVENTOS UNLAR
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {navs.map((nav) => (
              <NavLink
                key={nav.name}
                onClick={handleCloseNavMenu}
                className={({ isActive }) => {
                  return isActive ? 'is-active nav-button' : 'nav-button';
                }}
                to={nav.to}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <Typography
                  color={'#f5167e'}
                  fontWeight={800}
                  textAlign='center'
                >
                  {nav.name}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveHeader;
