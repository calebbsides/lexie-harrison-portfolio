import type { PracticumEntry } from './types';

export const practicumEntries: PracticumEntry[] = [
  {
    site: 'Shallowford Falls Elementary',
    supervisor: 'Site Supervisor, M.Ed., LPC',
    hoursCompleted: 300,
    primaryResponsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      'Duis aute irure dolor in reprehenderit in voluptate velit',
      'Excepteur sint occaecat cupidatat non proident deserunt',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    ],
    evaluationSummary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pdfUrl: '/practicum/eval.pdf',
    pdfLabel: 'Supervisor Evaluation',
  },
  {
    site: 'Georgia State University',
    supervisor: 'Site Supervisor, Ed.S., NCSP',
    hoursCompleted: 100,
    primaryResponsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Duis aute irure dolor in reprehenderit in voluptate velit',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    ],
    pdfUrl: '/practicum/timesheet-5.pdf',
    pdfLabel: 'Timesheet',
  },
];
