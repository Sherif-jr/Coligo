import { createBrowserRouter } from "react-router-dom";
import dashboardRoutes from "./dashboardRoutes";
import { AuthRoutes } from "./authRoutes";

const router = createBrowserRouter([AuthRoutes,dashboardRoutes]);

export default router;
