import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface MainCharacter {
  id: number;
  name: string;
  age?: number;
  traits?: string[];
}

const CreateStory: React.FC = () => {
  const theme = useTheme();
  const [mainCharacters, setMainCharacters] = useState<MainCharacter[]>([
    { id: 1, name: '', age: undefined, traits: [] }
  ]);
  const [storyTheme, setStoryTheme] = useState('');
  const [storyLength, setStoryLength] = useState('medium');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [currentTrait, setCurrentTrait] = useState('');

  const handleAddCharacter = () => {
    setMainCharacters([
      ...mainCharacters,
      {
        id: mainCharacters.length + 1,
        name: '',
        age: undefined,
        traits: []
      }
    ]);
  };

  const handleRemoveCharacter = (id: number) => {
    if (mainCharacters.length > 1) {
      setMainCharacters(mainCharacters.filter(char => char.id !== id));
    }
  };

  const handleCharacterChange = (id: number, field: keyof MainCharacter, value: string | number | string[]) => {
    setMainCharacters(mainCharacters.map(char => {
      if (char.id === id) {
        return { ...char, [field]: value };
      }
      return char;
    }));
  };

  const handleAddTrait = (characterId: number) => {
    if (currentTrait.trim()) {
      setMainCharacters(mainCharacters.map(char => {
        if (char.id === characterId) {
          return {
            ...char,
            traits: [...(char.traits || []), currentTrait.trim()]
          };
        }
        return char;
      }));
      setCurrentTrait('');
    }
  };

  const handleRemoveTrait = (characterId: number, traitToRemove: string) => {
    setMainCharacters(mainCharacters.map(char => {
      if (char.id === characterId) {
        return {
          ...char,
          traits: char.traits?.filter(trait => trait !== traitToRemove) || []
        };
      }
      return char;
    }));
  };

  const handleStoryLengthChange = (event: SelectChangeEvent) => {
    setStoryLength(event.target.value);
  };

  const handleGenerateStory = () => {
    // TODO: Implement story generation logic
    console.log({
      mainCharacters,
      storyTheme,
      storyLength,
      additionalDetails
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" 
        sx={{ 
          fontFamily: 'Bubblegum Sans',
          color: theme.palette.primary.main,
          mb: 4
        }}>
        Create a Magical Story
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>
            Who are the main characters?
          </Typography>
          
          {mainCharacters.map((character, index) => (
            <Box key={character.id} sx={{ mb: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack spacing={2} sx={{ flex: 1 }}>
                  <TextField
                    label="Character Name"
                    value={character.name}
                    onChange={(e) => handleCharacterChange(character.id, 'name', e.target.value)}
                    fullWidth
                    sx={{ fontFamily: 'Nunito' }}
                  />
                  <TextField
                    label="Age (optional)"
                    type="number"
                    value={character.age || ''}
                    onChange={(e) => handleCharacterChange(character.id, 'age', parseInt(e.target.value) || '')}
                    fullWidth
                    sx={{ fontFamily: 'Nunito' }}
                  />
                  <Box>
                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <TextField
                        label="Add Character Traits"
                        value={currentTrait}
                        onChange={(e) => setCurrentTrait(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddTrait(character.id);
                          }
                        }}
                        size="small"
                        sx={{ flex: 1, fontFamily: 'Nunito' }}
                      />
                      <IconButton 
                        onClick={() => handleAddTrait(character.id)}
                        color="primary"
                        sx={{ mt: 1 }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {character.traits?.map((trait, traitIndex) => (
                        <Chip
                          key={traitIndex}
                          label={trait}
                          onDelete={() => handleRemoveTrait(character.id, trait)}
                          sx={{ fontFamily: 'Nunito' }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Stack>
                {mainCharacters.length > 1 && (
                  <IconButton 
                    onClick={() => handleRemoveCharacter(character.id)}
                    color="error"
                    sx={{ mt: 1 }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </Stack>
            </Box>
          ))}

          <Button
            startIcon={<AddIcon />}
            onClick={handleAddCharacter}
            variant="outlined"
            sx={{ 
              mt: 2,
              fontFamily: 'Nunito',
              textTransform: 'none'
            }}
          >
            Add Another Character
          </Button>
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            label="Story Theme"
            value={storyTheme}
            onChange={(e) => setStoryTheme(e.target.value)}
            fullWidth
            multiline
            rows={2}
            placeholder="E.g., Adventure in space, Learning about friendship, Discovering magic powers..."
            sx={{ fontFamily: 'Nunito' }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="story-length-label" sx={{ fontFamily: 'Nunito' }}>Story Length</InputLabel>
            <Select
              labelId="story-length-label"
              value={storyLength}
              label="Story Length"
              onChange={handleStoryLengthChange}
              sx={{ fontFamily: 'Nunito' }}
            >
              <MenuItem value="short">Short (5 minutes)</MenuItem>
              <MenuItem value="medium">Medium (10 minutes)</MenuItem>
              <MenuItem value="long">Long (15 minutes)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            label="Additional Details (Optional)"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            fullWidth
            multiline
            rows={3}
            placeholder="Any specific elements you'd like in the story? Special objects, places, or events?"
            sx={{ fontFamily: 'Nunito' }}
          />
        </Box>

        <Button
          variant="contained"
          onClick={handleGenerateStory}
          fullWidth
          size="large"
          sx={{ 
            fontFamily: 'Nunito',
            textTransform: 'none',
            py: 1.5,
            fontSize: '1.1rem'
          }}
        >
          Generate Story
        </Button>
      </Paper>
    </Container>
  );
};

export default CreateStory;
