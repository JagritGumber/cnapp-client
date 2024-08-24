import { IUseCase, ServerError } from "@/types";
import { Project } from "../entities";
import { IProjectRepository } from "../repositories";
import { container } from "@/inversify.config";
import { inject, injectable } from "inversify";

interface GetAllUserProjectsUseCaseParams {
  userId: string;
}

@injectable()
class GetAllUserProjectsUseCase
  implements IUseCase<Project[], GetAllUserProjectsUseCaseParams>
{
  constructor(
    @inject("IProjectRepository") private projectRepository: IProjectRepository
  ) {
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
}: GetAllUserProjectsUseCaseParams) => {
  return new GetAllUserProjectsUseCase(
    container.get("IProjectRepository")
  ).execute({ userId });
};

export {
  getAllUserProjectsUseCase,
  GetAllUserProjectsUseCase,
  type GetAllUserProjectsUseCaseParams,
};
