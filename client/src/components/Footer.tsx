import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #003D33 0%, #00695C 100%)',
        py: 3,
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
          © {currentYear} Alexandra Harrison. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
