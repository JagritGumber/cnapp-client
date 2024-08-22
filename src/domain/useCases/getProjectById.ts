import { IUseCase, ServerError } from "@/types";
import { Project } from "../entities";
import { IProjectRepository } from "../repositories";

interface GetProjectByIdUseCaseParams {
  userId: string;
}

class GetProjectByIdUseCase
  implements IUseCase<Project, GetProjectByIdUseCaseParams>
{
  private projectRepository: IProjectRepository;
  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute({
    userId,
  }: GetProjectByIdUseCaseParams): Promise<Project | ServerError> {
    const project = await this.projectRepository.getProjectById(userId);
    return project;
  }
}

const getProjectByIdUseCase = ({
  userId,
  projectRepository,
}: GetProjectByIdUseCaseParams & { projectRepository: IProjectRepository }) => {
  return new GetProjectByIdUseCase(projectRepository).execute({ userId });
};

export { getProjectByIdUseCase, type GetProjectByIdUseCaseParams };
