import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/domain/entities";
import { projectExtraReducers } from "./projectExtraReducers";

interface ProjectState {
  loading: boolean;
  projects: Project[];
  currentProject: Project | null;
  error: string | null;
}

const initialState: ProjectState = {
  loading: false,
  projects: [],
  currentProject: null,
  error: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: projectExtraReducers,
});

export type { ProjectState };

export default projectSlice.reducer;