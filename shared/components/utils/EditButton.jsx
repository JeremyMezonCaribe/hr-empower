
import Button from '@mui/material/Button';

const EditButton = ({children}) => {
  return (
      <Button 
        variant="outlined"

      >
        {children}
      </Button>
  );
}

export default EditButton