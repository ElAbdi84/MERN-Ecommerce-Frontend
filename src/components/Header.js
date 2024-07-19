import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const { cart } = useCart();

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar>
        <Typography
      variant="h6"
      component={Link}
      to="/products"
      style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
    >
      <ShoppingCartIcon style={{ marginRight: '8px' }} />
      ShopEase
    </Typography>

          
          <Button color="inherit" component={Link} to="/login" startIcon={<AccountCircle />}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
