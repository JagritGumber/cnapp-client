import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import widgetExtraReducers from "./widgetReducers";
import { Data, Widget } from "@/types";

export interface WidgetsState {
  widgets: Widget[];
  loading: boolean;
  error: string | null;
}

const initialState: WidgetsState = {
  widgets: [],
  loading: false,
  error: null,
};

export const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addNewWidget: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        categoryId: string;
        projectId: string;
        data: Data[];
        type: "pie" | "bar" | "line";
      }>
    ) => {
      const widget = {
        ...action.payload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.widgets.push(widget);
    },
    deleteWidget: (state, action: PayloadAction<string>) => {
      const widgetId = action.payload;
      state.widgets = state.widgets.filter((widget) => widget.id !== widgetId);
    },
    updateWidget: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        categoryId: string;
        projectId: string;
        data: Data[];
        type: "pie" | "bar" | "line";
      }>
    ) => {
      state.widgets = state.widgets.map((widget) => {
        if (widget.id === action.payload.id) {
          return {
            ...widget,
            ...action.payload,
          };
        }
        return widget;
      });
    },
  },
  extraReducers: widgetExtraReducers,
});

// Action creators are generated for each case reducer function
export const { deleteWidget, addNewWidget, updateWidget } =
  widgetsSlice.actions;

export default widgetsSlice.reducer;
