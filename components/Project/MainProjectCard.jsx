"use client";
import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";
import Keywords from "./Keywords";

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

  if (!selectedProject) return <p>Select a project to view details.</p>;
  return (
    <div className="fixed inset-0 z-50 flex h-full overflow-y-auto">
      <div
        onClick={closeProject}
        className="absolute inset-0 bg-black opacity-90 -z-10"
      ></div>

      <div className="container relative grid justify-center h-full gap-1 pt-10 m-auto lg:grid-cols-2 place-items-center">
        <Image
          className="object-contain border-2 rounded lg:w-full w-md border-slate-600"
          src={selectedProject.image}
          width={800}
          height={800}
          alt={selectedProject.title}
        />

        <div className="flex flex-col items-center justify-center p-3 border border-white">
          <h2 className="py-3 text-3xl">{selectedProject.title}</h2>
          <p className="text-center lg:text-left">{selectedProject.details}</p>
          <Keywords selectedProject={selectedProject} />
          <a
            href={selectedProject.url}
            target="_blank"
            className="self-end p-3 mt-2 rounded bg-sky-500 hover:bg-sky-600"
          >
            Check it out!
          </a>
        </div>

        <button
          onClick={closeProject}
          className="absolute px-2 font-bold bg-red-500 border rounded cursor-pointer top-2 right-2"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default MainProjectCard;
