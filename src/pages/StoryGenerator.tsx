import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  SelectChangeEvent,
  IconButton,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

const genres = [
  'Adventure',
  'Fantasy',
  'Science Fiction',
  'Mystery',
  'Educational',
  'Bedtime',
];

const themes = [
  'Friendship',
  'Courage',
  'Kindness',
  'Learning',
  'Family',
  'Nature',
  'Space',
  'Animals',
];

interface Character {
  id: number;
  name: string;
}

const StoryGenerator: React.FC = () => {
  const [formData, setFormData] = React.useState({
    characters: [{ id: 1, name: '' }] as Character[],
    age: 5,
    genre: '',
    selectedThemes: [] as string[],
    additionalDetails: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCharacterChange = (id: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      characters: prev.characters.map(char => 
        char.id === id ? { ...char, name: value } : char
      ),
    }));
  };

  const handleAddCharacter = () => {
    setFormData((prev) => ({
      ...prev,
      characters: [...prev.characters, { id: prev.characters.length + 1, name: '' }],
    }));
  };

  const handleRemoveCharacter = (id: number) => {
    if (formData.characters.length > 1) {
      setFormData((prev) => ({
        ...prev,
        characters: prev.characters.filter(char => char.id !== id),
      }));
    }
  };

  const handleThemeChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      selectedThemes: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle story generation here
    console.log('Generating story with:', formData);
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ py: 4 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Bubblegum Sans' }}>
          Create a Story
        </Typography>

        <Paper
          component={motion.form}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          elevation={3}
          sx={{ p: 4, mt: 4 }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>
                Main Characters
              </Typography>
              {formData.characters.map((character, index) => (
                <Stack 
                  key={character.id} 
                  direction="row" 
                  spacing={2} 
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <TextField
                    fullWidth
                    label={`Main Character ${index + 1}`}
                    value={character.name}
                    onChange={(e) => handleCharacterChange(character.id, e.target.value)}
                    sx={{ fontFamily: 'Nunito' }}
                  />
                  {formData.characters.length > 1 && (
                    <IconButton 
                      onClick={() => handleRemoveCharacter(character.id)}
                      color="error"
                      sx={{ mt: 1 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </Stack>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={handleAddCharacter}
                variant="outlined"
                sx={{ 
                  mt: 1,
                  fontFamily: 'Nunito',
                  textTransform: 'none'
                }}
              >
                Add Another Character
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>Age Range</Typography>
              <Slider
                value={formData.age}
                onChange={(_, value) =>
                  setFormData((prev) => ({ ...prev, age: value as number }))
                }
                min={2}
                max={12}
                marks
                valueLabelDisplay="auto"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Genre</InputLabel>
                <Select
                  name="genre"
                  value={formData.genre}
                  label="Genre"
                  onChange={handleChange}
                >
                  {genres.map((genre) => (
                    <MenuItem key={genre} value={genre}>
                      {genre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Themes</InputLabel>
                <Select
                  multiple
                  value={formData.selectedThemes}
                  onChange={handleThemeChange}
                  label="Themes"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {themes.map((theme) => (
                    <MenuItem key={theme} value={theme}>
                      {theme}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Details"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                placeholder="Any specific elements you'd like in the story?"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                sx={{ 
                  py: 1.5,
                  fontFamily: 'Nunito',
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Generate Story
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default StoryGenerator;
