import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar, { NavItem } from './components/NavBar';
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

const NAV_ITEMS: NavItem[] = [
  { label: 'Introduction', sectionId: 'introduction' },
  { label: 'Resume', sectionId: 'resume' },
  { label: 'Certifications', sectionId: 'certifications' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Leadership', sectionId: 'leadership' },
  { label: 'Artifacts', sectionId: 'artifacts' },
  { label: 'Practicum', sectionId: 'practicum' },
  { label: 'Professional Development', sectionId: 'professional-development' },
  { label: 'Contact', sectionId: 'contact' },
];

/** A single full-viewport snap item */
function SnapItem({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        height: 'calc(100vh - 64px)', // full viewport minus navbar
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        boxSizing: 'border-box',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { root: container, threshold: 0.5 }
    );

    // Observe all snap items that have an id
    container.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar items={NAV_ITEMS} activeSection={activeSection} />

      {/* Full-page scroll-snap container */}
      <Box
        ref={scrollRef}
        sx={{
          height: 'calc(100vh - 64px)',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          mt: '64px'
        }}
      >
        <SnapItem id="introduction"><IntroductionSection /></SnapItem>
        <SnapItem id="resume"><ResumeSection /></SnapItem>
        <SnapItem id="certifications"><CertificationsSection /></SnapItem>

        {/* Projects: heading + one snap item per document */}
        <SnapItem id="projects"><ProjectsSection /></SnapItem>
        {PROJECT_ITEMS.map((item) =>
          item.type === 'pdf' ? (
            <SnapItem key={item.file}>
              <PdfProjectCarousel file={item.file} name={item.name} />
            </SnapItem>
          ) : (
            <SnapItem key={item.file}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, height: '100%', justifyContent: 'center' }}>
                <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 600 }}>
                  Projects &amp; Presentations
                </Typography>
                <Typography variant="h2" color="text.primary" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Word document — download to view
                </Typography>
                <Box
                  component="a"
                  href={item.file}
                  download
                  sx={{
                    mt: 1, px: 4, py: 1.5,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    '&:hover': { bgcolor: 'primary.dark' },
                    transition: 'background-color 0.2s',
                  }}
                >
                  Download
                </Box>
              </Box>
            </SnapItem>
          )
        )}

        <SnapItem id="leadership"><LeadershipSection /></SnapItem>
        <SnapItem id="artifacts"><ArtifactsSection /></SnapItem>
        <SnapItem id="practicum"><PracticumSection /></SnapItem>
        <SnapItem id="professional-development"><ProfessionalDevelopmentSection /></SnapItem>
        <SnapItem id="contact"><ContactSection /></SnapItem>

        {/* Footer as final snap item */}
        <Box
          component="footer"
          sx={{
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}
