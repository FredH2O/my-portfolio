import projects from "@/app/data/projects.json";
import Image from "next/image";
import KEYWORD_BG from "@/app/utils/keywordsColor.js";

const ProjectCard = () => {
  return (
    <div className="container relative z-20 grid h-auto gap-10 p-2 m-auto lg:p-10 to pt-26 xl:grid-cols-3 lg:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col p-3 space-y-3 bg-gray-700 border rounded border-slate-500"
        >
          <div className="flex justify-center lg:h-[300px] w-full">
            <Image
              src={project.image}
              className="object-contain border rounded lg:w-full bg-slate-800 border-slate-600"
              width={1000}
              height={500}
              alt={project.title}
            />
          </div>

          <div className="flex flex-col flex-1 p-3">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="flex-1 py-2 text-slate-400">{project.description}</p>
          </div>

          <div className="p-5 border rounded border-slate-500 bg-slate-600">
            <h2 className="font-extralight">Tech Stack</h2>
            <ul className="flex flex-wrap gap-1">
              {project.keywords.map((word, index) => (
                <li
                  className={`px-3 font-semibold text-sm italic py-0.5 border-2 rounded-lg border-slate-400 text-slate-900 ${KEYWORD_BG(
                    word
                  )}`}
                  key={index}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.url}
            className="self-end px-5 py-2 mt-5 transition-all ease-in-out border rounded hover:-translate-y-1 border-slate-500 bg-sky-500 hover:bg-sky-600"
            target="_blank"
          >
            Check it out
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
