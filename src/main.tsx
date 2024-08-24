import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
