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

interface CertItem {
  name: string;
  file: string;
  type: 'image' | 'pdf';
}

const certs: CertItem[] = [
  { name: 'ASIST', file: '/certs/ASIST.png', type: 'image' },
  { name: 'Citi Completion Certificate', file: '/certs/Citi Completion Certificate.pdf', type: 'pdf' },
  { name: 'Mandated Reporter Cert', file: '/certs/Mandated Reporter Cert.pdf', type: 'pdf' },
  { name: 'Nursing License', file: '/certs/Nursing License.png', type: 'image' },
  { name: 'PMH-BC', file: '/certs/PMH-BC.png', type: 'image' },
  { name: 'Psychological First Aid (PFA) Certificate', file: '/certs/Psychological First Aid (PFA) Certificate.pdf', type: 'pdf' },
  { name: 'Red Cross', file: '/certs/Red Cross.png', type: 'image' },
];

export default function CertificationsSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const viewerRef = useRef<HTMLDivElement>(null);
  const [viewerSize, setViewerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setViewerSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const navigate = (next: number) => {
    setVisible(false);
    setTimeout(() => { setIndex(next); setVisible(true); }, 200);
  };

  const prev = () => navigate((index - 1 + certs.length) % certs.length);
  const next = () => navigate((index + 1) % certs.length);
  const cert = certs[index];

  // Fit the page to whichever dimension is the binding constraint
  const pageWidth = viewerSize.width > 0 ? viewerSize.width : undefined;
  const pageHeight = viewerSize.height > 0 ? viewerSize.height : undefined;

  return (
    <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
      {/* Left: title + list */}
      <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 180, justifyContent: 'center' }}>
        <Box>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 600 }}>
            Credentials
          </Typography>
          <Typography variant="h2" color="text.primary">
            Certifications
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {certs.map((c, i) => (
            <Box
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Go to ${c.name}`}
              sx={{
                cursor: 'pointer',
                py: 0.75,
                px: 1,
                borderRadius: 1,
                borderLeft: '3px solid',
                borderColor: i === index ? 'primary.main' : 'transparent',
                bgcolor: i === index ? 'rgba(0,105,92,0.06)' : 'transparent',
                transition: 'all 0.15s',
                '&:hover': { bgcolor: 'rgba(0,105,92,0.04)' },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: i === index ? 600 : 400,
                  color: i === index ? 'primary.main' : 'text.secondary',
                  fontSize: '0.8rem',
                  lineHeight: 1.3,
                }}
              >
                {c.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right: viewer + arrows + caption */}
      <Box sx={{ flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* Viewer row — takes all remaining height */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minHeight: 0 }}>
          <IconButton
            onClick={prev}
            aria-label="Previous certification"
            sx={{
              border: '1px solid', borderColor: 'primary.light', color: 'primary.main', flexShrink: 0,
              '&:hover': { bgcolor: 'primary.main', color: 'white' }, transition: 'all 0.2s',
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {/* Viewer — measured so we can size the Page exactly */}
          <Box
            ref={viewerRef}
            sx={{
              flex: 1,
              height: '100%',
              minHeight: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out',
              overflow: 'hidden',
            }}
          >
            {cert.type === 'image' ? (
              <Box
                component="img"
                src={cert.file}
                alt={cert.name}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: 6,
                  display: 'block',
                }}
              />
            ) : (
              <Box sx={{ boxShadow: 6, borderRadius: 2, overflow: 'hidden', maxHeight: '100%' }}>
                <Document file={cert.file}>
                  <Page
                    pageNumber={1}
                    height={pageHeight}
                  />
                </Document>
              </Box>
            )}
          </Box>

          <IconButton
            onClick={next}
            aria-label="Next certification"
            sx={{
              border: '1px solid', borderColor: 'primary.light', color: 'primary.main', flexShrink: 0,
              '&:hover': { bgcolor: 'primary.main', color: 'white' }, transition: 'all 0.2s',
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Caption — fixed height at bottom */}
        <Box sx={{ textAlign: 'center', flexShrink: 0, pb: 0.5 }}>
          <Typography variant="subtitle2" color="text.primary" fontWeight={600}>{cert.name}</Typography>
          <Typography variant="caption" color="text.secondary">{index + 1} of {certs.length}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
