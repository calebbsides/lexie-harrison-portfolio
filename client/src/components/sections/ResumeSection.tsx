import DownloadIcon from "@mui/icons-material/Download";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 4, md: 8 },
        flex: 1,
        minHeight: 0,
        alignItems: "stretch",
      }}
    >
      {/* Left: title + download */}
      <Box
        sx={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: 180,
          justifyContent: "center",
        }}
      >
        <Typography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: 3, fontWeight: 600 }}
        >
          Documents
        </Typography>
        <Typography variant="h2" color="text.primary">
          Resume
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="/resume-and-cover-letter/Alexandra Harrison Resume.pdf"
          download
          startIcon={<DownloadIcon />}
          sx={{ alignSelf: "flex-start", mt: 1 }}
        >
          Download
        </Button>
      </Box>

      {/* Right: PDF preview */}
      <Box
        ref={containerRef}
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={2}>
          <Document file="/resume-and-cover-letter/Alexandra Harrison Resume.pdf">
            <Page
              pageNumber={1}
              height={
                containerSize.height > 0 ? containerSize.height : undefined
              }
            />
          </Document>
        </Paper>
      </Box>
    </Box>
  );
}
