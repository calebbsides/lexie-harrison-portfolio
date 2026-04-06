import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 3,
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Alexandra Harrison. All rights reserved.
        </Typography>
        <Link
          href="https://www.linkedin.com/in/alexandraharrison"
          target="_blank"
          rel="noopener noreferrer"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, '&:hover': { color: 'primary.main' } }}
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon fontSize="small" />
          <Typography variant="body2">LinkedIn</Typography>
        </Link>
      </Container>
    </Box>
  );
}
