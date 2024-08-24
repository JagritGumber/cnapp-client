import { Category, IUseCase, ServerError } from "@/types";
import { inject, injectable } from "inversify";
import { ICategoryRepository } from "../repositories";
import { container } from "@/inversify.config";

interface GetAllProjectCategoriesUseCaseParams {
  projectId: string;
}

@injectable()
class GetAllProjectCategoriesUseCase
  implements IUseCase<Category[], GetAllProjectCategoriesUseCaseParams>
{
  constructor(
    @inject("ICategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({
    projectId,
  }: GetAllProjectCategoriesUseCaseParams): Promise<Category[] | ServerError> {
    return this.categoryRepository.getProjectCategories(projectId);
  }
}

const getAllProjectCategoriesUseCase = ({
  projectId,
}: GetAllProjectCategoriesUseCaseParams) => {
  return new GetAllProjectCategoriesUseCase(
    container.get("ICategoryRepository")
  ).execute({ projectId });
};

export {
  getAllProjectCategoriesUseCase,
  GetAllProjectCategoriesUseCase,
  type GetAllProjectCategoriesUseCaseParams,
};
