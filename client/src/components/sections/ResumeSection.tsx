import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const FILE = '/resume-and-cover-letter/Alexandra Harrison Resume.pdf';

export default function ResumeSection() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setHeight(e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, height: '100%' }}>
      {/* Sidebar */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1, flexShrink: 0, minWidth: 160 }}>
        <Typography variant="overline" color="primary">Documents</Typography>
        <Typography variant="h2">Resume</Typography>
        <Button variant="contained" color="primary" component="a" href={FILE} download
          startIcon={<DownloadIcon />} sx={{ alignSelf: 'flex-start', mt: 1 }}>
          Download
        </Button>
      </Box>

      {/* PDF viewer */}
      <Box ref={viewerRef} sx={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {height > 0 && (
          <Document file={FILE}>
            <Page pageNumber={1} height={height} />
          </Document>
        )}
      </Box>
    </Box>
  );
}
