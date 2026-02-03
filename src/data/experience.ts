import { Experience } from '../types';

export const EXPERIENCE: Experience[] = [
  {
    id: 'E01',
    company: 'Acuity Inc',
    role: 'Technical Analyst',
    period: 'JUNE 2024 - PRESENT',
    type: 'FULL TIME',
    description: `Engineered a scalable microservices analytics platform using Java Spring Boot and React Typescript. 
    Implemented serverless MCP and RAG powered AI orchestration system to automate aspects of the SDLC and improve code quality.`,
    techStack: [
      'JAVA',
      'SPRING BOOT',
      'REACT',
      'TYPESCRIPT',
      'AWS',
      'GRAPHQL',
      'POSTGRES',
      'MCP',
      'RAG',
      'CHROME RUNTIME',
      'TERRAFORM',
      'GITHUB ACTIONS'
    ]
  },
  {
    id: 'C01',
    company: 'Kalo Inc',
    role: 'Full Stack Software Engineer',
    period: 'JAN 2025 - PRESENT',
    type: 'CONSULTANT',
    description: 'Engineered a centralized brand-influencer discovery and RSVP platform using Next.js. Architected serverless data pipelines via AWS Lambda to ingest and process asynchronous external API data for real-time analytics.',
    techStack: [
      'NEXT.JS',
      'REACT',
      'TYPESCRIPT',
      'PYTHON',
      'PRISMA',
      'POSTGRES',
      'AWS',
      'GITHUB ACTIONS'
    ],
    link: 'https://explore.joinkalo.com/'
  },
  {
    id: 'C02',
    company: 'Novodia Partners',
    role: 'Lead Full Stack Developer',
    period: 'APR 2025 - PRESENT',
    type: 'CONSULTANT',
    description: `Architected and deployed a full-stack shipping container logistics platform using React and FastAPI.
    Orchestrated scalable backend architectures leveraging n8n for workflow automation and AI document processing.`,
    techStack: [
      'FASTAPI',
      'PYTHON',
      'REACT',
      'TYPESCRIPT',
      'AWS',
      'N8N',
      'GITHUB ACTIONS'
    ]
  }
];
