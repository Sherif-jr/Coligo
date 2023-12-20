import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  lighten,
  darken,
  Typography,
} from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import { useDispatch, useSelector } from "react-redux";
import { UIState, toggleSidebar } from "../../../../store/ui-slice";

const SidebarWrapper = styled(Box)(
  () => `
        width: 290px;
        min-width: 290px;
        color: ${alpha("#ffffff", 0.7)};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const sidebarToggle = useSelector(
    (state: { ui: UIState }) => state.ui.sildeBarOpen
  );
  console.log(sidebarToggle);

  const dispatch = useDispatch();
  const closeSidebar = () => dispatch(toggleSidebar());
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
          background:
            theme.palette.mode === "dark"
              ? alpha(lighten("#ffffff", 0.1), 0.5)
              : darken("#000000", 0.5),
          boxShadow:
            theme.palette.mode === "dark"
              ? "2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)"
              : "none",
        }}
      >
        <Box mt={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography display="inline" variant="h2">
              Coligo
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: theme.spacing(3),
            mx: theme.spacing(2),
            background: alpha("#ffffff", 0.1),
          }}
        />
        <SidebarMenu />

        <Divider
          sx={{
            background: alpha("#ffffff", 0.1),
          }}
        />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow:
            "2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)",
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === "dark"
                ? "#ffffff"
                : darken("#000000", 0.5),
          }}
        >
          <Box mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography display="inline" variant="h2">
                Coligo
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: alpha("#ffffff", 0.1),
            }}
          />
          <SidebarMenu />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
