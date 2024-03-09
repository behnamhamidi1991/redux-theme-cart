import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
