import React from "react";
import ReactDOM from "react-dom/client";
import Home from './views/home/Home.jsx';
import App from './views/App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataBase } from './mock/products.mock.js';
import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home data={ DataBase }/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)