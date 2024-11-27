import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for stories
const mockStories = [
  {
    id: 1,
    title: 'The Magic Forest',
    preview: 'A tale of adventure and friendship...',
    genre: 'Adventure',
    age: '5-8',
    favorite: true,
  },
  {
    id: 2,
    title: 'Space Explorers',
    preview: 'Journey through the stars...',
    genre: 'Sci-Fi',
    age: '8-12',
    favorite: false,
  },
  {
    id: 3,
    title: 'The Friendly Dragon',
    preview: 'A story about unexpected friendship...',
    genre: 'Fantasy',
    age: '5-8',
    favorite: true,
  },
];

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [stories] = React.useState(mockStories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ py: 4 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            My Stories
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search stories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {filteredStories.map((story) => (
            <Grid item xs={12} sm={6} md={4} key={story.id}>
              <Card
                component={motion.div}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {story.title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={story.genre}
                      size="small"
                      sx={{ mr: 1 }}
                      color="primary"
                    />
                    <Chip
                      label={`Age ${story.age}`}
                      size="small"
                      color="secondary"
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                  >
                    {story.preview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    color={story.favorite ? 'error' : 'default'}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <Button size="small" sx={{ ml: 'auto' }}>
                    Read
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Library;
