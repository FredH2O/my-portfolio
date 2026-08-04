"use client";

import FadeInSection from "@/components/animations/FadeInSection";
import MainProjectCard from "@/components/Project/MainProjectCard";
import ProjectCardContainer from "@/components/Project/ProjectCardsContainer";
import { ProjectProvider } from "../context/ProjectContext";
import { useState } from "react";

const filters = [
  "All",
  "React",
  "JavaScript",
  "Next.js",
  "WordPress",
  "Tailwind",
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

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
          <div className="mt-10 flex flex-wrap gap-3 flex-col">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-slate-600" />
              <p className="font-extralight text-xs text-slate-400 uppercase">
                Quick Filter
              </p>
            </div>

            <div className="flex flex-row gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className="
                  rounded-full
                  border
                  cursor-pointer
                  border-slate-700
                  px-3
                  py-1
                  text-xs
                  text-slate-300
                  hover:border-slate-500
                  hover:text-white
                  hover:bg-blue-500
                  transition-all
                  ease-in
                  duration-150
                "
                >
                  {filter}
                </button>
              ))}
            </div>
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

            <ProjectCardContainer selectedFilter={selectedFilter} />
          </div>
        </ProjectProvider>
      </section>
    </FadeInSection>
  );
};

export default Projects;
