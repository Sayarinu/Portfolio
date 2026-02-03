import { useState } from "react";
import { Card } from "../ui/Card";
import { NavActions } from "../ui/NavActions";
import { ProjectModal } from "../ui/ProjectModal";
import { Section } from "../layout/Section";
import { cn } from "../../utils/cn";
import { Project } from "../../types";
import { useScrollTo } from "../../hooks/useScrollTo";
import { EXPERIENCE } from "../../data/experience";
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
                onClick={() => scrollTo("moonfall")}
              >
                Moonfall Studios
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

        <Card variant="retro" className="border-dashed">
          <div className="py-20 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h3 className="font-retro text-3xl text-retro-accent dark:text-gold-accent">
                COMING SOON
              </h3>
              <p className="font-mono text-base max-w-lg mx-auto opacity-70 leading-relaxed text-balance">
                The project index is currently being synchronized and updated.
                Full portfolio visualization will be available shortly.
              </p>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-retro-accent/20 dark:bg-gold-accent/20"
                />
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <Section id="moonfall" className="pb-20" delay="0.4s">
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={cn(
              "font-retro text-3xl",
              "text-retro-text dark:text-gold-primary",
              "text-shadow-retro dark:text-glow-gold",
            )}
          >
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
