// This file is just a placeholder for the Widgets API.
// Real logic of api hasn't been implemented as we weren't bringing data
// From a remote Datasource, This is the implementation of retrieving
// data from our local datasource that can't be dynamically changed as of now

import { ServerError, Widget } from "@/types";
import { injectable } from "inversify";
import widgetsData from "../mock/widgets.json";

// Delays added to simulate requests from the server

interface IWidgetLocalApi {
  getWidgetsForProject: (projectId: string) => Promise<Widget[] | ServerError>;
  getWidgetById: (id: string) => Promise<Widget | ServerError>;
}

@injectable()
class WidgetLocalApi implements IWidgetLocalApi {
  private widgets: Widget[];

  constructor() {
    this.widgets = this.loadWidgets();
  }

  private loadWidgets() {
    return widgetsData as Widget[];
  }

  getWidgetsForProject = async (projectId: string) => {
    const widgets = this.widgets.filter(
      (widget) => widget.projectId === projectId
    );
    if (widgets.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "No widget found", status: 404 } as ServerError;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return widgets;
  };
  getWidgetById = async (id: string) => {
    const widget = this.widgets.filter((widget) => widget.id === id)[0];

    if (widget == undefined) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "Widget not found", status: 404 } as ServerError;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return widget;
  };
}

export { WidgetLocalApi, type IWidgetLocalApi };
