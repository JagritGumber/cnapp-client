interface WidgetKey {
  widgetId: string;
  render: boolean;
}

interface Category {
  id: string;
  name: string;
  description: string;
  projectId: string;
  widgets: WidgetKey[];
  createdAt: string;
  updatedAt: string;
}

export type { Category, WidgetKey };
