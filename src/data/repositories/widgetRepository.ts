import { IWidgetRepository } from "@/domain/repositories";
import { inject, injectable } from "inversify";
import { IWidgetLocalApi } from "../api/widgetsApi";

@injectable()
class WidgetRepository implements IWidgetRepository {
  constructor(
    @inject("IWidgetLocalApi") private widgetLocalApi: IWidgetLocalApi
  ) {}

  getWidgetsByProjectId = async (projectId: string) => {
    const widget = await this.widgetLocalApi.getWidgetsForProject(projectId);
    return widget;
  };

  getWidgetById = async (id: string) => {
    const widget = await this.widgetLocalApi.getWidgetById(id);
    return widget;
  };
}

export { WidgetRepository };
