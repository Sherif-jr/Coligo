import { Card as MuiCard, SxProps } from "@mui/material";
import { CSSProperties, FC, PropsWithChildren } from "react";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";

const Card: FC<
  PropsWithChildren<{
    loading?: boolean;
    className?: string;
    style?: CSSProperties;
    sx?: SxProps;
  }>
> = ({ loading, children, className, style, sx }) => {
  return (
    <MuiCard
      className={`p-4 relative ${className ? className : ""}`}
      sx={sx}
      style={style}
    >
      {loading && (
        <div className=" absolute w-full h-full flex items-center justify-center bg-white/60">
          <AutorenewTwoToneIcon color="primary" className="animate-spin" />
        </div>
      )}
      {children}
    </MuiCard>
  );
};

export default Card;
