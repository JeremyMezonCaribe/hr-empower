import { Button } from "@mui/material";

import { primaryButtonStyle } from "@/shared/utils/styles.utils";

const PrimaryButton = ({ children, handlerClick = () => {}, classname }) => {
  return (
    <Button
      sx={{ ...primaryButtonStyle, marginLeft: "10px" }}
      variant="contained"
      onClick={handlerClick}
      className={classname}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;