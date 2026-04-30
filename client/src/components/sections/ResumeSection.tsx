import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface ResumeDoc {
  title: string;
  label: string;
  pdfUrl: string;
}

const RESUME_DOCS: ResumeDoc[] = [
  {
    title: 'Resume',
    label: 'Resume',
    pdfUrl: '/resume-and-cover-letter/resume.pdf',
  },
  {
    title: 'Cover Letter',
    label: 'Cover Letter',
    pdfUrl: '/resume-and-cover-letter/cover-letter.pdf',
  },
];

function ResumeDocument({ doc }: { doc: ResumeDoc }) {
  const [numPages, setNumPages] = useState<number>(0);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const pageWidth = Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 48 : 900);

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
        {doc.title}
      </Typography>

      <Document
        file={doc.pdfUrl}
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
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {Array.from({ length: numPages }, (_, i) => (
            <Box key={i + 1} sx={{ boxShadow: 4, borderRadius: 1, overflow: 'hidden' }}>
              <Page
                pageNumber={i + 1}
                width={pageWidth}
                renderTextLayer
                renderAnnotationLayer
              />
            </Box>
          ))}
        </Box>
      </Document>
    </Box>
  );
}

export default function ResumeSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Resume &amp; Cover Letter
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
        {RESUME_DOCS.map((doc) => (
          <ResumeDocument key={doc.title} doc={doc} />
        ))}
      </Box>
    </Container>
  );
}
