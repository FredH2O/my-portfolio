import FadeInSection from "@/components/animations/FadeInSection";
import projects from "@/app/data/projects.json";
import Image from "next/image";
import KEYWORD_BG from "@/app/utils/keywordsColor.js";

const Projects = () => {
  return (
    <FadeInSection>
      <div className="container relative z-20 grid h-auto gap-10 p-10 m-auto to pt-26 xl:grid-cols-3 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-3 space-y-3 bg-gray-700 border rounded border-slate-500"
          >
            <div className="flex justify-center w-full">
              <Image
                src={project.image}
                className="object-contain border rounded lg:w-full md:w-82 bg-slate-800 border-slate-600"
                width={500}
                height={250}
                alt={project.title}
              />
            </div>

            <div className="flex flex-col flex-1 p-3">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="flex-1 py-5 text-slate-400">
                {project.description}
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2">
                {project.keywords.map((word, index) => (
                  <li
                    className={`px-2 py-0.5 border rounded border-white text-black text-sm ${KEYWORD_BG(
                      word
                    )}`}
                    key={index}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
            <button className="self-end px-2 py-5 transition-all ease-in-out hover:-translate-y-1">
              <a
                href={project.url}
                className="p-2 rounded bg-sky-500 hover:bg-sky-600"
                target="_blank"
              >
                Check it out
              </a>
            </button>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
};

export default Projects;
