import { MenuItem } from "../interfaces/MenuItem.interface";
import { Dashboard } from "@mui/icons-material";

const dashboard: MenuItem = {
  id: "dashboardGroup",
  title: "",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      url: "/dashboard",
      icon: Dashboard,
    },
  ],
};

export default dashboard;
