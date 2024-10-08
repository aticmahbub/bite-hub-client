import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element:<Home/>
        },
        {
            path: '/ourMenu',
            element:<OurMenu/>
        },
      ]
    },
  ]);