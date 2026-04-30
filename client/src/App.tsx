import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IntroductionSection from './components/sections/IntroductionSection';
import ResumeSection from './components/sections/ResumeSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ProjectsSection, { PdfProjectCarousel, PROJECT_ITEMS } from './components/sections/ProjectsSection';
import LeadershipSection from './components/sections/LeadershipSection';
import ArtifactsSection from './components/sections/ArtifactsSection';
import PracticumSection from './components/sections/PracticumSection';
import ProfessionalDevelopmentSection from './components/sections/ProfessionalDevelopmentSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function SnapItem({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        height: '100vh',
        scrollSnapAlign: 'start',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: { xs: 3, md: 6 },
        boxSizing: 'border-box',
      }}
    >
      {children}
    </Box>
  );
}

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={scrollRef}
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
        <SnapItem id="introduction"><IntroductionSection /></SnapItem>
        <SnapItem id="resume"><ResumeSection /></SnapItem>
        <SnapItem id="certifications"><CertificationsSection /></SnapItem>

        <SnapItem id="projects"><ProjectsSection /></SnapItem>
        {PROJECT_ITEMS.map((item) =>
          item.type === 'pdf' ? (
            <SnapItem key={item.file}>
              <PdfProjectCarousel file={item.file} name={item.name} />
            </SnapItem>
          ) : (
            <SnapItem key={item.file}>
              <Typography variant="overline" color="primary">Projects &amp; Presentations</Typography>
              <Typography variant="h2" gutterBottom>{item.name}</Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>Word document — download to view</Typography>
              <Button variant="contained" color="primary" component="a" href={item.file} download sx={{ alignSelf: 'flex-start' }}>
                Download
              </Button>
            </SnapItem>
          )
        )}

        <SnapItem id="leadership"><LeadershipSection /></SnapItem>
        <SnapItem id="artifacts"><ArtifactsSection /></SnapItem>
        <SnapItem id="practicum"><PracticumSection /></SnapItem>
        <SnapItem id="professional-development"><ProfessionalDevelopmentSection /></SnapItem>
        <SnapItem id="contact"><ContactSection /></SnapItem>

        <Box component="footer" sx={{ scrollSnapAlign: 'start' }}>
          <Footer />
        </Box>
      </Box>
  );
}
