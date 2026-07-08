"use client";

import projects from "@/app/data/projects.json";
import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = () => {
  const { selectProject } = useProject();

  return (
    <div
      className="
        mx-auto
        grid
        max-w-6xl
        gap-8
        px-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      <AnimatePresence>
        {projects.map((project, index) => (
          <Card
            key={project.title}
            project={project}
            index={index}
            onSelect={() => selectProject(project)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Card = ({ project, index, onSelect }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        shadow-lg
        backdrop-blur-sm
        transition-colors
        duration-300
        hover:border-slate-700
      "
    >
      {/* Mouse-tracking spotlight border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 163, 184, 0.08), transparent 40%)`,
        }}
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="
            object-cover
            grayscale-[20%]
            transition
            duration-700
            group-hover:scale-105
            group-hover:grayscale-0
          "
        />
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/10
            to-transparent
          "
        />

        {/* Index number */}
        <span
          className="
            absolute
            left-5
            top-5
            font-mono
            text-xs
            tracking-widest
            text-slate-300/70
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-h-[240px] flex-col p-6">
        <h2
          className="
            text-xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {project.title}
        </h2>

        <div className="mt-2 h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-12 group-hover:bg-slate-400" />

        <p
          className="
            mt-4
            flex-1
            text-[15px]
            leading-relaxed
            text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Button */}
        <button
          onClick={onSelect}
          className="
            mt-6
            flex
            w-fit
            items-center
            gap-2
            border-b
            border-transparent
            pb-1
            text-sm
            font-medium
            text-slate-200
            transition
            hover:border-slate-200
          "
        >
          View Case Study
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
