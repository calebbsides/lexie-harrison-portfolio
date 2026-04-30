import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CONTENT = {
  name: 'Alexandra Harrison',
  title: 'School Counselor',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Alexandra Harrison, School Counselor',
  biography:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  philosophy:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export default function IntroductionSection() {
  const [headshotVisible, setHeadshotVisible] = useState(true);

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: 4, md: 8 },
        height: '100%',
      }}
    >
      {/* Headshot */}
      {headshotVisible && (
        <Box
          component="img"
          src={CONTENT.headshotSrc}
          alt={CONTENT.headshotAlt}
          onError={() => setHeadshotVisible(false)}
          sx={{
            width: { xs: 140, md: 200 },
            height: { xs: 140, md: 200 },
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            flexShrink: 0,
            border: '4px solid',
            borderColor: 'primary.main',
          }}
        />
      )}

      {/* Text */}
      <Box>
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 600 }}>
          Portfolio
        </Typography>
        <Typography variant="h1" color="text.primary" gutterBottom>
          {CONTENT.name}
        </Typography>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {CONTENT.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, color: 'text.secondary', maxWidth: 560 }}>
          {CONTENT.biography}
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleScrollToContact}>
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
