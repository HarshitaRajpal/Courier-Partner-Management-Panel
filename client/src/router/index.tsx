import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import PartnersPage from "../pages/partners";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PartnersPage />,
      },
      {
        path: "partners",
        element: <PartnersPage />,
      },
    ],
  },
]);
