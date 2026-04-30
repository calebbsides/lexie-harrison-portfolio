import type { Project } from './types';

export const lessonPlan: Project = {
  title: 'Lesson Plan',
  description:
    'A structured lesson plan developed for classroom guidance curriculum delivery.',
  dateOrContext: 'Spring 2023',
  category: 'lesson-plan',
  attachmentUrl: '/projects-and-presentations/Lesson Plan.pdf',
};

export const projects: Project[] = [
  {
    title: 'Career Theory for Nontraditional Learners',
    description:
      'An exploration of career development theories applied to nontraditional student populations.',
    dateOrContext: 'Spring 2023',
    category: 'research',
    attachmentUrl: '/projects-and-presentations/Career Theory Nontraditional Learners.pdf',
  },
  {
    title: 'Developmental Presentation — High School',
    description:
      'A developmental counseling presentation designed for high school students.',
    dateOrContext: 'Fall 2022',
    category: 'presentation',
    attachmentUrl: '/projects-and-presentations/Developmental Presentation - High School.pdf',
  },
  {
    title: 'LGBTQ+ Group Presentation',
    description:
      'A group counseling presentation focused on supporting LGBTQ+ youth in school settings.',
    dateOrContext: 'October 2023',
    category: 'presentation',
    attachmentUrl: '/projects-and-presentations/LGBTQ+ Group Presentation.pdf',
  },
];
