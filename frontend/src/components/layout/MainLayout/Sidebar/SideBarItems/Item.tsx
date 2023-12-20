import { Button, ListItem } from "@mui/material";
import { MenuItem } from "../../../../../interfaces/MenuItem.interface";
import { NavLink } from "react-router-dom";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../../../store/ui-slice";

interface Item {
  item: MenuItem;
}

const Item: React.FC<React.PropsWithChildren<Item>> = ({ item }) => {
  const dispatch = useDispatch();
  const closeSidebar = () => () => dispatch(toggleSidebar());

  return (
    <ListItem component="div">
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "white !important",
            color: "black !important",
          },
        }}
        className="group"
        disableRipple
        component={NavLink as React.ElementType}
        onClick={closeSidebar}
        to={item.url}
        startIcon={item.icon ? <item.icon /> : <WidgetsTwoToneIcon />}
        classes={{ startIcon: "group-hover:text-[black!important]" }}
      >
        {item.title}
      </Button>
    </ListItem>
  );
};

export default Item;
