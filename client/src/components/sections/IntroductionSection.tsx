import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CONTENT = {
  name: 'Alexandra Harrison',
  title: 'School Counselor',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Alexandra Harrison, School Counselor',
};

export default function IntroductionSection() {
  const [headshotVisible, setHeadshotVisible] = useState(true);

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero + Headshot row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 4, md: 6 },
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
              width: { xs: 160, md: 220 },
              height: { xs: 160, md: 220 },
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              flexShrink: 0,
              border: '4px solid',
              borderColor: 'primary.main',
            }}
          />
        )}

        {/* Name / title / tagline */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" color="primary" gutterBottom>
            {CONTENT.name}
          </Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            {CONTENT.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>

      {/* Biography */}
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
        <Typography variant="h2" color="primary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="text.primary">
          Type here
        </Typography>
      </Box>

      {/* Philosophy */}
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Counseling Philosophy
        </Typography>
        <Typography variant="body1" color="text.primary">
          Type here
        </Typography>
      </Box>
    </Container>
  );
}
