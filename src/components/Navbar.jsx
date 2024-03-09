import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../assets/images/ceyncFuture_White_LogoOnly.png'


const Navbar = () => {
  const routeList = [{path:'#green',name:'green'},{path:'#yellow',name:'yellow'},{path:'#gray',name:'gray'},]

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return(
        <div className = "navbar">
            <AppBar position="fixed">
              <Container maxWidth="xl">
                <Toolbar disableGutters>

                {/* web navigation */}
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <img
                      srcSet={`${Logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${Logo}?w=164&h=164&fit=crop&auto=format`}
                      alt='Logo'
                      loading="lazy"
                      style={{width:'30px',height: 'auto', padding: '0 20px'}}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 10,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    CeyncFuture
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'row-reverse' } }}>
                    {routeList.map((route) => (
                       <a href={route.path} key={route.name} style={{textDecoration:'none'}}>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                          {route.name}
                        </Button>
                      </a>
                    ))}
                  </Box>

                {/* Mobile UI */}
                  <Box  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                    <img
                      srcSet={`${Logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${Logo}?w=164&h=164&fit=crop&auto=format`}
                      alt='Logo'
                      loading="lazy"
                      style={{width:'30px',height: 'auto', padding: '0 2vw'}}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      flexGrow: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    CeyncFuture
                  </Typography>

                  {/* Hamburger button */}
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',flexDirection:'row-reverse' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
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
                      {routeList.map((route) => (
                        <a href={route.path} key={route.name} style={{textDecoration:'none'}}>
                          <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">{route.name}</Typography>
                          </MenuItem>
                        </a>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
        </div>
    )
}

export default Navbar;
