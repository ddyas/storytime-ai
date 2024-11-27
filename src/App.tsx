import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import theme from './styles/theme';
import MainLayout from './components/Layout/MainLayout';
import Auth from './pages/Auth';
import Home from './pages/Home';
import StoryGenerator from './pages/StoryGenerator';
import Library from './pages/Library';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';

// Lazy load pages for better performance
// const Home = React.lazy(() => import('./pages/Home'));
// const StoryGenerator = React.lazy(() => import('./pages/StoryGenerator'));
// const Library = React.lazy(() => import('./pages/Library'));
// const Profile = React.lazy(() => import('./pages/Profile'));
// const Auth = React.lazy(() => import('./pages/Auth'));

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

const App: React.FC = () => {
  // TODO: Replace with actual auth logic
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/storytime-ai">
        <React.Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route 
              path="/auth" 
              element={
                isAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <Auth onLogin={() => setIsAuthenticated(true)} />
                )
              } 
            />
            <Route path="/pricing" element={<PricingPage />} />

            {/* Protected routes */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <MainLayout />
                ) : (
                  <Navigate to="/landing" replace />
                )
              }
            >
              <Route index element={<Home />} />
              <Route path="create" element={<StoryGenerator />} />
              <Route path="library" element={<Library />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
