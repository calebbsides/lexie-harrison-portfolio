import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export interface ProjectItem {
  name: string;
  file: string;
  type: 'pdf' | 'docx';
}

export const PROJECT_ITEMS: ProjectItem[] = [
  { name: 'Career Theory – Nontraditional Learners', file: '/projects-and-presentations/Career Theory Nontraditional Learners.pdf', type: 'pdf' },
  { name: 'Developmental Presentation – High School', file: '/projects-and-presentations/Developmental Presentation - High School.pdf', type: 'pdf' },
  { name: 'Lesson Plan', file: '/projects-and-presentations/Lesson Plan.docx', type: 'docx' },
  { name: 'LGBTQ+ Group Presentation', file: '/projects-and-presentations/LGBTQ+ Group Presentation.pdf', type: 'pdf' },
];

export function PdfProjectCarousel({ file, name }: { file: string; name: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setHeight(e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const prev = () => setPage((p) => (p > 1 ? p - 1 : numPages));
  const next = () => setPage((p) => (p < numPages ? p + 1 : 1));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
      {/* Header row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <Box>
          <Typography variant="overline" color="primary">Projects &amp; Presentations</Typography>
          <Typography variant="h3">{name}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {numPages > 0 && <Typography variant="body2" color="text.secondary">{page} / {numPages}</Typography>}
          <IconButton onClick={prev} disabled={numPages === 0} size="small"
            sx={{ border: '1px solid', borderColor: 'primary.light', color: 'primary.main' }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={next} disabled={numPages === 0} size="small"
            sx={{ border: '1px solid', borderColor: 'primary.light', color: 'primary.main' }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* PDF viewer */}
      <Box ref={viewerRef} sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {height > 0 && (
          <Document file={file} onLoadSuccess={({ numPages: n }) => setNumPages(n)}>
            <Page pageNumber={page} height={height} />
          </Document>
        )}
      </Box>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box sx={{ pt: 4 }}>
      <Typography variant="overline" color="primary">Portfolio</Typography>
      <Typography variant="h1" gutterBottom>Projects &amp; Presentations</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
        A collection of academic projects, lesson plans, and presentations developed throughout my counseling training.
      </Typography>
    </Box>
  );
}
