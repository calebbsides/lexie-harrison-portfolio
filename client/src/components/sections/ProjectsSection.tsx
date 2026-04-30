import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Paper } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export interface ProjectItem {
  name: string;
  file: string;
  type: "pdf" | "docx";
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: "Career Theory – Nontraditional Learners",
    file: "/projects-and-presentations/Career Theory Nontraditional Learners.pdf",
    type: "pdf",
  },
  {
    name: "Developmental Presentation – High School",
    file: "/projects-and-presentations/Developmental Presentation - High School.pdf",
    type: "pdf",
  },
  {
    name: "Lesson Plan",
    file: "/projects-and-presentations/Lesson Plan.docx",
    type: "docx",
  },
  {
    name: "LGBTQ+ Group Presentation",
    file: "/projects-and-presentations/LGBTQ+ Group Presentation.pdf",
    type: "pdf",
  },
];

interface PdfCarouselProps {
  file: string;
  name: string;
}

export function PdfProjectCarousel({ file, name }: PdfCarouselProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [viewerSize, setViewerSize] = useState({ width: 0, height: 0 });
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(true);

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
    setTimeout(() => {
      setPage(next);
      setVisible(true);
    }, 80);
  };

  const prev = () => navigate(page > 1 ? page - 1 : numPages);
  const next = () => navigate(page < numPages ? page + 1 : 1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        gap: 1.5,
      }}
    >
      {/* Top bar: title left, nav right */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: 3, fontWeight: 600 }}
          >
            Projects &amp; Presentations
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            sx={{ lineHeight: 1.2 }}
          >
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {numPages > 0 && (
            <Typography variant="body2" color="text.secondary">
              {page} / {numPages}
            </Typography>
          )}
          <IconButton
            onClick={prev}
            aria-label="Previous page"
            disabled={numPages === 0}
            sx={{
              border: "1px solid",
              borderColor: "primary.light",
              color: "primary.main",
              "&:hover": { bgcolor: "primary.main", color: "white" },
              transition: "all 0.2s",
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={next}
            aria-label="Next page"
            disabled={numPages === 0}
            sx={{
              border: "1px solid",
              borderColor: "primary.light",
              color: "primary.main",
              "&:hover": { bgcolor: "primary.main", color: "white" },
              transition: "all 0.2s",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* PDF viewer — full width */}
      <Box
        ref={viewerRef}
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.08s ease-in-out",
        }}
      >
        <Paper elevation={8}>
          <Document
            file={file}
            onLoadSuccess={({ numPages: n }) => setNumPages(n)}
          >
            <Page
              pageNumber={page}
              height={viewerSize.height > 0 ? viewerSize.height : undefined}
            />
          </Document>
        </Paper>
      </Box>
    </Box>
  );
}

/** Projects section heading page */
export default function ProjectsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        minHeight: 0,
      }}
    >
      <Typography
        variant="overline"
        color="primary"
        sx={{ letterSpacing: 3, fontWeight: 600 }}
      >
        Portfolio
      </Typography>
      <Typography variant="h1" color="text.primary" gutterBottom>
        Projects &amp; Presentations
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
        A collection of academic projects, lesson plans, and presentations
        developed throughout my counseling training.
      </Typography>
    </Box>
  );
}
