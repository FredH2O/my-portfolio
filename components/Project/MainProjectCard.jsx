"use client";
import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";

const MainProjectCard = () => {
  const { selectedProject } = useProject();

  if (!selectedProject) return <p>Select a project to view details.</p>;
  return (
    <div className="flex items-center justify-center gap-3 p-1">
      <Image
        className="object-contain border-2 rounded border-slate-600"
        src={selectedProject.image}
        width={1000}
        height={1000}
        alt={selectedProject.title}
      />
      <div className="flex flex-col items-center justify-center p-3 border border-white">
        <h2 className="py-3 text-3xl">{selectedProject.title}</h2>
        <p className="w-[500px] text-left">{selectedProject.details}</p>
        <a
          href={selectedProject.url}
          target="_blank"
          className="self-end p-3 mt-2 rounded bg-sky-500 hover:bg-sky-600"
        >
          Check it out!
        </a>
      </div>
    </div>
  );
};

export default MainProjectCard;
