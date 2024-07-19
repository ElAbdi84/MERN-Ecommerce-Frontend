// src/components/Banner.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Banner = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity } },
  };

  return (
    <Box sx={{ backgroundColor: '#16a085', color: 'white', py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Typography variant="h4" gutterBottom>
            Découvrez nos offres exclusives!
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Typography variant="subtitle1" gutterBottom>
            Profitez des meilleures offres sur une large sélection de produits. Ne manquez pas nos promotions spéciales!
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Button
            component={motion.button}
            variants={buttonVariants}
            whileHover="hover"
            variant="contained"
            size="large"
            sx={{ 
              backgroundColor: '#000000', 
              color: 'white', 
              '&:hover': { 
                backgroundColor: '#333333' 
              } 
            }}
            className="banner-button"
          >
            Magasinez maintenant
          </Button>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Typography variant="subtitle2" sx={{ mt: 4 }}>
            Livraison gratuite pour les commandes de plus de 50 $. Achetez maintenant et économisez!
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Banner;
