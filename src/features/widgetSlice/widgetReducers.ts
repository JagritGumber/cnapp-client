import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { WidgetsState } from "./widgetSlice";
import { getWidgetsForProject } from "./widgetActions";
import { ServerError, Widget } from "@/types";

const widgetExtraReducers = (
  builder: ActionReducerMapBuilder<WidgetsState>
) => {
  builder.addCase(getWidgetsForProject.pending, (state) => {
    state.loading = true;
    state.widgets = [];
    state.error = null;
  });
  builder.addCase(getWidgetsForProject.fulfilled, (state, action) => {
    state.loading = false;
    state.widgets = action.payload as Widget[];
    state.error = null;
  });
  builder.addCase(getWidgetsForProject.rejected, (state, action) => {
    state.loading = false;
    state.widgets = [];
    state.error = (action.payload as ServerError).message;
  });
};
export default widgetExtraReducers;
