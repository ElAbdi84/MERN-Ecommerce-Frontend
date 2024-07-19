import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import theme from './theme';
import { CartProvider } from './contexts/CartContext';
import './styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
            
            <main className="container-flex" style={{ width: '100%' }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/products" element={<ProductList />} />

                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
