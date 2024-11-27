import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Stack,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  AutoStories as StoryIcon,
  Brush as BrushIcon,
  EmojiEmotions as EmojiIcon,
  Psychology as AIIcon,
  AutoAwesome as SparkleIcon,
} from '@mui/icons-material';
import { Global, css } from '@emotion/react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <StoryIcon sx={{ fontSize: 40 }} />,
      title: "Personalized Stories",
      description: "Every story is uniquely crafted for your child",
      color: theme.palette.primary.main,
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: "Creative Learning",
      description: "Educational themes woven into magical tales",
      color: theme.palette.secondary.main,
    },
    {
      icon: <EmojiIcon sx={{ fontSize: 40 }} />,
      title: "Interactive Fun",
      description: "Engage with characters and make choices",
      color: theme.palette.warning.main,
    },
    {
      icon: <AIIcon sx={{ fontSize: 40 }} />,
      title: "AI Magic",
      description: "Powered by advanced AI storytelling",
      color: theme.palette.success.main,
    },
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              onClick={() => navigate('/')}
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer',
                mr: 'auto',
              }}
            >
              <StoryIcon 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontSize: 32,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: '1.5rem',
                  color: 'text.primary',
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                StoryTime AI
              </Typography>
            </Box>

            {/* Navigation */}
            <Stack direction="row" spacing={8} alignItems="center" sx={{ ml: 'auto' }}>
              <Link
                component="button"
                variant="body1"
                onClick={() => navigate('/pricing')}
                sx={{ 
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'none',
                  },
                  fontFamily: 'Nunito',
                }}
              >
                Pricing
              </Link>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/auth')}
                  sx={{ 
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: 'Nunito',
                    fontSize: '1rem',
                    px: 3,
                    py: 0.5,
                    borderColor: 'transparent',
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: 'transparent',
                      background: 'rgba(255, 107, 107, 0.05)',
                    },
                  }}
                >
                  Log In
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate('/auth')}
                  sx={{
                    px: 3,
                    py: 0.5,
                    fontFamily: 'Nunito',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Add toolbar spacing */}
      <Toolbar />
      <Box sx={{ height: 40 }} /> {/* Additional space below header */}

      {/* Main content */}
      <Box 
        sx={{ 
          minHeight: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'fixed', 
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'visible', 
          }}
        >
          {/* Floating elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '5%',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: `${theme.palette.primary.main}20`,
              animation: 'float 6s ease-in-out infinite',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              right: '15%',
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              transform: 'rotate(15deg)',
              background: `${theme.palette.secondary.main}15`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '65%',
              left: '12%',
              width: '35px',
              height: '35px',
              borderRadius: '8px',
              transform: 'rotate(-10deg)',
              background: `${theme.palette.warning.main}20`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              right: '8%',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: `${theme.palette.success.main}15`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '1.5s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '90%',
              left: '30%',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              transform: 'rotate(30deg)',
              background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 100%)',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              right: '25%',
              width: '55px',
              height: '55px',
              borderRadius: '15px',
              transform: 'rotate(-20deg)',
              background: `${theme.palette.info.main}15`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '2.5s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '55%',
              left: '45%',
              width: '30px',
              height: '30px',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
              background: 'linear-gradient(45deg, rgba(255,217,61,0.1) 0%, rgba(149,225,211,0.1) 100%)',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '3s',
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: '75%',
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              transform: 'rotate(60deg)',
              background: `${theme.palette.error.main}10`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '3.5s',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '70%',
              right: '35%',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              transform: 'rotate(25deg)',
              background: `${theme.palette.secondary.light}15`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '4s',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '45%',
              left: '85%',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: `${theme.palette.warning.light}15`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '4.5s',
            }}
          />
        </Box>

        {/* Global styles for floating animation */}
        <Global
          styles={css`
            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
              100% {
                transform: translateY(0px);
              }
            }
          `}
        />

        {/* Main content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Section */}
          <Box
            sx={{
              pt: { xs: 8, md: 12 },
              pb: { xs: 8, md: 12 },
              position: 'relative',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        mb: 2,
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        fontFamily: "'Bubblegum Sans', cursive",
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        display: 'inline-block',
                      }}
                    >
                      Unleash Your Child's Imagination! ✨
                      <SparkleIcon 
                        sx={{
                          position: 'absolute',
                          right: -40,
                          top: -20,
                          width: 60,
                          height: 60,
                          transform: 'rotate(15deg)',
                          display: { xs: 'none', md: 'block' },
                          color: theme.palette.warning.main,
                        }}
                      />
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 4,
                        color: 'text.secondary',
                        fontFamily: 'Nunito',
                        maxWidth: 500,
                      }}
                    >
                      Create personalized, magical bedtime stories powered by AI that inspire, educate, and delight
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/auth')}
                        sx={{ 
                          fontSize: '1.2rem',
                          py: 2,
                          px: 4,
                          background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                          boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FF6B6B 40%, #FFD93D 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 20px rgba(255, 107, 107, 0.4)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        Start Your Free Trial ✨
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => navigate('/pricing')}
                        sx={{ 
                          fontSize: '1.2rem',
                          py: 2,
                          px: 4,
                          borderWidth: 2,
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(255, 107, 107, 0.1)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        View Plans
                      </Button>
                    </Stack>
                  </motion.div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      height: 400,
                      margin: '0 auto',
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="250" cy="200" r="180" fill="#FFE8E8" opacity="0.3"/>
                      <circle cx="250" cy="200" r="150" fill="#E8FFF9" opacity="0.3"/>
                      <path d="M150 120 L350 120 C370 120 380 130 380 150 L380 300 C380 320 370 330 350 330 L150 330 C130 330 120 320 120 300 L120 150 C120 130 130 120 150 120Z" fill="#FF6B6B" opacity="0.9"/>
                      <path d="M145 125 L345 125 C365 125 375 135 375 155 L375 305 C375 325 365 335 345 335 L145 335 C125 335 115 325 115 305 L115 155 C115 135 125 125 145 125Z" fill="white"/>
                      <path d="M250 125 L250 335" stroke="#EEEEEE" strokeWidth="2"/>
                      <path d="M200 140 L230 140" stroke="#CCCCCC" strokeWidth="2"/>
                      <path d="M270 140 L300 140" stroke="#CCCCCC" strokeWidth="2"/>
                      <path d="M180 160 L230 160" stroke="#CCCCCC" strokeWidth="2"/>
                      <path d="M270 160 L320 160" stroke="#CCCCCC" strokeWidth="2"/>
                      <path d="M160 80 L165 90 L175 95 L165 100 L160 110 L155 100 L145 95 L155 90Z" fill="#FFD93D"/>
                      <path d="M360 280 L365 290 L375 295 L365 300 L360 310 L355 300 L345 295 L355 290Z" fill="#4ECDC4"/>
                      <path d="M300 60 L305 70 L315 75 L305 80 L300 90 L295 80 L285 75 L295 70Z" fill="#95E1D3"/>
                      <circle cx="140" cy="200" r="3" fill="#FFD93D"/>
                      <circle cx="360" cy="180" r="3" fill="#4ECDC4"/>
                      <circle cx="200" cy="300" r="3" fill="#FF6B6B"/>
                      <circle cx="320" cy="250" r="3" fill="#95E1D3"/>
                      <circle cx="200" cy="220" r="30" fill="#FFD93D" opacity="0.9"/>
                      <circle cx="300" cy="220" r="30" fill="#4ECDC4" opacity="0.9"/>
                    </svg>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* Features Section */}
          <Box 
            sx={{ 
              py: 8,
              mt: { xs: 4, md: 8 },
              mb: { xs: 8, md: 12 },
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-50vw',
                right: '-50vw',
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,107,107,0.05) 100%)',
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              What Makes Our Stories Special? ✨
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={6} key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 4,
                        borderRadius: 4,
                        bgcolor: 'background.paper',
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${feature.color}10, ${feature.color}20)`,
                          zIndex: 0,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mr: 3,
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 3,
                          bgcolor: `${feature.color}20`,
                          color: feature.color,
                        }}
                      >
                        {React.cloneElement(feature.icon as React.ReactElement, { sx: { fontSize: 48 } })}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            fontFamily: "'Bubblegum Sans', cursive",
                            color: feature.color,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: 'Nunito',
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* How It Works Section */}
          <Box sx={{ py: 12 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                background: 'linear-gradient(45deg, #4ECDC4 30%, #95E1D3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              How the Magic Happens ✨
            </Typography>
            <Grid container spacing={6}>
              {[
                {
                  title: "1. Choose Your Adventure",
                  description: "Select from various themes, characters, and educational goals for your story",
                  icon: "🎨",
                },
                {
                  title: "2. Customize Your Tale",
                  description: "Add your child's name, interests, and preferences to make it personal",
                  icon: "✏️",
                },
                {
                  title: "3. Watch it Come to Life",
                  description: "Our AI creates a unique story with beautiful illustrations",
                  icon: "🌟",
                },
                {
                  title: "4. Read & Share",
                  description: "Enjoy your story together and save it to your library",
                  icon: "📚",
                },
              ].map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={step.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        height: '100%',
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: '3rem',
                          mb: 2,
                        }}
                      >
                        {step.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontFamily: "'Bubblegum Sans', cursive",
                          color: 'primary.main',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: 'Nunito',
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Testimonials Section */}
          <Box 
            sx={{ 
              py: 12,
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(78,205,196,0.1) 100%)',
              borderRadius: '40px',
              mb: 12,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                background: 'linear-gradient(45deg, #FFD93D 30%, #95E1D3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              What Parents Are Saying ❤️
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  quote: "My daughter can't wait for bedtime now! The stories are always unique and engaging.",
                  author: "Sarah M.",
                  role: "Mother of 2",
                },
                {
                  quote: "The educational themes woven into magical stories make learning fun and memorable.",
                  author: "Michael P.",
                  role: "Father of 3",
                },
                {
                  quote: "StoryTime AI has become an essential part of our nightly routine. Simply magical!",
                  author: "Emily R.",
                  role: "Mother of 1",
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} md={4} key={testimonial.author}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        height: '100%',
                        background: 'white',
                        borderRadius: '24px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '"\u201C"',
                          position: 'absolute',
                          top: 0,
                          left: 10,
                          fontSize: '6rem',
                          opacity: 0.08,
                          color: 'primary.main',
                          fontFamily: "'Bubblegum Sans', cursive",
                          zIndex: 0,
                          lineHeight: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontFamily: 'Nunito',
                          fontSize: '1.1rem',
                          fontStyle: 'italic',
                          color: 'text.secondary',
                        }}
                      >
                        {testimonial.quote}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "'Bubblegum Sans', cursive",
                          color: 'primary.main',
                        }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: 'Nunito',
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              py: 12,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: { xs: '2rem', md: '3rem' },
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ready to Begin the Adventure? ✨
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  color: 'text.secondary',
                  fontFamily: 'Nunito',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Join thousands of families creating magical moments with personalized bedtime stories
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/auth')}
                sx={{ 
                  fontSize: '1.2rem',
                  py: 2,
                  px: 6,
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
                  boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF6B6B 40%, #FFD93D 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 20px rgba(255, 107, 107, 0.4)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Start Creating Stories ✨
              </Button>
            </motion.div>
          </Box>
          <Box sx={{ pb: 12 }} /> {/* Add some bottom padding */}
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          backgroundColor: 'rgba(255,255,255,0.8)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1) 50%, transparent)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <StoryIcon 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontSize: 24,
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Bubblegum Sans', cursive",
                    fontSize: '1.2rem',
                    color: 'text.primary',
                  }}
                >
                  StoryTime AI
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Creating magical bedtime stories for children everywhere ✨
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                Product
              </Typography>
              <Stack spacing={1}>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Features
                </Link>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  How It Works
                </Link>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Pricing
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                Company
              </Typography>
              <Stack spacing={1}>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  About Us
                </Link>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Contact
                </Link>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Blog
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                Legal
              </Typography>
              <Stack spacing={1}>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  Terms of Service
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
            sx={{ 
              mt: 4,
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            &copy; {new Date().getFullYear()} StoryTime AI. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
