import { RouteObject } from "react-router-dom";
import Loadable from "../components/Loadable";
import { lazy } from "react";
import RequireAuth from "./requireAuth";
import MainLayout from "../components/layout/MainLayout";
const Dashboard: React.ComponentType = Loadable(
  lazy(() => import("../views/dashboard/Dashboard"))
);
const QuizPage: React.ComponentType = Loadable(
  lazy(() => import("../views/quiz/QuizPage"))
);
const AnnouncementPage: React.ComponentType = Loadable(
  lazy(() => import("../views/announcement/AnnouncementPage"))
);
const dashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  ),
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "quiz/all",
      element: <QuizPage />,
    },
    {
      path: "announcement/all",
      element: <AnnouncementPage />,
    },
  ],
};
export default dashboardRoutes;
