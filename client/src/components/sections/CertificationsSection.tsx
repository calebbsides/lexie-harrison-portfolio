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

const certs = [
  { name: 'ASIST', file: '/certs/ASIST.png', type: 'image' as const },
  { name: 'Citi Completion Certificate', file: '/certs/Citi Completion Certificate.pdf', type: 'pdf' as const },
  { name: 'Mandated Reporter Cert', file: '/certs/Mandated Reporter Cert.pdf', type: 'pdf' as const },
  { name: 'Nursing License', file: '/certs/Nursing License.png', type: 'image' as const },
  { name: 'PMH-BC', file: '/certs/PMH-BC.png', type: 'image' as const },
  { name: 'Psychological First Aid (PFA) Certificate', file: '/certs/Psychological First Aid (PFA) Certificate.pdf', type: 'pdf' as const },
  { name: 'Red Cross', file: '/certs/Red Cross.png', type: 'image' as const },
];

export default function CertificationsSection() {
  const [index, setIndex] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setHeight(e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const prev = () => setIndex((i) => (i - 1 + certs.length) % certs.length);
  const next = () => setIndex((i) => (i + 1) % certs.length);
  const cert = certs[index];

  return (
    <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, height: '100%' }}>
      {/* Sidebar: title + list */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1, flexShrink: 0, minWidth: 180 }}>
        <Typography variant="overline" color="primary">Credentials</Typography>
        <Typography variant="h2" gutterBottom>Certifications</Typography>
        {certs.map((c, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              cursor: 'pointer',
              py: 0.5, px: 1,
              borderLeft: '3px solid',
              borderColor: i === index ? 'primary.main' : 'transparent',
              bgcolor: i === index ? 'action.selected' : 'transparent',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2"
              sx={{ fontWeight: i === index ? 600 : 400, color: i === index ? 'primary.main' : 'text.secondary', fontSize: '0.8rem' }}>
              {c.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Viewer */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, overflow: 'hidden' }}>
        <Box ref={viewerRef} sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, overflow: 'hidden' }}>
          <IconButton onClick={prev} aria-label="Previous" size="small"
            sx={{ border: '1px solid', borderColor: 'primary.light', color: 'primary.main', flexShrink: 0 }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {cert.type === 'image' ? (
              <Box component="img" src={cert.file} alt={cert.name}
                sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 2, boxShadow: 4 }} />
            ) : height > 0 ? (
              <Document file={cert.file}>
                <Page pageNumber={1} height={height} />
              </Document>
            ) : null}
          </Box>

          <IconButton onClick={next} aria-label="Next" size="small"
            sx={{ border: '1px solid', borderColor: 'primary.light', color: 'primary.main', flexShrink: 0 }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography variant="caption" color="text.secondary" textAlign="center">
          {cert.name} — {index + 1} of {certs.length}
        </Typography>
      </Box>
    </Box>
  );
}
