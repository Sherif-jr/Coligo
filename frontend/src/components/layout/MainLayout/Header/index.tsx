import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Badge,
  Input,
} from "@mui/material";
import HeaderUserbox from "./Userbox";
import { useDispatch, useSelector } from "react-redux";
import {
  UIState,
  toggleSidebar as toggleSide,
} from "../../../../store/ui-slice";
import { LangState, changeLang } from "../../../../store/lang-Slice";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: 80px;
        color: #5569ff;
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha("#ffffff", 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: 290px;
            width: auto;
        }
`
);

function Header() {
  const sidebarToggle = useSelector(
    (state: { ui: UIState }) => state.ui.sildeBarOpen
  );
  const lang = useSelector(
    (state: { root: { lang: LangState } }) => state.root.lang.lang
  );
  const dispatch = useDispatch();
  const toggleSidebar = () => dispatch(toggleSide());
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      gap={2}
      sx={{
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 1px 0 ${alpha(
                lighten("#5569ff", 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                "#000000",
                0.2
              )}, 0px 5px 22px -4px ${alpha("#000000", 0.1)}`,
      }}
    >
      <Stack direction="row" alignItems="center">
        <div className="relative">
          <FormControl size="small">
            <InputLabel id="lang">language</InputLabel>
            <Select
              label="language"
              labelId="lang"
              value={lang}
              onChange={(e) => {
                dispatch(changeLang(e.target.value as LangState["lang"]));
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Stack>
      <Box display="flex" alignItems="center">
        <FormControl
          variant="outlined"
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
          <Input placeholder="Search" startAdornment={<SearchTwoToneIcon />} />
        </FormControl>
        <IconButton>
          <Badge badgeContent={1} color="secondary">
            <NotificationsTwoToneIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={3} color="secondary">
            <EmailTwoToneIcon />
          </Badge>
        </IconButton>
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: "none", xs: "inline-block" },
          }}
        >
          {/* Moblie Menu Button */}
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
