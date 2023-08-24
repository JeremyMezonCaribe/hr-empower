import {
    GRAY_COLOR,
    PRIMARY_COLOR,
    PRIMARY_FONT,
    SECONDARY_FONT_COLOR,
  } from "../constants/styledConstants";
  
  export const primaryButtonStyle = {
    backgroundColor: PRIMARY_COLOR,
    textTransform: "none",
    fontFamily: PRIMARY_FONT,
    boxShadow: "none",
    borderRadius: "10px",
    padding: "8px 20px",
    "&:hover": {
      backgroundColor: GRAY_COLOR,
      color: PRIMARY_COLOR,
      boxShadow: "none",
    },
  };
  
  export const secondaryButtonStyle = {
    backgroundColor: GRAY_COLOR,
    textTransform: "none",
    fontFamily: PRIMARY_FONT,
    boxShadow: "none",
    borderRadius: "10px",
    //   marginLeft: "10px",
    padding: "8px 20px",
    color: SECONDARY_FONT_COLOR,
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "none",
    },
  };
  