import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { artifacts as defaultArtifacts } from '../../data/artifacts';
import type { Artifact } from '../../data/types';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const TYPE_LABELS: Record<Artifact['type'], string> = {
  reflection: 'Session Reflection',
  'counseling-plan': 'Counseling Plan',
  'case-study': 'Case Study',
};

interface ArtifactsSectionProps {
  artifacts?: Artifact[];
}

function ArtifactDocument({ artifact }: { artifact: Artifact }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  return (
    <Box>
      {/* Label row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {artifact.title}
        </Typography>
        <Chip label={TYPE_LABELS[artifact.type]} color="primary" size="small" />
      </Box>

      {/* Document */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            boxShadow: 4,
            borderRadius: 1,
            overflow: 'hidden',
            display: 'inline-block',
          }}
          maxWidth="md"
        >
          <Document
            file={artifact.pdfUrl}
            onLoadSuccess={onLoadSuccess}
            loading={
              <Box sx={{ p: 6, textAlign: 'center', bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary">Loading...</Typography>
              </Box>
            }
            error={
              <Box sx={{ p: 6, textAlign: 'center', bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="error">Failed to load document.</Typography>
              </Box>
            }
          >
            {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
              <Box key={page} sx={{ display: page === pageNumber ? 'block' : 'none' }}>
                <Page
                  pageNumber={page}
                  width={Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 48 : 900)}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </Box>
            ))}
          </Document>
        </Box>
      </Box>

      {/* Pagination — only shown for multi-page docs */}
      {numPages > 1 && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1, gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
          >
            <NavigateBeforeIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            Page {pageNumber} of {numPages}
          </Typography>
          <IconButton
            size="small"
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            aria-label="Next page"
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

export default function ArtifactsSection({ artifacts = defaultArtifacts }: ArtifactsSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Counseling Services Artifacts
      </Typography>
      <Alert severity="info" sx={{ mb: 5 }}>
        Confidentiality Notice: All identifying information has been removed or anonymized from the
        materials presented in this section.
      </Alert>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 6,
        }}
      >
        {artifacts.map((artifact) => (
          <ArtifactDocument key={artifact.pdfUrl} artifact={artifact} />
        ))}
      </Box>
    </Container>
  );
}
