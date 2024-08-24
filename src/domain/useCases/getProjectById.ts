import { IUseCase, ServerError } from "@/types";
import { Project } from "../entities";
import { IProjectRepository } from "../repositories";
import { inject, injectable } from "inversify";
import { container } from "@/inversify.config";

interface GetProjectByIdUseCaseParams {
  projectId: string;
}

@injectable()
class GetProjectByIdUseCase
  implements IUseCase<Project, GetProjectByIdUseCaseParams>
{
  constructor(
    @inject("IProjectRepository") private projectRepository: IProjectRepository
  ) {
    this.projectRepository = projectRepository;
  }

  async execute({
    projectId,
  }: GetProjectByIdUseCaseParams): Promise<Project | ServerError> {
    const project = await this.projectRepository.getProjectById(projectId);
    return project;
  }
}

const getProjectByIdUseCase = ({ projectId }: GetProjectByIdUseCaseParams) => {
  return new GetProjectByIdUseCase(container.get("IProjectRepository")).execute(
    { projectId }
  );
};

export {
  getProjectByIdUseCase,
  GetProjectByIdUseCase,
  type GetProjectByIdUseCaseParams,
};
