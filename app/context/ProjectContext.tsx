"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type ProjectContextType = {
  selectedProject: Project | null;
  selectProject: (project: Project) => void;
  closeProject: () => void;
};

type Project = {
  title: string;
  description: string;
  details: string;
  url: string;
  image: string;
  keywords: string[];
};

type ChildrenProp = {
  children: ReactNode;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: ChildrenProp) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const selectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectContext.Provider
      value={{ closeProject, selectProject, selectedProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
