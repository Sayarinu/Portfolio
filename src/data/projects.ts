import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'PROJECT ALPHA',
    year: '2024',
    description: 'A revolutionary web application that transforms how users interact with data.',
    longDescription: `Project Alpha is a comprehensive data visualization platform designed to make complex datasets accessible and actionable. 
    
    By leveraging advanced rendering techniques, it handles millions of data points in real-time without compromising performance. The interface uses a node-based system allowing users to construct custom data pipelines visually.

    Key features include:
    - Real-time data processing
    - Customizable dashboard widgets
    - Export capabilities in multiple formats
    - Collaborative workspaces`,
    tags: ['REACT', 'TYPESCRIPT', 'WEBGL', 'NODE.JS'],
    links: { demo: '#', repo: '#' },
    imageCount: 4
  },
  {
    id: '002',
    title: 'PROJECT BETA',
    year: '2024',
    description: 'An innovative platform designed to streamline workflows and enhance productivity.',
    longDescription: `Project Beta focuses on team collaboration and workflow automation. It integrates with popular tools like Slack, Jira, and GitHub to create a unified command center for development teams.
    
    The platform uses machine learning to predict potential bottlenecks in the development lifecycle and suggests optimizations.`,
    tags: ['PYTHON', 'FASTAPI', 'POSTGRESQL', 'REDIS'],
    links: { demo: '#', repo: '#' },
    imageCount: 3
  },
  {
    id: '003',
    title: 'PROJECT GAMMA',
    year: '2023',
    description: 'A cutting-edge mobile application that brings powerful features to users on the go.',
    longDescription: `Project Gamma is a cross-platform mobile application built for field research. It allows researchers to collect, categorize, and sync data even in offline environments.
    
    The app features a robust offline-first architecture that automatically resolves conflicts when connectivity is restored.`,
    tags: ['REACT NATIVE', 'EXPO', 'FIREBASE', 'SQLITE'],
    links: { repo: '#' },
    imageCount: 5
  },
  {
    id: '004',
    title: 'PROJECT DELTA',
    year: '2023',
    description: 'An open-source tool that simplifies complex development workflows.',
    longDescription: `Project Delta is a CLI tool designed to scaffold microservices architectures in seconds. It provides best-practice templates for Go, Node.js, and Python services.
    
    With over 5k stars on GitHub, it has become a staple in many developer's toolkits for bootstrapping scalable systems.`,
    tags: ['GO', 'CLI', 'DOCKER', 'KUBERNETES'],
    links: { repo: '#' },
    imageCount: 2
  }
];
