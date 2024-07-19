// src/theme.js
import { createTheme } from '@mui/material/styles';

// Créez un thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d99', // Couleur principale
    },
    secondary: {
      main: '#ff6f61', // Couleur secondaire
    },
    background: {
      default: '#f5f5f5', // Couleur de fond par défaut
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Police personnalisée
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordure arrondie des boutons
          textTransform: 'none', // Désactive la transformation de texte en majuscules
          padding: '10px 20px', // Padding personnalisé
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px', // Bordure arrondie des cartes
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ombre personnalisée
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: '10px 10px 0 0', // Bordure arrondie pour le haut de l'image de la carte
        },
      },
    },
  },
});

export default theme;
