import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routeList from './routeList';

const router = createBrowserRouter(routeList);

const RouterRoot = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default RouterRoot;