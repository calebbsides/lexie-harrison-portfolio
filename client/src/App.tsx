import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import NavBar, { NavItem } from "./components/NavBar";
import OrnamentalDivider from "./components/OrnamentalDivider";
import IntroductionSection from "./components/sections/IntroductionSection";
import ResumeSection from "./components/sections/ResumeSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import LeadershipSection from "./components/sections/LeadershipSection";
import ArtifactsSection from "./components/sections/ArtifactsSection";
import PracticumSection from "./components/sections/PracticumSection";
import ProfessionalDevelopmentSection from "./components/sections/ProfessionalDevelopmentSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";


const NAV_ITEMS: NavItem[] = [
  { label: "Introduction", sectionId: "introduction" },
  { label: "Resume", sectionId: "resume" },
  { label: "Certifications", sectionId: "certifications" },
  { label: "Projects", sectionId: "projects" },
  { label: "Leadership", sectionId: "leadership" },
  { label: "Artifacts", sectionId: "artifacts" },
  { label: "Practicum", sectionId: "practicum" },
  { label: "Professional Development", sectionId: "professional-development" },
  { label: "Contact", sectionId: "contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      // Trigger when the top of a section crosses the upper 20% of the viewport.
      // This works regardless of section height.
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 },
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
      {NAV_ITEMS.map(({ sectionId, label }, index) => {
        // index 0 (introduction) manages its own hero background.
        // From index 1 onward, alternate between white and the default grey.
        const sectionBg =
          index === 0 ? undefined : index % 2 === 0 ? "background.paper" : "background.default";
        return (
        <Box key={sectionId}>
          {index > 0 && <OrnamentalDivider />}
          <Box id={sectionId} component="section" sx={{ bgcolor: sectionBg }}>
            {sectionId === "introduction" ? (
              <IntroductionSection />
            ) : sectionId === "resume" ? (
              <ResumeSection />
            ) : sectionId === "certifications" ? (
              <CertificationsSection />
            ) : sectionId === "projects" ? (
              <ProjectsSection />
            ) : sectionId === "leadership" ? (
              <LeadershipSection />
            ) : sectionId === "artifacts" ? (
              <ArtifactsSection />
            ) : sectionId === "practicum" ? (
              <PracticumSection />
            ) : sectionId === "professional-development" ? (
              <ProfessionalDevelopmentSection />
            ) : sectionId === "contact" ? (
              <ContactSection />
            ) : (
              <h2>{label}</h2>
            )}
          </Box>
        </Box>
        );
      })}
      <Footer />
    </>
  );
}
