import { IProjectRepository } from "@/domain/repositories";
import { ServerError } from "@/types";
import { Project } from "@/domain/entities";
import { IProjectLocalApi } from "../api";
import { inject, injectable } from "inversify";

@injectable()
class ProjectRepository implements IProjectRepository {
  constructor(
    @inject("IProjectLocalApi") private projectLocalApi: IProjectLocalApi
  ) {}

  async getAllUserProjects(userId: string): Promise<Project[] | ServerError> {
    const projects = await this.projectLocalApi.getUserProjects(userId);
    return projects;
  }
  async getProjectById(id: string): Promise<Project | ServerError> {
    const project = await this.projectLocalApi.getProjectById(id);
    return project;
  }
}

export { ProjectRepository };
