// This file is just a placeholder for the project API.
// Real logic of api hasn't been implemented as we weren't bringing data
// From a remote Datasource, This is the implementation of retrieving
// data from our local datasource that can't be dynamically changed as of now

import { Project } from "@/domain/entities";
import projects from "../mock/projects.json";
import { ServerError } from "@/types";

interface IProjectLocalApi {
  getUserProjects: (userId: string) => Promise<Project[] | ServerError>;
  getProjectById: (id: string) => Promise<Project | ServerError>;
}

class ProjectLocalApi implements IProjectLocalApi {
  private projects: Project[];
  constructor() {
    this.projects = ProjectLocalApi.loadProjects();
  }

  static loadProjects = () => {
    const projectData = projects;
    return projectData;
  };

  getUserProjects = async (
    userId: string
  ): Promise<Project[] | ServerError> => {
    const projects = this.projects.filter(
      (project) => project.userId === userId
    );

    if (projects == undefined || projects.length === 0) {
      return { message: "No project found", status: 404 } as ServerError;
    }

    return projects;
  };

  getProjectById = async (id: string): Promise<Project | ServerError> => {
    const project = this.projects.filter((project) => project.id === id)[0];

    if (project == undefined) {
      return { message: "Project not found", status: 404 } as ServerError;
    }

    return project;
  };
}

export { ProjectLocalApi, type IProjectLocalApi };
