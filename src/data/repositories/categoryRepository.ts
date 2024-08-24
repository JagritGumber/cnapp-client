import { ICategoryRepository } from "@/domain/repositories";
import { Category, ServerError } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
class CategoryRepository implements ICategoryRepository {
  constructor(
    @inject("ICategoryLocalApi") private categoryLocalApi: ICategoryRepository
  ) {}

  getCategoryById = async (id: string): Promise<Category | ServerError> => {
    const category = await this.categoryLocalApi.getCategoryById(id);
    return category;
  };

  getProjectCategories = async (
    projectId: string
  ): Promise<Category[] | ServerError> => {
    const categories = await this.categoryLocalApi.getProjectCategories(
      projectId
    );
    return categories;
  };
}

export { CategoryRepository };
