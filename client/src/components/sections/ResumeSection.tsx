import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const RESUME = {
  name: 'Alexandra Harrison, M.Ed.',
  contact: 'alexandra.harrison@email.com  |  (555) 123-4567  |  Lorem Ipsum, LA',
  education: [
    {
      degree: 'Master of Education in School Counseling',
      institution: 'Lorem Ipsum University',
      year: '2023',
      details: 'GPA: 3.9/4.0 | CACREP-accredited program',
    },
    {
      degree: 'Bachelor of Science in Psychology',
      institution: 'Dolor Sit Amet College',
      year: '2020',
      details: 'Cum Laude',
    },
  ],
  experience: [
    {
      title: 'School Counseling Intern',
      organization: 'Lorem Ipsum Elementary School',
      dates: 'August 2022 – May 2023',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      ],
    },
    {
      title: 'Practicum Student Counselor',
      organization: 'Dolor Sit Amet Middle School',
      dates: 'January 2022 – May 2022',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
      ],
    },
    {
      title: 'Youth Program Coordinator',
      organization: 'Consectetur Community Center',
      dates: 'June 2020 – December 2021',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      ],
    },
  ],
  skills: [
    'Individual & Group Counseling',
    'Crisis Intervention',
    'ASCA National Model',
    'Trauma-Informed Practices',
    'Data-Driven Decision Making',
    'Microsoft Office & Google Workspace',
    'Culturally Responsive Counseling',
    'Family & Community Engagement',
  ],
};

const COVER_LETTER = {
  date: 'June 1, 2025',
  salutation: 'Dear Hiring Committee,',
  body: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
  ],
  closing: 'Sincerely,\nAlexandra Harrison, M.Ed.',
};

export default function ResumeSection() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Resume &amp; Cover Letter
      </Typography>

      {/* Download button */}
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="/resume.pdf"
          download
        >
          Download Resume (PDF)
        </Button>
      </Box>

      {/* Resume */}
      <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, mb: 5 }}>
        {/* Header */}
        <Typography variant="h3" align="center" gutterBottom>
          {RESUME.name}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
          {RESUME.contact}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Typography variant="h3" color="primary" gutterBottom>
          Education
        </Typography>
        {RESUME.education.map((edu) => (
          <Box key={edu.degree} sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {edu.degree}
            </Typography>
            <Typography variant="body1">
              {edu.institution} ({edu.year})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.details}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* Experience */}
        <Typography variant="h3" color="primary" gutterBottom>
          Professional Experience
        </Typography>
        {RESUME.experience.map((exp) => (
          <Box key={exp.title + exp.organization} sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {exp.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {exp.organization} | {exp.dates}
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 3 }}>
              {exp.responsibilities.map((r) => (
                <Typography key={r} component="li" variant="body1">
                  {r}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* Skills */}
        <Typography variant="h3" color="primary" gutterBottom>
          Skills
        </Typography>
        <Box component="ul" sx={{ pl: 3, columns: { xs: 1, sm: 2 } }}>
          {RESUME.skills.map((skill) => (
            <Typography key={skill} component="li" variant="body1">
              {skill}
            </Typography>
          ))}
        </Box>
      </Paper>

      {/* Cover Letter */}
      <Typography variant="h2" color="primary" gutterBottom>
        Cover Letter
      </Typography>
      <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="body1" gutterBottom>
          {COVER_LETTER.date}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          {COVER_LETTER.salutation}
        </Typography>
        {COVER_LETTER.body.map((paragraph, i) => (
          <Typography key={i} variant="body1" paragraph>
            {paragraph}
          </Typography>
        ))}
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mt: 2 }}>
          {COVER_LETTER.closing}
        </Typography>
      </Paper>
    </Container>
  );
}
