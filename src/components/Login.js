import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Link, Typography, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import '../styles/AuthStyles.css'; // Assurez-vous d'importer les styles CSS
import BASE_URL from '../config/config';  // variable BASE_URL (backend)

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/products'); // Redirige vers la liste des produits après une connexion réussie
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <img src="/shopping-cart.png" alt="Logo" />
          <h1>ShopEase</h1>
          <p>Your favorite online store for everything you need</p>
        </div>
        <div className="auth-right">
          <form onSubmit={handleSubmit}>
            <Typography variant="h5">Log In</Typography>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                style: { borderRadius: 5, fontFamily: 'Poppins' }
              }}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                style: { borderRadius: 5, fontFamily: 'Poppins' }
              }}
            />
            <Link href="#" variant="body2" className="link">
              Forgot password?
            </Link>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ fontFamily: 'Poppins', marginTop: '1rem', backgroundColor: '#1abc9c' }}>
              Login
            </Button>
            <div className="link">
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
