export {
  widgetReducer,
  getWidgetsForProject,
  deleteWidget,
  addNewWidget,
  updateWidget,
} from "./widgetSlice";
export {
  categoryReducer,
  getAllProjectCategories,
  toggleRenderOfWidget,
  deleteWidgetKey,
  addWidgetKey,
} from "./categorySlice";
export {
  projectsReducer,
  loadAllProjects,
  loadCurrentProject,
} from "./projectSlice";

export {
  stateReducer,
  toggleManagingWidget,
  toggleWidgetForm,
  toggleConfirming,
  setEdittingWidget,
  clearEdittingWidget,
} from "./stateSlice";
