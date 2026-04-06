import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { projects } from '../../data/projects';

const categoryLabel: Record<string, string> = {
  'lesson-plan': 'Lesson Plan',
  research: 'Research',
  presentation: 'Presentation',
  workshop: 'Workshop',
};

export default function ProjectsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Projects &amp; Presentations
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ flex: 1, mr: 1 }}>
                    {project.title}
                  </Typography>
                  <Chip
                    label={categoryLabel[project.category] ?? project.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                  {project.dateOrContext}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
