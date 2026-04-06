import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import { artifacts as defaultArtifacts } from '../../data/artifacts';
import type { Artifact } from '../../data/types';

const TYPE_LABELS: Record<Artifact['type'], string> = {
  reflection: 'Session Reflection',
  'counseling-plan': 'Counseling Plan',
  'case-study': 'Case Study',
};

interface ArtifactsSectionProps {
  artifacts?: Artifact[];
}

export default function ArtifactsSection({ artifacts = defaultArtifacts }: ArtifactsSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Counseling Services Artifacts
      </Typography>
      <Alert severity="info" sx={{ mb: 4 }}>
        Confidentiality Notice: All identifying information has been removed or anonymized from the
        materials presented in this section.
      </Alert>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {artifacts.map((artifact) => (
          <Card variant="outlined" key={artifact.title}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {artifact.title}
              </Typography>
              <Box sx={{ mb: 1.5 }}>
                <Chip label={TYPE_LABELS[artifact.type]} color="primary" size="small" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {artifact.summary}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
