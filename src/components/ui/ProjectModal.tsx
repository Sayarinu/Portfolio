import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Project } from "../../types";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  const totalImages = project.imageCount || 3;
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-retro animate-scale-in",
          "bg-retro-surface border-4 border-retro-border",
          "scrollbar-retro",
        )}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b-2 bg-retro-surface/95 backdrop-blur border-retro-border">
          <div>
            <h2 className="text-xl font-retro sm:text-2xl text-retro-text dark:text-glow-gold">
              {project.title}
            </h2>
            <div className="text-xs font-mono opacity-70 text-retro-text">
              {project.year} // ID: {project.id}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 transition-colors hover:bg-retro-primary/20 text-retro-text"
          >
            <span className="text-2xl font-mono">×</span>
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="relative overflow-hidden bg-black/5 dark:bg-white/5 aspect-video border-2 border-retro-border">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-retro-text opacity-40">
              [ IMAGE SLIDESHOW: IMG_0{currentImageIndex + 1}.JPG ]
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevImage}
                className="w-10 h-10 flex items-center justify-center bg-retro-border text-retro-surface hover:opacity-90 shadow-retro-sm transition-all active:translate-y-0.5"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="w-10 h-10 flex items-center justify-center bg-retro-border text-retro-surface hover:opacity-90 shadow-retro-sm transition-all active:translate-y-0.5"
              >
                →
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {Array.from({ length: totalImages }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 transition-all",
                    i === currentImageIndex
                      ? "bg-retro-border scale-125"
                      : "bg-retro-border/30",
                  )}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-retro text-retro-text underline decoration-retro-primary decoration-2 underline-offset-4">
                OVERVIEW
              </h3>
              <p className="whitespace-pre-line font-mono leading-relaxed text-retro-text/90">
                {project.longDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-retro text-retro-text">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border font-mono bg-retro-primary/10 border-retro-border text-retro-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-retro text-retro-text">
                  LINKS
                </h3>
                <div className="flex flex-col gap-2">
                  {project.links?.demo && (
                    <Button
                      variant="retro"
                      size="sm"
                      className="w-full justify-center"
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </Button>
                  )}
                  {project.links?.repo && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center"
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOURCE CODE
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
