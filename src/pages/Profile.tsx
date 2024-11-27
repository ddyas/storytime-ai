import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  VolumeUp as VolumeUpIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const [settings, setSettings] = React.useState({
    notifications: true,
    darkMode: false,
    soundEffects: true,
  });

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const achievements = [
    { title: 'Story Creator', description: 'Created your first story', achieved: true },
    { title: 'Bookworm', description: 'Read 10 stories', achieved: true },
    { title: 'Super Author', description: 'Created 5 stories', achieved: false },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ py: 4 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Bubblegum Sans', mb: 4 }}>
          My Profile
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}
              elevation={2}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Avatar
                    sx={{
                      width: 22,
                      height: 22,
                      bgcolor: 'primary.main',
                      border: '2px solid white',
                    }}
                  >
                    <StarIcon sx={{ width: 14, height: 14 }} />
                  </Avatar>
                }
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '2.5rem',
                    fontFamily: 'Bubblegum Sans',
                  }}
                >
                  U
                </Avatar>
              </Badge>
              <Typography variant="h6" sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>User Name</Typography>
              <Typography color="text.secondary" sx={{ fontFamily: 'Nunito' }}>Story Creator</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
              component={motion.div}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              sx={{ p: 3, mb: 4, borderRadius: 2 }}
              elevation={2}
            >
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>
                Settings
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography sx={{ fontFamily: 'Nunito' }}>Notifications</Typography>}
                    />
                    <Switch
                      edge="end"
                      checked={settings.notifications}
                      onChange={() => handleSettingChange('notifications')}
                      color="primary"
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PaletteIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography sx={{ fontFamily: 'Nunito' }}>Dark Mode</Typography>}
                    />
                    <Switch
                      edge="end"
                      checked={settings.darkMode}
                      onChange={() => handleSettingChange('darkMode')}
                      color="primary"
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <VolumeUpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography sx={{ fontFamily: 'Nunito' }}>Sound Effects</Typography>}
                    />
                    <Switch
                      edge="end"
                      checked={settings.soundEffects}
                      onChange={() => handleSettingChange('soundEffects')}
                      color="primary"
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography sx={{ fontFamily: 'Nunito' }}>Privacy Settings</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>

            <Paper
              component={motion.div}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              sx={{ p: 3, borderRadius: 2 }}
              elevation={2}
            >
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>
                Achievements
              </Typography>
              <Grid container spacing={2}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{
                        p: 2,
                        opacity: achievement.achieved ? 1 : 0.7,
                        bgcolor: achievement.achieved
                          ? 'background.paper'
                          : 'action.disabledBackground',
                        borderRadius: 2,
                        border: 1,
                        borderColor: achievement.achieved ? 'primary.main' : 'divider',
                      }}
                      elevation={achievement.achieved ? 2 : 0}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon
                          sx={{
                            color: achievement.achieved ? 'primary.main' : 'text.disabled',
                            mr: 1,
                          }}
                        />
                        <Typography variant="subtitle1" sx={{ fontFamily: 'Nunito', fontWeight: 600 }}>
                          {achievement.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Nunito' }}>
                        {achievement.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
