import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const Button = ({
  children = "Default",
  disabled = false,
  variant = "fill",
  disableShadow = false,
  startIcon,
  endIcon,
  color = "default",
  hover,
  size = "md",
}) => {
  return (
    <button
      className={`btn ${color} ${variant} ${
        disableShadow && "disableShadow"
      } ${hover} ${size} ${disabled && "disabled"}`}
      disabled={disabled}
    >
      {startIcon && <LocalGroceryStoreIcon className="startIcon" />}
      {children}
      {endIcon && <LocalGroceryStoreIcon className="endIcon" />}
    </button>
  );
};

export default Button;
