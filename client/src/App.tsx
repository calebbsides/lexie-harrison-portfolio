import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import NavBar, { NavItem } from './components/NavBar';
import IntroductionSection from './components/sections/IntroductionSection';
import ResumeSection from './components/sections/ResumeSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ProjectsSection from './components/sections/ProjectsSection';
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

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar items={NAV_ITEMS} activeSection={activeSection} />
      {NAV_ITEMS.map(({ sectionId, label }) => (
        <Box
          key={sectionId}
          id={sectionId}
          component="section"
          sx={{
            minHeight: '100vh',
            ...(sectionId !== 'introduction' && { padding: { xs: '1rem', md: '2rem' } }),
          }}
        >
          {sectionId === 'introduction' ? (
            <IntroductionSection />
          ) : sectionId === 'resume' ? (
            <ResumeSection />
          ) : sectionId === 'certifications' ? (
            <CertificationsSection />
          ) : sectionId === 'projects' ? (
            <ProjectsSection />
          ) : sectionId === 'leadership' ? (
            <LeadershipSection />
          ) : sectionId === 'artifacts' ? (
            <ArtifactsSection />
          ) : sectionId === 'practicum' ? (
            <PracticumSection />
          ) : sectionId === 'professional-development' ? (
            <ProfessionalDevelopmentSection />
          ) : sectionId === 'contact' ? (
            <ContactSection />
          ) : (
            <h2>{label}</h2>
          )}
        </Box>
      ))}
      <Footer />
    </>
  );
}
