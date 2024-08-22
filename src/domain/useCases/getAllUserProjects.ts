import { IUseCase, ServerError } from "@/types";
import { Project } from "../entities";
import { IProjectRepository } from "../repositories";

interface GetAllUserProjectsUseCaseParams {
  userId: string;
}

class GetAllUserProjectsUseCase
  implements IUseCase<Project[], GetAllUserProjectsUseCaseParams>
{
  private projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute({
    userId,
  }: GetAllUserProjectsUseCaseParams): Promise<Project[] | ServerError> {
    const projects = this.projectRepository.getAllUserProjects(userId);
    return projects;
  }
}

const getAllUserProjectsUseCase = ({
  userId,
  projectRepository,
}: GetAllUserProjectsUseCaseParams & {
  projectRepository: IProjectRepository;
}) => {
  return new GetAllUserProjectsUseCase(projectRepository).execute({ userId });
};

export { getAllUserProjectsUseCase, type GetAllUserProjectsUseCaseParams };
