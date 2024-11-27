import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',  // Playful coral
      light: '#FF8E8E',
      dark: '#FF4848',
    },
    secondary: {
      main: '#7CD7CF',  // Bright turquoise
      light: '#98E8E1',
      dark: '#5EC6BD',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    success: {
      main: '#95E1D3',  // Soft mint
    },
    info: {
      main: '#A8E6CF',  // Light sage
    },
    warning: {
      main: '#FFD93D',  // Cheerful yellow
    },
    error: {
      main: '#FF8E8E',  // Soft coral
    },
  },
  typography: {
    fontFamily: "'Nunito', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Bubblegum Sans', cursive",
      fontSize: '3rem',
      letterSpacing: '0.02em',
      background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    },
    h2: {
      fontFamily: "'Bubblegum Sans', cursive",
      fontSize: '2.5rem',
      color: '#2C3E50',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: "'Bubblegum Sans', cursive",
      fontSize: '2rem',
      color: '#2C3E50',
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: "'Bubblegum Sans', cursive",
      fontSize: '1.75rem',
      color: '#2C3E50',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#2C3E50',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#2C3E50',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 28px',
          fontSize: '1.1rem',
          boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease-in-out',
          fontWeight: 700,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF4848 30%, #FFD000 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #FF6B6B 0%, #FFD93D 300%)',
          color: 'white',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          margin: '4px 8px',
          '&.Mui-selected': {
            background: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.3)',
            },
          },
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'white',
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: 'white',
          fontWeight: 700,
          fontSize: '1.1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  },
});

export default theme;
