import { getWidgetsByProjectIdUseCase } from "@/domain/useCases";
import { ServerError, Widget } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getWidgetsForProject = createAsyncThunk(
  "widget/getWidgetsForProject",
  async (projectId: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const widgetsOrError = await getWidgetsByProjectIdUseCase({
        projectId,
      });

      if ("status" in widgetsOrError) {
        return rejectWithValue(widgetsOrError as ServerError);
      }

      return fulfillWithValue(widgetsOrError as Widget[]);
    } catch (err) {
      return rejectWithValue({ message: err, status: 500 } as ServerError);
    }
  }
);

export { getWidgetsForProject };
