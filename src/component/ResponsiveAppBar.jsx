import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import CartIconButton from './CartIconButton';
import StorefrontIcon from '@mui/icons-material/Storefront';

const pages = ['Home', 'About', 'Contact'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* Mobile Menu Icon (Left Side) */}
          <IconButton
            size="large"
            aria-label="open menu"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
<Box 
  sx={{ 
    flexGrow: 1, 
    display: "flex", 
    justifyContent: { xs: "center", md: "flex-start" },  
    alignItems: "center"
  }}
>
  <StorefrontIcon sx={{ fontSize: 32, mr: 1 }} />
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      letterSpacing: '.2rem',
      color: 'white',
      textDecoration: 'none',
    }}
  >
    E-Shop
  </Typography>
</Box>


        
          {/* Desktop Menu (Right Side) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page === 'Home' ? '' : page.toLowerCase()}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <IconButton onClick={() => navigate('/AddToCart')} color="inherit">
              <CartIconButton />
            </IconButton>
          </Box>

          {/* Mobile Menu Dropdown */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => { handleCloseNavMenu(); navigate(`/${page === 'Home' ? '' : page.toLowerCase()}`); }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/AddToCart'); }}>
              <CartIconButton />
            </MenuItem>
          </Menu>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
