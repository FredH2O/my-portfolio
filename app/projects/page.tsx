import FadeInSection from "@/components/animations/FadeInSection";
import MainProjectCard from "@/components/Project/MainProjectCard";
import ProjectCard from "@/components/Project/ProjectCard";
import { ProjectProvider } from "../context/ProjectContext";

const Projects = () => {
  return (
    <FadeInSection>
      {/* intro to projects */}
      <div className="container max-w-5xl px-3 pt-10 pb-20 m-auto">
        <h2 className="pb-3 text-3xl font-bold text-sky-400">
          My projects so far..
        </h2>
        <p className="font-light text-slate-300">
          Here is a collection of my recent work, where I focus on building
          innovative and user-friendly web solutions. Each project reflects my
          dedication to quality, design, and functionality. I continue to refine
          my skills and create impactful digital experiences with every new
          challenge.
        </p>
      </div>
      {/* projects section */}
      <ProjectProvider>
        <MainProjectCard />
        <ProjectCard />
      </ProjectProvider>
    </FadeInSection>
  );
};

export default Projects;
