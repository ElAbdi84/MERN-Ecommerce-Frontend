// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
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
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
