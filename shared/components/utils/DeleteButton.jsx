import { Button, IconButton } from "@mui/material";

import {
  GRAY_COLOR,
  PRIMARY_FONT,
  PURPURE_COLOR,
} from "@/shared/constants/styledConstants";
import { Delete } from "@mui/icons-material";

const DeleteButton = ({
  children,
  handlerClick = () => {},
  classname,
  disabled = false,
}) => {
  return (
    <IconButton
      sx={{
        backgroundColor: PURPURE_COLOR,
        color: "white",
        textTransform: "none",
        fontFamily: PRIMARY_FONT,
        outline: "none",
        borderRadius: "5px",
        padding: "6px 20px",
        "&:hover": {
          backgroundColor: "#ffffff",
          color: PURPURE_COLOR,
        },
      }}
      variant="text"
      onClick={handlerClick}
      className={classname}
      disabled={disabled}
    >
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
