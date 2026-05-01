import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function ProfessionalDevelopmentSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Typography variant="h2" color="primary" gutterBottom>
          Professional Development &amp; Reflection
        </Typography>

        {/* Self-Reflection Narrative */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Self-Reflection on Personal Growth
          </Typography>
          <Typography variant="body1" paragraph>
            Personal growth is something that I deem essential and never-ending
            in my role as a future school counselor. When I reflect on my growth
            from the beginning of this program to now, I see how immensely I
            have developed my skills in counseling, collaboration, and advocacy.
            Working with students, there will never be a time when I stop
            learning and growing in my skill set to become a better and more
            effective school counselor.
          </Typography>
          <Typography variant="body1" paragraph>
            One area where I have seen the most growth in myself is in my
            confidence with my counseling skills when working with students. My
            active listening skills have grown and developed, allowing me to
            foster spaces of support, empowerment, and empathy. I have grown
            immensely in my ability to let silence stand, understanding that not
            every second of silence must be filled for a session to be
            effective. Following a student’s story and ensuring they feel heard
            and supported is incredibly valuable when working with children.
          </Typography>
          <Typography variant="body1" paragraph>
            I have also grown in my ability to be flexible through my
            experiences working within the school building. As someone who
            values a detailed plan and schedule, I have had to adapt to become
            more flexible because of the fluid nature of the school environment.
            Through dealing with crises, individual sessions, and schedule
            changes, I have learned to embrace a more flexible and changing
            schedule that helps me to be most accessible for my students.
          </Typography>
          <Typography variant="body1" paragraph>
            Throughout my program and my practicum experience, I have also grown
            in my cultural humility. Working with students and families from
            diverse backgrounds has helped me to gain a better understanding of
            the nuances that exist between different cultural groups. This is an
            area in which I will never stop growing and developing, as there
            will never be a moment when I have mastered being truly culturally
            responsive. However, I will continue to develop my skills and seek
            further education and interactions that will broaden my perspective
            and understanding of other cultures and students from diverse
            backgrounds experience and navigate school.
          </Typography>
          <Typography variant="body1" paragraph>
            I will always value growth and development as a key aspect of my
            career as a school counselor. In a world that is always changing and
            evolving, I am committed to always remaining open and willing to
            learn how to best show up and support my students. I will continue
            to keep a curious mindset and respect the opportunities that I am
            provided to grow and learn.
          </Typography>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Future Career Goals */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Future Career Goals &amp; Professional Development Plan
          </Typography>
          <Typography variant="body1" paragraph>
            My long-term goal after graduating from this program is to become a
            high school counselor in Georgia. I have always had a passion for
            working with this age group and partnering with them to navigate
            personal challenges, continue to develop their identities, and
            establish goals for after high school. I hope to be a counselor who
            supports their growth and development, providing them with a safe
            space to navigate the challenges and triumphs of the high school
            experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Starting in the fall, I will begin my school counseling internship
            in a middle school setting. I hope this experience gives me the
            opportunity to strengthen my skills and build my confidence in
            navigating the complexities of this age group. I also look forward
            to further developing my skills in classroom management and lesson
            development through the facilitation of small groups and classroom
            lessons. I also hope to gain a better understanding of the role that
            data plays in the comprehensive school counseling program and use
            that knowledge to provide equitable and effective support that
            promotes positive outcomes for my students.
          </Typography>
          <Typography variant="body1" paragraph>
            Throughout my work as a mental health nurse, I have seen the
            positive impact that trauma-informed care can have on students. As a
            counseling student, I have found myself developing an orientation
            towards cognitive-behavior therapy (CBT) in my counseling identity.
            One of my professional goals is to continue developing my skillset
            in trauma-informed care and CBT to address the emotional and
            psychological needs of my students. I also hope to become a member
            of the crisis team in the county where I am employed, responding to
            crises that occur within the district. I believe that my skill set
            in mental health crisis management will make me a strong candidate
            for this role within my school district.
          </Typography>
          <Typography variant="body1" paragraph>
            Due to my own sociocultural background, I recognize there is still
            knowledge I need to develop to be an effective counselor. My desire
            for deep and meaningful connections as a helping professional will
            be hindered if I do not continue to learn about cultures that differ
            from my own. To achieve this, I will continuously work, during the
            remainder of my schooling and the rest of my career, to become more
            culturally responsive in my counseling identity. To work toward
            increased cultural responsiveness, I will engage in trainings,
            workshops, and continuing education to learn about the diverse
            cultures of my students. For my internship placement, I hope to be
            placed in a school that is diverse, both in student body and staff,
            so that I may continue to learn through experience and supervision.
            I will keep a reflective journal that will support my growth and
            self-awareness of my cultural responsiveness by highlighting what I
            learn, any barriers I experience, and any biases that present
            themselves through my work.
          </Typography>
          <Typography variant="body1" paragraph>
            As I grow, I aim to stay open to new learning and growth
            opportunities so that I continue to develop as a school counselor. I
            will remain intentional about ensuring that I grow with my students
            and always work to support them however I am able. I will continue
            to challenge myself in uncomfortable situations in order to grow and
            learn through the discomfort.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
