import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LeadershipSection() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 600 }}>
        Portfolio
      </Typography>
      <Typography variant="h1" color="text.primary" gutterBottom>
        Leadership &amp; Advocacy
      </Typography>
    </Box>
  );
}
