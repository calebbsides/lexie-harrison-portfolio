import type { Project } from './types';

export const lessonPlan: Project = {
  title: 'Lesson Plan',
  description:
    'A structured lesson plan developed for classroom guidance curriculum delivery.',
  category: 'lesson-plan',
  attachmentUrl: '/projects-and-presentations/lesson-plan.pdf',
};

export const projects: Project[] = [
  {
    title: 'Career Theory for Nontraditional Learners',
    description:
      'An exploration of career development theories applied to nontraditional student populations.',
    category: 'research',
    attachmentUrl: '/projects-and-presentations/career-theory-nontraditional-learners.pdf',
  },
  {
    title: 'Developmental Presentation — High School',
    description:
      'A developmental counseling presentation designed for high school students.',
    category: 'presentation',
    attachmentUrl: '/projects-and-presentations/developmental-presentation-high-school.pdf',
  },
  {
    title: 'LGBTQ+ Group Presentation',
    description:
      'A group counseling presentation focused on supporting LGBTQ+ youth in school settings.',
    category: 'presentation',
    attachmentUrl: '/projects-and-presentations/lgbtq-group-presentation.pdf',
  },
];
