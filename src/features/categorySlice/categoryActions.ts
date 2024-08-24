import { getAllProjectCategoriesUseCase } from "@/domain/useCases";
import { ServerError } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllProjectCategories = createAsyncThunk(
  "category/getAllProjectCategories",
  async (projectId: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const categoriesOrError = await getAllProjectCategoriesUseCase({
        projectId,
      });
      if ("status" in categoriesOrError) {
        return rejectWithValue(categoriesOrError);
      }
      return fulfillWithValue(categoriesOrError);
    } catch (err) {
      rejectWithValue({ message: err, status: 500 } as ServerError);
    }
  }
);

export { getAllProjectCategories };
