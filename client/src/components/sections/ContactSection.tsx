import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "../ContactForm";
import { contactInfo } from "../../data/contact";

export default function ContactSection() {
  return (
    <Box sx={{ display: "flex", gap: { xs: 4, md: 10 }, height: "100%", alignItems: "center" }}>
      {/* Left: heading + contact info */}
      <Box sx={{ flexShrink: 0, minWidth: 200, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 600 }}>
            Get in Touch
          </Typography>
          <Typography variant="h1" color="text.primary" gutterBottom>
            Contact
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          <strong>Email:</strong> {contactInfo.email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Service Area:</strong> {contactInfo.serviceArea}
        </Typography>
      </Box>

      {/* Right: form */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <ContactForm />
      </Box>
    </Box>
  );
}
