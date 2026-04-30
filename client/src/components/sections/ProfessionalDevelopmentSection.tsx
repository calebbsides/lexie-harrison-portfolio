import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function ProfessionalDevelopmentSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Typography variant="h2" color="primary" gutterBottom>
          Professional Development &amp; Reflection
        </Typography>

        {/* Self-Reflection Narrative */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Self-Reflection on Personal Growth
          </Typography>
          <Typography variant="body1" paragraph>
            Type here
          </Typography>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Future Career Goals */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Future Career Goals &amp; Professional Development Plan
          </Typography>
          <Typography variant="body1" paragraph>
            Type here
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
