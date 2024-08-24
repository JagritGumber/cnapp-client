import { Category, WidgetKey } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { categoryExtraReducers } from "./categoryExtraReducers";

export interface CategoryState {
  loading: boolean;
  categories: Category[];
  error: string | null;
}

const initialState: CategoryState = {
  loading: false,
  categories: [],
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    createNewCategory: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        projectId: string;
      }>
    ) => {
      const category = {
        ...action.payload,
        id: uuidv4(),
        widgets: [] as WidgetKey[],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      state.categories.push(category);
    },
    editCategoryById: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
    },
    removeExistingCategoryById: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },

    toggleRenderOfWidget: (
      state,
      action: PayloadAction<{ categoryId: string; widgetId: string }>
    ) => {
      state.categories = state.categories.map((category) => {
        if (category.id == action.payload.categoryId) {
          return {
            ...category,
            widgets: category.widgets.map((widgetKey) => {
              if (widgetKey.widgetId == action.payload.widgetId) {
                return {
                  ...widgetKey,
                  render: !widgetKey.render,
                };
              }
              return widgetKey;
            }),
          };
        }
        return category;
      });
    },

    deleteWidgetKey: (
      state,
      action: PayloadAction<{ categoryId: string; widgetId: string }>
    ) => {
      const { categoryId, widgetId } = action.payload;
      state.categories = state.categories.map((category) => {
        if (category.id == categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widgetKey) => widgetKey.widgetId !== widgetId
            ),
          };
        }
        return category;
      });
    },

    addWidgetKey: (
      state,
      action: PayloadAction<{ categoryId: string; widgetId: string }>
    ) => {
      state.categories = state.categories.map((category) => {
        if (category.id == action.payload.categoryId) {
          return {
            ...category,
            widgets: [
              ...category.widgets,
              { widgetId: action.payload.widgetId, render: true },
            ],
          };
        }
        return category;
      });
    },
  },
  extraReducers: categoryExtraReducers,
});

export const {
  createNewCategory,
  editCategoryById,
  removeExistingCategoryById,
  toggleRenderOfWidget,
  deleteWidgetKey,
  addWidgetKey,
} = categorySlice.actions;
export default categorySlice.reducer;
