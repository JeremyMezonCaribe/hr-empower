import { PRIMARY_FONT } from "@/shared/constants/styledConstants"
import { TextField } from "@mui/material"


const SingleInput = ({placeholder="",label="",changeHandler=()=>{},type="text"}) => {

    return (
        <>
            <p className="mg-b-10 font-weight-bold h6 text-black">{label}</p>
            <TextField 
                id="outlined-basic" 
                placeholder={placeholder}
                variant="outlined"
                type={type}
                onChange={(e)=>{changeHandler(e.target.value)}}
                size="small"
                sx={{
                    width: "100%",
                    backgroundColor: "#F9F9F9",
                    border: `0 !important`,
                    borderRadius: "10px",
                    "& fieldset": {
                    border: 0,
                    fontFamily: PRIMARY_FONT,
                    fontSize: "13px",
                    },
                    "& .Mui-focused": {
                    borderRadius: "10px",
                    },
                    "& input": {
                    fontSize: "13px",
                    },
                    "& input::placeholder": {
                    fontSize: "13px",
                    },
                    "& input:-ms-input-placeholder": {
                    fontSize: "13px",
                    },
                    "& input::-webkit-input-placeholder": {
                    fontSize: "13px",
                    },
                }}
            />
        </>
    )
}

export default SingleInput