import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import BASE_URL from '../config/config';  // variable BASE_URL (backend)

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`${BASE_URL}/api/products/${id}`);
      setProduct(res.data);
    };

    const fetchOtherProducts = async () => {
      const res = await axios.get(`${BASE_URL}/api/products`);
      setOtherProducts(res.data.filter((item) => item._id !== id));
    };

    fetchProduct();
    fetchOtherProducts();
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4, flex: 1 }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: 2, maxWidth: 300, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ marginTop: 2 }}>
                  {product.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ marginTop: 2, backgroundColor: '#1abc9c' }}
                >
                  Ajouter au panier
                </Button>
              </CardContent>
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
            Vous pourriez aussi aimer
          </Typography>
          <Grid container spacing={2}>
            {otherProducts.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={3}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addToCart(product)}
                      sx={{ marginTop: 2, backgroundColor: '#1abc9c' }}
                    >
                      Ajouter au panier
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to={`/products/${product._id}`}
                      sx={{ marginTop: 1 }}
                    >
                      Voir les détails
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetails;
