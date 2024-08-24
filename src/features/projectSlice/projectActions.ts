import {
  getAllUserProjectsUseCase,
  getProjectByIdUseCase,
} from "@/domain/useCases";
import { ServerError } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loadAllProjects = createAsyncThunk(
  "project/loadAllProjects",
  async (userId: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const projectsOrError = await getAllUserProjectsUseCase({ userId });

      if ((projectsOrError as ServerError).status) {
        return rejectWithValue(projectsOrError);
      }
      return fulfillWithValue(projectsOrError);
    } catch (err) {
      return rejectWithValue({ message: err, status: 500 } as ServerError);
    }
  }
);

const loadCurrentProject = createAsyncThunk(
  "project/loadCurrentProject",
  async (projectId: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const projectOrError = await getProjectByIdUseCase({ projectId });

      if ((projectOrError as ServerError).status) {
        return rejectWithValue(projectOrError);
      }
      return fulfillWithValue(projectOrError);
    } catch (err) {
      return rejectWithValue({ message: err, status: 500 } as ServerError);
    }
  }
);

export { loadAllProjects, loadCurrentProject };
