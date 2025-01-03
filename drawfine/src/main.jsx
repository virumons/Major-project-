import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboards/Dashboard.jsx'
import Workspace from './Dashboards/Workspace.jsx'
// import App from './Dashboards/App.jsx'
import Auth from './Auth/Auth.jsx'
import Temp from "./Dashboards/App.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/temp",
    element: <Temp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },

  
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
