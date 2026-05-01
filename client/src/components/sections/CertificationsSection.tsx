import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { credentials } from '../../data/credentials';

export default function CertificationsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Certifications &amp; Credentials
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {credentials.map((credential) => (
          <Grid item xs={12} sm={6} md={4} key={credential.title}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                cursor: credential.documentUrl ? 'pointer' : 'default',
                transition: 'box-shadow 0.2s',
                '&:hover': credential.documentUrl ? { boxShadow: 4 } : {},
              }}
              onClick={() => {
                if (credential.documentUrl) {
                  window.open(credential.documentUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {credential.title}
                </Typography>
                {credential.issuingOrganization && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {credential.issuingOrganization}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  {credential.dateObtained}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
