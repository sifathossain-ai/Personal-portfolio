import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
