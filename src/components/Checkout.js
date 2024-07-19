import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, MenuItem, Paper, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import BASE_URL from '../config/config';  // variable BASE_URL (backend)


const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const { cart, setCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderItems = cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        product: item._id,
      }));
      const shippingAddress = { address, city, postalCode, country };
      const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

      const res = await axios.post(`${BASE_URL}/api/orders`, {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log(res.data);
      setOrderConfirmed(true);
      setCart([]); // Vider le panier après la confirmation de la commande
    } catch (err) {
      console.error(err);
    }
  };

  const confirmationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4, flex: 1 }}>
        {orderConfirmed ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={confirmationVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Typography variant="h4" color="primary" gutterBottom>
              Merci pour votre achat !
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Votre commande a été confirmée.
            </Typography>
            <motion.img
              src="/shopping-cart.png"
              alt="Order confirmed"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: '1rem', maxWidth: '200px' }}
            />
          </motion.div>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Informations de livraison et de paiement
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    type="text"
                    label="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    label="Adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    label="Ville"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    label="Code Postal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    label="Pays"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Méthode de paiement"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  >
                    <MenuItem value="Credit Card">Carte de Crédit</MenuItem>
                    <MenuItem value="PayPal">PayPal</MenuItem>
                  </TextField>
                  <Box textAlign="center" sx={{ marginTop: 3 }}>
                    <Button type="submit" variant="contained" color="primary" sx={{ padding: '0.75rem 2rem', backgroundColor: '#1abc9c' }}>
                      Passer la commande
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Récapitulatif de la commande
                </Typography>
                {cart.map((product, index) => (
                  <Card key={index} sx={{ display: 'flex', mb: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 100, objectFit: 'cover' }}
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6">
                        {product.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" component="div">
                        Quantité: {product.quantity}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" component="div">
                        Prix: ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Checkout;
