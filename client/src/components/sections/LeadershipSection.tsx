import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { leadershipActivities } from '../../data/leadership';

export default function LeadershipSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Leadership &amp; Advocacy
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {leadershipActivities.map((activity) => {
          return (
            <Grid item xs={12} md={6} key={`${activity.organization}-${activity.role.join(',')}`}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  borderColor: 'rgba(0,105,92,0.2)',
                  borderTop: '4px solid',
                  borderTopColor: 'primary.main',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  ...(activity.assetUrl && {
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0,105,92,0.15)',
                      borderTopColor: 'primary.light',
                    },
                  }),
                }}
                onClick={activity.assetUrl ? () => window.open(activity.assetUrl, '_blank', 'noopener,noreferrer') : undefined}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {activity.organization}
                  </Typography>
                  <Box sx={{ mb: 1, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {activity.role.map((r) => (
                      <Chip key={r} label={r} color="primary" size="small" />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {activity.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
