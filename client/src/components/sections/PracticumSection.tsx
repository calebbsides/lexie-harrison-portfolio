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
import { practicumEntries } from '../../data/practicum';
import type { PracticumEntry } from '../../data/types';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PracticumDocument({ entry }: { entry: PracticumEntry }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  return (
    <Box>
      {/* Label row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {entry.site}
          </Typography>
          {entry.pdfLabel && (
            <Chip label={entry.pdfLabel} color="primary" size="small" />
          )}
        </Box>

        {/* Pagination in title row */}
        {numPages > 1 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
              aria-label="Previous page"
            >
              <NavigateBeforeIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {pageNumber} / {numPages}
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

      {/* Document */}
      {entry.pdfUrl && (
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
            file={entry.pdfUrl}
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
            <Page
              pageNumber={pageNumber}
              width={Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 48 : 900)}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        </Box>
        </Box>
      )}
    </Box>
  );
}

export default function PracticumSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Practicum &amp; Internship Experiences
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
        {practicumEntries.map((entry, index) => (
          <PracticumDocument key={index} entry={entry} />
        ))}
      </Box>
    </Container>
  );
}
