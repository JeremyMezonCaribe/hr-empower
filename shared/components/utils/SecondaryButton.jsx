import { Button } from "@mui/material";

import {
  GRAY_COLOR,
  PRIMARY_FONT,
  SECONDARY_FONT_COLOR,
} from "@/shared/constants/styledConstants";

const SecondaryButton = ({ children, handlerClick = () => {}, classname }) => {
  return (
    <Button
      sx={{
        backgroundColor: GRAY_COLOR,
        color: SECONDARY_FONT_COLOR,
        textTransform: "none",
        fontFamily: PRIMARY_FONT,
        outline: "none",
        borderRadius: "10px",
        padding: "8px 20px",
        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#000000",
        },
      }}
      variant="text"
      onClick={handlerClick}
      classname
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
