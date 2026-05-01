import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { credentials } from '../../data/credentials';

// Map credential titles to a relevant emoji badge
function getCredentialIcon(title: string): string {
  if (title.toLowerCase().includes('suicide') || title.toLowerCase().includes('asist')) return '🛡️';
  if (title.toLowerCase().includes('nurse') || title.toLowerCase().includes('nursing')) return '🏥';
  if (title.toLowerCase().includes('psychiatric') || title.toLowerCase().includes('mental health')) return '🧠';
  if (title.toLowerCase().includes('cpr') || title.toLowerCase().includes('red cross')) return '❤️';
  if (title.toLowerCase().includes('first aid') || title.toLowerCase().includes('pfa')) return '🤝';
  if (title.toLowerCase().includes('mandated')) return '📋';
  return '🎓';
}

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
                borderColor: 'rgba(0,105,92,0.2)',
                borderTop: '4px solid',
                borderTopColor: 'primary.main',
                transition: 'box-shadow 0.2s, transform 0.2s',
                '&:hover': credential.documentUrl
                  ? {
                      boxShadow: '0 8px 24px rgba(0,105,92,0.15)',
                      borderTopColor: 'primary.light',
                    }
                  : {},
              }}
              onClick={() => {
                if (credential.documentUrl) {
                  window.open(credential.documentUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1 }}>
                  <Box
                    sx={{
                      fontSize: '1.6rem',
                      lineHeight: 1,
                      mt: '2px',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {getCredentialIcon(credential.title)}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.3 }}>
                    {credential.title}
                  </Typography>
                </Box>
                {credential.issuingOrganization && (
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ pl: '2.6rem' }}>
                    {credential.issuingOrganization}
                  </Typography>
                )}
                <Box sx={{ pl: '2.6rem', mt: 1 }}>
                  <Chip
                    label={credential.dateObtained}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(0,105,92,0.08)',
                      color: 'primary.dark',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
