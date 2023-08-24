const { PRIMARY_COLOR, PRIMARY_FONT } = require("@/shared/constants/styledConstants")
const { Button } = require("@mui/material")

const AddButton = ({children,clickHandler=()=>{},classname}) => {

    return (
        <Button 
            onClick={clickHandler} 
            classname 
            sx={{
                backgroundColor: PRIMARY_COLOR, 
                fontFamily: PRIMARY_FONT,
                outline: 'none',
                boxShadow: '0',
                textTransform: 'capitalize'
            }} 
            variant="contained" 
        >
            {children}
        </Button>
    )
}

export default AddButton