

// components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{  color: 'black', textAlign: 'center', padding: '1rem', marginTop: 'auto' }}>
      <Typography variant="body2">
        © 2024 ShopEase. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
