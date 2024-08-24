import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ProjectState } from "./projectSlice";
import { loadAllProjects, loadCurrentProject } from "./projectActions";
import { Project } from "@/domain/entities";
import { ServerError } from "@/types";

const projectExtraReducers = (
  builder: ActionReducerMapBuilder<ProjectState>
) => {
  // Cases for loading All Projects
  builder.addCase(loadAllProjects.pending, (state) => {
    state.loading = true;
    state.projects = [];
  });
  builder.addCase(loadAllProjects.fulfilled, (state, action) => {
    state.loading = false;
    state.projects = action.payload as Project[];
  });
  builder.addCase(loadAllProjects.rejected, (state, action) => {
    state.loading = false;
    state.error = (action.payload as ServerError).message;
  });

  // Cases for loading Current Project
  builder.addCase(loadCurrentProject.pending, (state) => {
    state.loading = true;
    state.currentProject = null;
  });
  builder.addCase(loadCurrentProject.fulfilled, (state, action) => {
    state.loading = false;
    state.currentProject = action.payload as Project;
  });
  builder.addCase(loadCurrentProject.rejected, (state, action) => {
    state.loading = false;
    state.error = (action.payload as ServerError).message;
  });
};

export { projectExtraReducers };
