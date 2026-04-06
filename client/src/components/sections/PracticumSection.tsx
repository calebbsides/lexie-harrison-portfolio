import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { practicumEntries } from '../../data/practicum';

export default function PracticumSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Practicum &amp; Internship Experiences
      </Typography>
      <Alert severity="info" sx={{ mb: 4 }}>
        Work Samples Notice: All work samples included in this section have had student names and
        identifying information redacted to protect confidentiality.
      </Alert>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {practicumEntries.map((entry, index) => (
          <Card variant="outlined" key={index}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {entry.site}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Supervisor: {entry.supervisor}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Hours Completed: <strong>{entry.hoursCompleted}</strong>
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1.5, mb: 0.5 }}>
                Primary Responsibilities
              </Typography>
              <List dense disablePadding>
                {entry.primaryResponsibilities.map((responsibility, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.25 }}>
                    <ListItemText
                      primary={responsibility}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
              {entry.evaluationSummary && (
                <>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    Supervisor Evaluation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {entry.evaluationSummary}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
