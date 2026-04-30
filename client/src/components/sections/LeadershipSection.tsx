import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { leadershipActivities } from '../../data/leadership';

function formatDateRange(startDate?: string, endDate?: string): string | null {
  if (!startDate) return null;
  const fmt = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  return endDate ? `${fmt(startDate)} – ${fmt(endDate)}` : `${fmt(startDate)} – Present`;
}

export default function LeadershipSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Leadership &amp; Advocacy
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {leadershipActivities.map((activity) => {
          const dateRange = formatDateRange(activity.startDate, activity.endDate);
          return (
            <Grid item xs={12} md={6} key={`${activity.organization}-${activity.role}`}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {activity.organization}
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Chip label={activity.role} color="primary" size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {activity.description}
                  </Typography>
                  {dateRange && (
                    <Typography variant="caption" color="text.secondary">
                      {dateRange}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
