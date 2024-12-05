import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout component
    children: [
      {
        index: true, // This represents the default child route ("/")
        element: <Home />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
