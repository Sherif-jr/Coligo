import { lazy } from "react";
import Loadable from "../components/Loadable";
import { RouteObject } from "react-router-dom";
import MinimalLayout from "../components/layout/MinimalLayout";

const Home: React.ComponentType = Loadable(lazy(() => import("../views/Home")));

export const AuthRoutes: RouteObject = {
  path: "",
  element: <MinimalLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};
