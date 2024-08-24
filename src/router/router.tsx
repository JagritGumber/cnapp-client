import { AppLayout } from "@/layouts";
import { Dashboard, Home, Landing, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
