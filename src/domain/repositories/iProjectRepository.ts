import { ServerError } from "@/types";
import { Project } from "../entities";

interface IProjectRepository {
  getAllUserProjects: (userId: string) => Promise<Project[] | ServerError>;
  getProjectById: (id: string) => Promise<Project | ServerError>;
}

export type { IProjectRepository };
