import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout"; // มี Navbar

import InputPage from "./pages/InputPage";
import DisplayPage from "./pages/DisplayPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <InputPage /> },
      { path: "displaypage", element: <DisplayPage /> },
    ],
  },
]);
