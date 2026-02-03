export type ExperienceType = 'FULL TIME' | 'CONSULTANT';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: ExperienceType;
  description: string;
  techStack: string[];
  link?: string;
}
