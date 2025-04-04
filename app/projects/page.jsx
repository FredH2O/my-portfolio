import FadeInSection from "@/components/animations/FadeInSection";
import ProjectCard from "@/components/Project/ProjectCard";

const Projects = () => {
  return (
    <FadeInSection>
      <div className="container w-1/2 py-10 m-auto">
        <h2 className="text-3xl text-sky-500">My projects so far..</h2>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          reiciendis perspiciatis excepturi vero quaerat expedita ipsum nobis
          laborum veniam quis, ut tempora porro illum repudiandae quae
          consequuntur dolorum hic vitae.
        </p>
      </div>
      <ProjectCard />
    </FadeInSection>
  );
};

export default Projects;
