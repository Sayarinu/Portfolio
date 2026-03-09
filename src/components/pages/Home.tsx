import { useState } from "react";
import { Card } from "../ui/Card";
import { NavActions } from "../ui/NavActions";
import { ProjectModal } from "../ui/ProjectModal";
import { Section } from "../layout/Section";
import { cn } from "../../utils/cn";
import { Project } from "../../types";
import { useScrollTo } from "../../hooks/useScrollTo";
import { EXPERIENCE } from "../../data/experience";
import { PROJECTS } from "../../data/projects";
import { Link } from "../ui/Link";

export function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollTo = useScrollTo();

  const fullTimeExp = EXPERIENCE.filter((exp) => exp.type === "FULL TIME");
  const consultantExp = EXPERIENCE.filter((exp) => exp.type === "CONSULTANT");

  return (
    <div className="py-12 space-y-5">
      <Section className="relative py-8" delay="0.1s">
        <div className="space-y-8">
          <div className="absolute top-10 right-10 text-xs opacity-30 font-mono dark:text-gold-accent text-retro-accent">
            <div>H.00 / CC.2</div>
            <div className="mt-1">█████░░░</div>
          </div>

          <div
            className={cn(
              "font-retro text-5xl sm:text-6xl md:text-7xl mb-6",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
            CARTER GARCIA
          </div>

          <p
            className={cn(
              "font-mono text-lg sm:text-xl max-w-2xl",
              "text-retro-text/80 dark:text-gold-text/80",
            )}
          >
            Full Stack Software Engineer based in the Northeast.
          </p>
        </div>
      </Section>

      <Section delay="0.2s">
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={cn(
              "font-retro text-3xl",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
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
              I am a software engineer working on enterprise-scale and startup
              applications. I do consultant and contracting work for a variety
              of clients to help realize their ideas.
            </p>
            <p className="text-base leading-relaxed font-mono">
              Outside of my primary work, I enjoy building video games and am
              currently launching my own independent studio:{" "}
              <Link
                onClick={() => scrollTo("nouvelle-lune")}
              >
                Nouvelle Lune Atelier
              </Link>
              .
            </p>
          </Card>
        </div>
      </Section>

      <Section delay="0.2s">
        <NavActions className="pt-4" />
      </Section>

      <Section id="experience" delay="0.3s">
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={cn(
              "font-retro text-3xl",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
            EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
          <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
            EXP.01
          </span>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-retro-border/20 -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
            <div className="space-y-12">
              <h3 className="font-retro text-xl text-retro-primary dark:text-gold-accent flex items-center gap-2">
                <span className="text-xs opacity-50">///</span> FULL TIME
              </h3>
              <div className="space-y-8">
                {fullTimeExp.map((exp) => (
                  <Card
                    key={exp.id}
                    variant="retro"
                    className="min-h-[280px] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0 pr-2">
                          <h4 className="font-retro text-sm text-retro-text dark:text-gold-primary truncate">
                            {exp.company}
                          </h4>
                          <p className="font-mono text-xs opacity-70 truncate">
                            {exp.role}
                          </p>
                        </div>
                        <div className="flex flex-col items-end pt-1">
                          <span className="font-mono text-[10px] opacity-50 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="font-mono text-xs leading-relaxed opacity-80 line-clamp-4">
                        {exp.description}
                      </p>
                      {exp.link && (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit mt-2"
                        >
                          PREVIEW
                        </Link>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-1.5 py-0.5 border border-retro-border/30 rounded-sm opacity-60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="font-retro text-xl text-retro-primary dark:text-gold-accent flex items-center gap-2">
                <span className="text-xs opacity-50">///</span> CONSULTANT
              </h3>
              <div className="space-y-8">
                {consultantExp.map((exp) => (
                  <Card
                    key={exp.id}
                    variant="retro"
                    className="min-h-[280px] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0 pr-2">
                          <h4 className="font-retro text-sm text-retro-text dark:text-gold-primary truncate">
                            {exp.company}
                          </h4>
                          <p className="font-mono text-xs opacity-70 truncate">
                            {exp.role}
                          </p>
                        </div>
                        <div className="flex flex-col items-end pt-1">
                          <span className="font-mono text-[10px] opacity-50 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="font-mono text-xs leading-relaxed opacity-80 line-clamp-4">
                        {exp.description}
                      </p>
                      {exp.link && (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit mt-2"
                        >
                          PREVIEW
                        </Link>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-1.5 py-0.5 border border-retro-border/30 rounded-sm opacity-60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" delay="0.3s">
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={cn(
              "font-retro text-3xl",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
            PROJECTS
          </h2>
          <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
          <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
            H.01
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              variant="retro"
              hoverable
              className="min-h-[280px] flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-retro text-lg text-retro-text dark:text-gold-primary pr-2">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] opacity-60 whitespace-nowrap pt-1">
                    {project.year}
                  </span>
                </div>
                <p className="font-mono text-xs leading-relaxed opacity-80 line-clamp-4">
                  {project.description}
                </p>
              </div>
              <div className="space-y-4 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 border border-retro-border/30 rounded-sm opacity-60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2" onClick={(e) => e.stopPropagation()}>
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs opacity-80 underline underline-offset-4 hover:opacity-100 inline-flex items-center gap-1.5 text-retro-accent dark:text-gold-accent"
                    >
                      View Project
                      <svg className="w-3 h-3 shrink-0" aria-hidden fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs opacity-80 underline underline-offset-4 hover:opacity-100 inline-flex items-center gap-1.5 text-retro-accent dark:text-gold-accent"
                    >
                      View GitHub
                      <svg className="w-3 h-3 shrink-0" aria-hidden fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="nouvelle-lune" className="pb-20" delay="0.4s">
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={cn(
              "font-retro text-3xl",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
            NOUVELLE LUNE ATELIER
          </h2>
          <div className="flex-1 h-px bg-retro-border dark:bg-gold-border" />
          <span className="text-xs font-mono text-retro-text/50 dark:text-gold-text/50">
            M.01
          </span>
        </div>

        <Card variant="retro" className="border-dashed">
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-retro-accent dark:border-gold-accent flex items-center justify-center animate-spin-slow">
              <span className="font-retro text-2xl text-retro-accent dark:text-gold-accent">
                M
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-retro text-2xl text-retro-primary dark:text-gold-accent">
                STUDIO UNDER DEVELOPMENT
              </h3>
              <p className="font-mono text-base max-w-xl mx-auto opacity-80">
                A new independent game development is being established.
                Currently in the pre-production phase of our debut title. More
                Information to come.
              </p>
            </div>
            <div className="px-6 py-2 border border-retro-accent dark:border-gold-accent inline-block">
              <span className="font-retro text-xl text-retro-accent dark:text-gold-accent">
                COMING SOON
              </span>
            </div>
          </div>
        </Card>
      </Section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
