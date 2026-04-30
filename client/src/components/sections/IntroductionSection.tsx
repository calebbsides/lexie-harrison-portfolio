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
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export default function IntroductionSection() {
  const [headshotVisible, setHeadshotVisible] = useState(true);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 4, md: 8 }, pt: 4 }}>
      {headshotVisible && (
        <Box
          component="img"
          src={CONTENT.headshotSrc}
          alt={CONTENT.headshotAlt}
          onError={() => setHeadshotVisible(false)}
          sx={{
            width: { xs: 120, md: 180 },
            height: { xs: 120, md: 180 },
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            flexShrink: 0,
            border: '4px solid',
            borderColor: 'primary.main',
          }}
        />
      )}
      <Box>
        <Typography variant="overline" color="primary">Portfolio</Typography>
        <Typography variant="h1" gutterBottom>{CONTENT.name}</Typography>
        <Typography variant="h3" color="text.secondary" gutterBottom>{CONTENT.title}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mb: 3 }}>
          {CONTENT.biography}
        </Typography>
        <Button variant="contained" color="primary" size="large"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
