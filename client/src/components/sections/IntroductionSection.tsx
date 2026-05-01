import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

const CONTENT = {
  name: "Alexandra Harrison",
  title: "School Counselor, M.Ed. Candidate",
  tagline: "Empowering every student to feel supported, seen, and heard.",
  headshotSrc: "/lexie-headshot.jpeg",
  headshotAlt: "Alexandra Harrison, School Counselor",
};

export default function IntroductionSection() {
  const [headshotVisible, setHeadshotVisible] = useState(true);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Full-width hero band ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #E8F5F3 0%, #F0FAF8 50%, #E8F5F3 100%)",
          borderBottom: "1px solid",
          borderColor: "rgba(0,105,92,0.15)",
          py: { xs: 6, md: 10 },
          // Subtle dot-grid background pattern
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,105,92,0.08) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          },
          // Decorative blurred teal blob top-right
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,105,92,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in timeout={800}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* Headshot */}
              {headshotVisible && (
                <Box
                  component="img"
                  src={CONTENT.headshotSrc}
                  alt={CONTENT.headshotAlt}
                  onError={() => setHeadshotVisible(false)}
                  sx={{
                    width: { xs: 180, md: 260 },
                    height: { xs: 180, md: 260 },
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    flexShrink: 0,
                    border: "5px solid",
                    borderColor: "primary.main",
                    boxShadow: "0 8px 40px rgba(0,105,92,0.25), 0 0 0 8px rgba(0,105,92,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 12px 48px rgba(0,105,92,0.32), 0 0 0 10px rgba(0,105,92,0.1)",
                    },
                  }}
                />
              )}

              {/* Name / title / tagline / CTA */}
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 0.5,
                    background: "linear-gradient(135deg, #00695C 0%, #439889 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {CONTENT.name}
                </Typography>
                <Typography
                  variant="h3"
                  color="text.secondary"
                  sx={{ mb: 2, fontWeight: 400 }}
                >
                  {CONTENT.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    maxWidth: 520,
                    mx: { xs: "auto", md: 0 },
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    borderLeft: { md: "3px solid" },
                    borderColor: { md: "primary.light" },
                    pl: { md: 2 },
                  }}
                >
                  {CONTENT.tagline}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleScrollToContact}
                  sx={{
                    px: 4,
                    borderRadius: "50px",
                    boxShadow: "0 4px 16px rgba(0,105,92,0.3)",
                    "&:hover": {
                      boxShadow: "0 6px 24px rgba(0,105,92,0.4)",
                      transform: "translateY(-1px)",
                    },
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  Get in Touch
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* ── Content below hero ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Biography */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography variant="h2" color="primary" gutterBottom>
            About me
          </Typography>
          <Typography variant="body1" color="text.primary">
            My name is Alexandra Harrison, and I am a second-year student in the
            School Counseling, M.Ed. program at Georgia State University. Prior to
            entering the program, I worked as a Board-Certified Psychiatric Mental
            Health Registered Nurse, primarily in residential child and adolescent
            mental health facilities. In this role, I collaborated with
            multidisciplinary teams to support and advocate for the medical,
            emotional, and developmental needs of children and adolescents. This
            experience sparked a passion for working with students and making a
            meaningful impact in their lives. I am committed to helping all
            students feel supported, empowered, and equipped to reach their full
            potential.
          </Typography>
        </Box>

        {/* Philosophy */}
        <Box>
          <Typography variant="h2" color="primary" gutterBottom>
            Counseling Philosophy
          </Typography>

          {/* Pull quote */}
          <Box
            component="blockquote"
            sx={{
              borderLeft: "4px solid",
              borderColor: "primary.main",
              pl: 3,
              py: 0.5,
              my: 3,
              mx: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "text.secondary",
              }}
            >
              "Every student deserves to be seen and valued as an individual with their own story."
            </Typography>
          </Box>

          <Typography variant="body1" color="text.primary" paragraph>
            As a future school counselor, I believe that every student is unique
            in their strengths, challenges, experiences, and needs. No two
            students require the exact same supports or services; rather, each
            student deserves to be seen and valued as an individual with their own
            story. My goal as a school counselor is to help foster an equitable,
            supportive, and nonjudgmental environment where all students feel safe
            to grow, learn, and succeed. I believe in using compassionate,
            person-centered approaches to support student growth and development
            while meeting their needs in an individualized manner.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            I also believe that children within the school building are much more
            than simply students. They each have responsibilities, passions,
            relationships, and experiences outside of school that shape who they
            are. One of my core values is supporting students in all domains of
            development, including academic, social/emotional, and career
            readiness. This requires taking the time to understand who students
            are beyond the classroom and what they value in their lives.
            Maintaining a holistic approach helps foster trusting relationships
            and allows for collaborative goal setting and meaningful support.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            I highly value collaboration and consultation with teachers,
            administrators, families, and community stakeholders. Working as a
            team helps create a more complete understanding of each student's
            strengths and challenges across settings. Open communication, cultural
            humility, and collaborative planning are essential to promoting
            positive student outcomes. Through these partnerships, I am committed
            to connecting students with the resources and supports they need to
            thrive.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Overall, my philosophy is to treat every student with dignity and
            respect while creating a safe, empowering, and inclusive environment.
            I believe all students have the ability to thrive when given access to
            the necessary supports, opportunities, and encouragement. As a school
            counselor, I will advocate for all students, help them recognize their
            strengths, build confidence in their abilities, and feel valued for
            who they are.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
