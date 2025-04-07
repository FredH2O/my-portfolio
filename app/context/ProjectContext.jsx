"use client";
import { createContext, useState, useContext } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const selectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider value={{ selectProject, selectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
