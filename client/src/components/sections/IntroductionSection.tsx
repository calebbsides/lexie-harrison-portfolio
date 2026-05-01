import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CONTENT = {
  name: "Alexandra Harrison",
  title: "School Counselor",
  headshotSrc: "/lexie-headshot.jpeg",
  headshotAlt: "Alexandra Harrison, School Counselor",
};

export default function IntroductionSection() {
  const [headshotVisible, setHeadshotVisible] = useState(true);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero + Headshot row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: 6 },
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
              width: { xs: 160, md: 220 },
              height: { xs: 160, md: 220 },
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              flexShrink: 0,
              border: "4px solid",
              borderColor: "primary.main",
            }}
          />
        )}

        {/* Name / title / tagline */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h1" color="primary" gutterBottom>
            {CONTENT.name}
          </Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            {CONTENT.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>

      {/* Biography */}
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
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
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Counseling Philosophy
        </Typography>
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
          team helps create a more complete understanding of each student’s
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
  );
}
