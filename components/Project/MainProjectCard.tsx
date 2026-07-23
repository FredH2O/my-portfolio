"use client";

import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";
import Keywords from "./Keywords";
import { X } from "lucide-react";
import { useEffect } from "react";

export type Project = {
  title: string;
  description: string;
  details: string;
  url: string;
  image: string;
  keywords: string[];
};

const MainProjectCard = () => {
  const { selectedProject, closeProject } = useProject();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  if (!selectedProject) {
    return null;
  }

  return (
    <div
      onClick={closeProject}
      className="
        fixed inset-0 z-50 
        flex items-start justify-center
        bg-black/80 
        backdrop-blur-md
        p-4 py-22
        overflow-y-auto
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-950
          shadow-2xl
          grid
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* Close Button */}
        <button
          onClick={closeProject}
          className="
            absolute
            right-4
            top-4
            z-10
            rounded-full
            bg-white/10
            p-2
            text-white
            backdrop-blur
            transition
            hover:bg-red-500
            cursor-pointer
          "
        >
          <X size={25} />
        </button>

        {/* Image Section */}
        <div
          className="
            relative
            min-h-[300px]
            lg:min-h-[600px]
          "
        >
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            fill
            className="
              object-contain
            "
          />
        </div>

        {/* Content Section */}
        <div
          className="
            flex
            flex-col
            justify-center
            gap-6
            p-8
            lg:p-10
          "
        >
          <div>
            <h2
              className="
                text-4xl
                font-bold
                text-white
                lg:text-5xl
              "
            >
              {selectedProject.title}
            </h2>

            <p
              className="
                mt-3
                text-slate-400
              "
            >
              {selectedProject.description}
            </p>
          </div>

          {/* Keywords */}
          <Keywords selectedProject={selectedProject} />

          {/* Details */}
          <div
            className="
              text-sm
              leading-7
              text-slate-300
              max-h-60
              overflow-y-auto
            "
          >
            {selectedProject.details
              .split("\n")
              .map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
          </div>

          {/* Button */}
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              w-fit
              rounded-full
              bg-sky-500
              px-7
              py-3
              font-medium
              text-white
              transition
              hover:bg-sky-400
            "
          >
            View Live Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainProjectCard;
