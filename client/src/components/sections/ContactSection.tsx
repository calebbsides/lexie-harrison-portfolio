import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactForm from '../ContactForm';
import { contactInfo } from '../../data/contact';

export default function ContactSection() {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, pt: 2 }}>
      <Box sx={{ flexShrink: 0, minWidth: 200 }}>
        <Typography variant="overline" color="primary">Get in Touch</Typography>
        <Typography variant="h1" gutterBottom>Contact</Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          <strong>Email:</strong> {contactInfo.email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Service Area:</strong> {contactInfo.serviceArea}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <ContactForm />
      </Box>
    </Box>
  );
}
