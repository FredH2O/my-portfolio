import FadeInSection from "@/components/animations/FadeInSection";
import MainProjectCard from "@/components/Project/MainProjectCard";
import ProjectCard from "@/components/Project/ProjectCard";
import { ProjectProvider } from "../context/ProjectContext";

const techStack = [
  "React",
  "Next.js",
  "WordPress",
  "PHP",
  "Tailwind",
  "JavaScript",
];

const Projects = () => {
  return (
    <FadeInSection>
      <section className="relative overflow-hidden py-24">
        {/* Subtle background texture instead of color glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_top,_rgba(148,163,184,0.06),_transparent_60%)]
          "
        />

        {/* Header */}
        <div className="relative mx-auto mb-20 max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-slate-600" />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Portfolio
            </p>
          </div>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Projects I&apos;ve built while
            <span className="text-slate-400"> learning and growing.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            A collection of projects built with React, Next.js, WordPress, and
            modern web technologies. Each project represents a challenge, a
            lesson, and another step forward in becoming a better developer.
          </p>

          {/* Tech stack tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-700
                  px-3
                  py-1
                  text-xs
                  text-slate-300
                  transition-colors
                  hover:border-slate-500
                  hover:text-white
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <ProjectProvider>
          <div className="relative mx-auto max-w-6xl px-6">
            {/* Featured project */}
            <div className="mb-16">
              <p className="mb-6 text-sm uppercase tracking-widest text-slate-500">
                Experience & Project
              </p>

              <MainProjectCard />
            </div>

            <ProjectCard />
          </div>
        </ProjectProvider>
      </section>
    </FadeInSection>
  );
};

export default Projects;
