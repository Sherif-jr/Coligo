import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, useTheme } from "@mui/material";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          display: "block",
          flex: 1,
          pt: "80px",
          [theme.breakpoints.up("lg")]: {
            ml: "290px",
          },
        }}
      >
        <Box display="block" p={2}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
