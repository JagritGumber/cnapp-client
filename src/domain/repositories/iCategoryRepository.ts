import { Category, ServerError } from "@/types";

interface ICategoryRepository {
  getCategoryById(id: string): Promise<Category | ServerError>;
  getProjectCategories(projectId: string): Promise<Category[] | ServerError>;
}

export type { ICategoryRepository };
