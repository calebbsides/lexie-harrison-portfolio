export interface Credential {
  title: string;
  issuingOrganization: string;
  dateObtained: string; // ISO 8601 date string
  documentUrl?: string; // Optional link to certificate image/PDF
}

export interface Project {
  title: string;
  description: string;
  dateOrContext: string;
  category: 'lesson-plan' | 'research' | 'presentation' | 'workshop';
  attachmentUrl?: string;
}

export interface LeadershipActivity {
  organization: string;
  role: string;
  description: string;
  startDate?: string;
  endDate?: string;
}

export interface Artifact {
  title: string;
  type: 'reflection' | 'counseling-plan' | 'case-study';
  summary: string;
  // No identifying information — all PII removed before inclusion
}

export interface PracticumEntry {
  site: string;
  supervisor: string;
  hoursCompleted: number;
  primaryResponsibilities: string[];
  evaluationSummary?: string;
}

export interface ProfessionalDevelopment {
  title: string;
  provider: string;
  date: string;
  certificateUrl?: string;
}

export interface ContactInfo {
  email: string;
  serviceArea: string;
}
