import React from 'react';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent, TextField, Box, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Header from './Header';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4, flex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Votre Panier
            </Typography>
            {cart.map((product, index) => (
              <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="150"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${product.price}
                      </Typography>
                      <TextField
                        type="number"
                        label="Quantité"
                        value={product.quantity}
                        onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
                        fullWidth
                        margin="normal"
                      />
                      <Button variant="contained" color="secondary" onClick={() => removeFromCart(product._id)}>
                        Retirer
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Total
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="body1">
                Sous-total: ${totalPrice.toFixed(2)}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Livraison: Gratuite
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/checkout"
                fullWidth
                sx={{ backgroundColor: '#1abc9c' }}
              >
                Passer à la commande
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
