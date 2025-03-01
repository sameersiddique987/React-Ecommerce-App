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
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserIcon = () => (
  <AccountCircleIcon sx={{ fontSize: 20, color: "white", mr: 1 }} />
);

const pages = ['Home', 'About', 'Contact'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [cartCount, setCartCount] = React.useState(0);

  //  Real-Time Cart Count Update
  React.useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    //  "cartUpdated" Event Listener Add Karo
    window.addEventListener("cartUpdated", updateCartCount);
    updateCartCount();

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        Swal.fire("Already Logged Out", "You are already logged out!", "info");
        return;
      }

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      });

      if (result.isConfirmed) {
        await fetch("https://payment-integration-six.vercel.app/api/v1/logout", {
          method: "POST",
          credentials: "include",
        });

        localStorage.removeItem("token");
        Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
        
        navigate("/login");
      }
    } catch (error) {
      Swal.fire("Error!", "Logout failed. Please try again.", "error");
      console.error("Logout failed", error);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* Mobile Menu Icon */}
          <IconButton
            size="large"
            aria-label="open menu"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center" }}>
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

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: "flex-end", alignItems: "center" }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}

            {/*  Cart Button with Badge */}
            <Button onClick={() => navigate('/AddToCart')} color="inherit">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography>Cart</Typography>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon sx={{ fontSize: 20 }} />
                </Badge>
              </Box>
            </Button>

            {/* Login Button */}
            <Button onClick={() => navigate('/login')} color="inherit">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography>Login</Typography>
                <UserIcon sx={{ fontSize: 18 }} />
              </Box>
            </Button>

            {/* Logout Button */}
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>

          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => { handleCloseNavMenu(); navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`); }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}

            {/* Cart Button in Mobile Menu */}
            <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/AddToCart'); }}>
              <Badge badgeContent={cartCount} color="error">
                Cart
              </Badge>
            </MenuItem>

            {/* Login Button in Mobile Menu */}
            <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/login'); }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: { xs: "black", md: "white" } }}>Login</Typography>
              </Box>
            </MenuItem>

            {/* Logout Button */}
            <MenuItem onClick={() => { handleCloseNavMenu(); handleLogout(); }}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>

          </Menu>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;


