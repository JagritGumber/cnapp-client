import { DashboardLayout } from "@/layouts";
import Apploader from "@/loaders/appLoader";
import { Dashboard } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/app",
    element: <DashboardLayout />,
    loader: Apploader,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
