interface CategoryKey {
  categoryId: string;
  order: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  userId: string;
  categories: CategoryKey[];
  createdAt: string;
  updatedAt: string;
}

export type { Project, CategoryKey };
