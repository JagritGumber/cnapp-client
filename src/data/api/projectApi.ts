// This file is just a placeholder for the project API.
// Real logic of api hasn't been implemented as we weren't bringing data
// From a remote Datasource, This is the implementation of retrieving
// data from our local datasource that can't be dynamically changed as of now

// It has delays to simulate requests from the server

import { Project } from "@/domain/entities";
import projects from "../mock/projects.json";
import { ServerError } from "@/types";
import { injectable } from "inversify";

interface IProjectLocalApi {
  getUserProjects: (userId: string) => Promise<Project[] | ServerError>;
  getProjectById: (id: string) => Promise<Project | ServerError>;
}

@injectable()
class ProjectLocalApi implements IProjectLocalApi {
  private projects: Project[];
  constructor() {
    this.projects = this.loadProjects();
  }

  private loadProjects = () => {
    return projects as Project[];
  };

  getUserProjects = async (
    userId: string
  ): Promise<Project[] | ServerError> => {
    const projects = this.projects.filter(
      (project) => project.userId === userId
    );

    if (projects == undefined || projects.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "No project found", status: 404 } as ServerError;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return projects;
  };

  getProjectById = async (id: string): Promise<Project | ServerError> => {
    const project = this.projects.filter((project) => project.id === id)[0];

    if (project == undefined) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "Project not found", status: 404 } as ServerError;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return project;
  };
}

export { ProjectLocalApi, type IProjectLocalApi };
