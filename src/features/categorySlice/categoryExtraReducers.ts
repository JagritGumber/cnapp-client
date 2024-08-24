import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "./categorySlice";
import { getAllProjectCategories } from "./categoryActions";
import { Category, ServerError } from "@/types";

const categoryExtraReducers = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  // Cases for loading all project categories
  builder.addCase(getAllProjectCategories.pending, (state) => {
    state.loading = true;
    state.categories = [];
    state.error = null;
  });
  builder.addCase(getAllProjectCategories.fulfilled, (state, action) => {
    state.loading = false;
    state.categories = action.payload as Category[];
    state.error = null;
  });
  builder.addCase(getAllProjectCategories.rejected, (state, action) => {
    state.loading = false;
    state.categories = [];
    state.error = (action.payload as ServerError).message;
  });
};

export { categoryExtraReducers };
