import { useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { projects, lessonPlan } from '../../data/projects';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const categoryLabel: Record<string, string> = {
  'lesson-plan': 'Lesson Plan',
  research: 'Research',
  presentation: 'Presentation',
  workshop: 'Workshop',
};

function LessonPlanDocument() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {lessonPlan.title}
          </Typography>
          <Chip label="Lesson Plan" color="primary" size="small" />
        </Box>
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ boxShadow: 4, borderRadius: 1, overflow: 'hidden', display: 'inline-block' }} maxWidth="md">
          <Document
            file={lessonPlan.attachmentUrl}
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
    </Box>
  );
}

function PdfThumbnail({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(300);

  return (
    <Box
      ref={(el: HTMLDivElement | null) => {
        if (el) setContainerWidth(el.clientWidth);
      }}
    >
      {!loaded && (
        <Skeleton variant="rectangular" width="100%" height="100%" sx={{ position: 'absolute', top: 0, left: 0 }} />
      )}
      <Document
        file={url}
        loading={null}
        onLoadSuccess={() => setLoaded(true)}
      >
        <Page
          pageNumber={1}
          width={containerWidth}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          onRenderSuccess={() => setLoaded(true)}
          canvasBackground="white"
        />
      </Document>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Projects &amp; Presentations
      </Typography>
      <LessonPlanDocument />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card
              variant="outlined"
              sx={{
                borderColor: 'rgba(0,105,92,0.2)',
                borderTop: '4px solid',
                borderTopColor: 'primary.main',
                transition: 'box-shadow 0.2s, transform 0.2s',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,105,92,0.15)',
                  borderTopColor: 'primary.light',
                },
              }}
            >
              <CardActionArea
                component="a"
                href={project.attachmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
              >
                {project.attachmentUrl && (
                  <PdfThumbnail url={project.attachmentUrl} />
                )}
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
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
