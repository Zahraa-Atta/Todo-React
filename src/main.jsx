import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import About from './about.jsx'


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/about",
    element: <About />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
