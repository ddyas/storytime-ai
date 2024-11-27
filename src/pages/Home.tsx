import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  AutoStories as StoryIcon,
  Bookmark as BookmarkIcon,
  Create as CreateIcon,
  EmojiEvents as AchievementIcon,
} from '@mui/icons-material';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const cards = [
    {
      title: 'Create New Story',
      description: 'Start a magical journey with AI-powered storytelling',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      path: '/create',
      color: '#FF6B6B',
    },
    {
      title: 'My Library',
      description: 'Visit your collection of wonderful stories',
      icon: <StoryIcon sx={{ fontSize: 40 }} />,
      path: '/library',
      color: '#4ECDC4',
    },
    {
      title: 'Bookmarks',
      description: 'Quick access to your favorite tales',
      icon: <BookmarkIcon sx={{ fontSize: 40 }} />,
      path: '/library',
      color: '#FFD93D',
    },
    {
      title: 'Achievements',
      description: 'See your storytelling milestones',
      icon: <AchievementIcon sx={{ fontSize: 40 }} />,
      path: '/profile',
      color: '#95E1D3',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h1" 
          gutterBottom
          sx={{ 
            mb: 4,
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          Welcome to StoryTime! ✨
        </Typography>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} key={card.title}>
              <motion.div
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  onClick={() => navigate(card.path)}
                  sx={{
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(45deg, ${card.color}20, ${card.color}40)`,
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '12px',
                          backgroundColor: `${card.color}20`,
                          color: card.color,
                          mr: 2,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: card.color,
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {card.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        sx={{ mt: 4, textAlign: 'center' }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/create')}
          startIcon={<CreateIcon />}
          sx={{ px: 4, py: 1.5 }}
        >
          Start Creating
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
