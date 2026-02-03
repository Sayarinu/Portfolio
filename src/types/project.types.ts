export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
  imageCount?: number;
}
