"use client";
import projects from "@/app/data/projects.json";
import Image from "next/image";
import { useProject } from "@/app/context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = () => {
  const { selectProject } = useProject();
  return (
    <div className="container relative z-20 grid h-auto gap-10 p-2 pt-5 m-auto lg:p-10 xl:grid-cols-3 lg:grid-cols-2">
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            key={project.title}
            className="flex flex-col p-3 space-y-3 transition-all duration-300 ease-in-out bg-gray-700 border rounded hover:bg-sky-900 hover:border-sky-800 border-slate-600"
          >
            <div className="flex justify-center w-full">
              <Image
                src={project.image}
                className="object-contain rounded lg:w-full bg-slate-800"
                width={1000}
                height={500}
                alt={project.title}
              />
            </div>

            <div className="flex flex-col flex-1 p-3 text-slate-300">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="flex-1 py-2">{project.description}</p>
            </div>

            <button
              className="self-end px-5 py-2 mt-5 transition-all ease-in-out border rounded cursor-pointer hover:-translate-y-1 border-slate-500 bg-sky-500 hover:bg-sky-600 hover:text-slate-100"
              onClick={() => selectProject(project)}
            >
              Case Study
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
