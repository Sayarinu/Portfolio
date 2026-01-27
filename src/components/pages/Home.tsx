import { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProjectModal } from '../ui/ProjectModal';
import { cn } from '../../utils/cn';
import { Project } from '../../types';

const PROJECTS: Project[] = [
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

export function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-12 space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 animate-tech-slide" style={{ animationDelay: '0.1s' }}>
        <Container>
          <div className="space-y-8">
            {/* Decorative UI Elements */}
            <div className="absolute top-10 right-10 text-xs opacity-30 font-mono dark:text-gold-accent text-retro-accent">
              <div>H.00 / CC.2</div>
              <div className="mt-1">█████░░░</div>
            </div>
            
            <div className={cn(
              'font-retro text-5xl sm:text-6xl md:text-7xl mb-6',
              'text-retro-text dark:text-gold-primary',
              'text-shadow-retro dark:text-glow-gold'
            )}>
              CARTER / SAYARIN
              <br />
              <span className="text-4xl text-retro-accent dark:text-gold-accent sm:text-5xl md:text-6xl">
                SWE / GAME DEVELOPER
              </span>
            </div>
            
            <p className={cn(
              'font-mono text-lg sm:text-xl max-w-2xl',
              'text-retro-text/80 dark:text-gold-text/80'
            )}>
              Building digital experiences at the intersection of creativity and technology
            </p>
            
            <div className="pt-4 flex gap-4">
              <Button 
                variant="retro" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                VIEW PROJECTS
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="animate-tech-slide" style={{ animationDelay: '0.2s' }}>
        <Container>
          <div className="mb-8 flex items-center gap-4">
            <h2 className={cn(
              'font-retro text-3xl',
              'text-retro-text dark:text-gold-primary',
              'text-shadow-retro dark:text-glow-gold'
            )}>
              ABOUT
            </h2>
            <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
            <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
              E.01
            </span>
          </div>
          
          <div className="max-w-3xl">
            <Card variant="retro">
              <p className="mb-4 text-base leading-relaxed font-mono">
                I'm a software engineer passionate about building technical solutions for complex problems. 
                I specialize in full-stack development for both enterprise systems and startup environments.
              </p>
              <p className="text-base leading-relaxed font-mono">
                Outside of my primary work, I enjoy building video games and am currently 
                launching my own independent studio:{' '}
                <button 
                  onClick={() => document.getElementById('moonfall')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-retro-accent dark:text-gold-accent hover:underline decoration-retro-accent/30 dark:decoration-gold-accent/30 underline-offset-4"
                >
                  Moonfall Studios
                </button>.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="animate-tech-slide" style={{ animationDelay: '0.3s' }}>
        <Container>
          <div className="mb-8 flex items-center gap-4">
            <h2 className={cn(
              'font-retro text-3xl',
              'text-retro-text dark:text-gold-primary',
              'text-shadow-retro dark:text-glow-gold'
            )}>
              PROJECTS
            </h2>
            <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
            <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
              H.01
            </span>
          </div>
          
          <div className="relative">
            {/* Projects Grid - Hidden for now */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 opacity-5 pointer-events-none select-none filter blur-sm">
              {PROJECTS.map((project) => (
                <div key={project.id}>
                  <Card variant="retro" className="h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-retro text-retro-primary dark:text-gold-accent">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed font-mono line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Card variant="retro" className="bg-retro-surface/90 dark:bg-gold-surface/90 backdrop-blur-sm border-dashed">
                <div className="text-center space-y-4 py-8 px-12">
                  <h3 className="font-retro text-2xl text-retro-accent dark:text-gold-accent animate-pulse">
                    COMING SOON
                  </h3>
                  <p className="font-mono text-sm opacity-70">
                    Project index is currently being updated.
                    <br />
                    Check back soon for the full portfolio.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Moonfall Studios Section */}
      <section id="moonfall" className="animate-tech-slide pb-20" style={{ animationDelay: '0.4s' }}>
        <Container>
          <div className="mb-8 flex items-center gap-4">
            <h2 className={cn(
              'font-retro text-3xl',
              'text-retro-text dark:text-gold-primary',
              'text-shadow-retro dark:text-glow-gold'
            )}>
              MOONFALL STUDIOS
            </h2>
            <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
            <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
              M.01
            </span>
          </div>
          
          <Card variant="retro" className="border-dashed">
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-retro-accent dark:border-gold-accent flex items-center justify-center animate-spin-slow">
                <span className="font-retro text-2xl text-retro-accent dark:text-gold-accent">M</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-retro text-2xl text-retro-primary dark:text-gold-accent">
                  STUDIO UNDER DEVELOPMENT
                </h3>
                <p className="font-mono text-base max-w-xl mx-auto opacity-80">
                  A new independent game development is being established. 
                  Currently in the pre-production phase of our debut title.
                  More Information to come.
                </p>
              </div>
              <div className="px-6 py-2 border border-retro-accent dark:border-gold-accent inline-block">
                <span className="font-retro text-xl text-retro-accent dark:text-gold-accent animate-pulse">
                  COMING SOON
                </span>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
