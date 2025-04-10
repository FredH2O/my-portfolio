"use client";
import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";
import Keywords from "./Keywords";
import { X } from "lucide-react";
import { useEffect } from "react";

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

  if (!selectedProject)
    return (
      <p className="italic text-center">Click a project to view details.</p>
    );
  return (
    <div
      onClick={closeProject}
      className="fixed inset-0 z-50 flex h-auto overflow-y-auto bg-black/95"
    >
      <div className="container relative grid justify-center h-full gap-1 m-auto pt-15 lg:grid-cols-2 place-items-center">
        <div className="px-1">
          <Image
            className="object-contain border rounded lg:w-full w-md border-slate-600"
            src={selectedProject.image}
            width={800}
            height={800}
            alt={selectedProject.title}
          />
        </div>

        <div className="flex flex-col items-center justify-center p-3">
          <h2 className="py-3 text-3xl font-bold">{selectedProject.title}</h2>
          <p className="px-2 py-5 overflow-auto text-center text-slate-300 lg:text-left">
            {selectedProject.details.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Keywords selectedProject={selectedProject} />
          <a
            href={selectedProject.url}
            target="_blank"
            className="self-end p-3 mt-2 rounded bg-sky-500 hover:bg-sky-600"
          >
            Live Demo
          </a>
        </div>

        <X
          onClick={closeProject}
          size={35}
          className="absolute bg-red-500 rounded cursor-pointer xl:top-40 xl:right-5 lg:top-20 top-2 right-2"
        />
      </div>
    </div>
  );
};

export default MainProjectCard;
