import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  widgetReducer,
  projectsReducer,
  categoryReducer,
  stateReducer,
} from "@/features";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: ["appState"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    category: categoryReducer,
    project: projectsReducer,
    widget: widgetReducer,
    appState: stateReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
