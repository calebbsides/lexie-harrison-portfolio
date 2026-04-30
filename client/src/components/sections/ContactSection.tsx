import { Box, Container, Typography } from '@mui/material';
import { contactInfo } from '../../data/contact';
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Box>
        <Typography variant="h2" color="primary" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {contactInfo.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Service Area:</strong> {contactInfo.serviceArea}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <ContactForm />
        </Box>
      </Box>
    </Container>
  );
}
