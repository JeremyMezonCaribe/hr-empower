
import { PRIMARY_FONT } from '@/shared/constants/styledConstants';
import Button from '@mui/material/Button';

const EditButton = ({children}) => {
  return (
      <Button 
        variant="outlined"
        sx={{
          fontFamily: PRIMARY_FONT,
          fontWeight: 600
        }}
      >
        {children}
      </Button>
  );
}

export default EditButton