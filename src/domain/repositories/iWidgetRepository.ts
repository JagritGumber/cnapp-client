import { ServerError, Widget } from "@/types";

interface IWidgetRepository {
  getWidgetsByProjectId: (projectId: string) => Promise<Widget[] | ServerError>;
  getWidgetById: (id: string) => Promise<Widget | ServerError>;
}

export type { IWidgetRepository };
