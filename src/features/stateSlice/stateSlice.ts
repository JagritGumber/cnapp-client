import { Widget } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isManagingWidget: boolean;
  isWidgetForm: boolean;
  isConfirming: boolean;
  edittingWidget: Widget | null;
}

const initialState: AppState = {
  isManagingWidget: false,
  isWidgetForm: false,
  isConfirming: false,
  edittingWidget: null,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggleManagingWidget: (state) => {
      state.isManagingWidget = !state.isManagingWidget;
    },
    toggleWidgetForm: (state) => {
      state.isWidgetForm = !state.isWidgetForm;
    },
    toggleConfirming: (state) => {
      state.isConfirming = !state.isConfirming;
    },
    setEdittingWidget(state, action: PayloadAction<Widget>) {
      state.edittingWidget = action.payload;
    },
    clearEdittingWidget(state) {
      state.edittingWidget = null;
    },
  },
});

export const {
  toggleManagingWidget,
  toggleWidgetForm,
  toggleConfirming,
  setEdittingWidget,
  clearEdittingWidget,
} = stateSlice.actions;

export default stateSlice.reducer;
