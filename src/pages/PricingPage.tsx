import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Check as CheckIcon } from '@mui/icons-material';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      duration: '14 days',
      features: [
        'Create up to 5 personalized stories',
        'Choose from 10 story themes',
        'Basic character customization',
        'Standard story length (1000 words)',
        'Share stories via link',
        'Child-safe content filtering',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      duration: 'per month',
      features: [
        'Unlimited story creation',
        '50+ magical story themes',
        'Advanced character & plot customization',
        'Extended stories (up to 3000 words)',
        'Custom moral lessons & educational themes',
        'AI-generated illustrations',
        'Download stories as PDF & audio',
        'Multiple child profiles',
        'Priority email & chat support',
        'Ad-free experience',
        'Early access to new features',
      ],
      buttonText: 'Get Premium',
      highlighted: true,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontFamily: "'Bubblegum Sans', cursive",
              background: 'linear-gradient(45deg, #FF6B6B 30%, #FFD93D 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Story Plan ✨
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 8,
              color: 'text.secondary',
              fontFamily: 'Nunito',
            }}
          >
            Start with a free trial, upgrade anytime
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={6} key={plan.name} sx={{ maxWidth: 400 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  elevation={plan.highlighted ? 8 : 2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                    ...(plan.highlighted && {
                      border: `2px solid ${theme.palette.primary.main}`,
                      '&::before': {
                        content: '"✨ Most Popular"',
                        position: 'absolute',
                        top: 20,
                        right: -35,
                        background: theme.palette.primary.main,
                        color: 'white',
                        padding: '4px 40px',
                        transform: 'rotate(45deg)',
                        fontFamily: "'Bubblegum Sans', cursive",
                        fontSize: '0.9rem',
                      },
                    }),
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontFamily: "'Bubblegum Sans', cursive",
                        color: plan.highlighted ? theme.palette.primary.main : 'text.primary',
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        component="span"
                        sx={{
                          fontFamily: "'Bubblegum Sans', cursive",
                          color: plan.highlighted ? theme.palette.primary.main : 'text.primary',
                        }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          ml: 1,
                          color: 'text.secondary',
                          fontFamily: 'Nunito',
                        }}
                      >
                        / {plan.duration}
                      </Typography>
                    </Box>
                    <List>
                      {plan.features.map((feature) => (
                        <ListItem key={feature} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: theme.palette.success.main }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              fontFamily: 'Nunito',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ mt: 4 }}>
                      <Button
                        fullWidth
                        size="large"
                        variant={plan.highlighted ? 'contained' : 'outlined'}
                        onClick={() => navigate('/auth')}
                        sx={{
                          py: 2,
                          fontFamily: 'Nunito',
                        }}
                      >
                        {plan.buttonText}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PricingPage;
