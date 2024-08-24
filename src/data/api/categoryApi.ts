// This file is just a placeholder for the Category API.
// Real logic of api hasn't been implemented as we weren't bringing data
// From a remote Datasource, This is the implementation of retrieving
// data from our local datasource that can't be dynamically changed as of now

// Delays added to simulate requests from the server

import { Category } from "@/types";
import categories from "../mock/categories.json";
import { ServerError } from "@/types";
import { injectable } from "inversify";

interface ICategoryLocalApi {
  getCategoryById(id: string): Promise<Category | ServerError>;
  getProjectCategories(projectId: string): Promise<Category[] | ServerError>;
}

@injectable()
class CategoryLocalApi implements ICategoryLocalApi {
  private categories: Category[];

  constructor() {
    this.categories = this.loadCategories();
  }

  private loadCategories = () => {
    return categories as Category[];
  };

  getCategoryById = async (id: string): Promise<Category | ServerError> => {
    const category = this.categories.filter(
      (category) => category.id === id
    )[0];

    if (category == undefined) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "Category not found", status: 404 } as ServerError;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return category;
  };

  getProjectCategories = async (
    projectId: string
  ): Promise<Category[] | ServerError> => {
    const categories = this.categories.filter(
      (category) => category.projectId === projectId
    );

    if (categories.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "No categories found", status: 404 } as ServerError;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return categories;
  };
}

export { CategoryLocalApi, type ICategoryLocalApi };
