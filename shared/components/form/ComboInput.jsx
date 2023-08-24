import { RED_COLOR } from "@/shared/constants/styledConstants";
import { forwardRef } from "react";
import Select from "react-select";


const ComboInput = forwardRef(
  (
    {
      label = "",
      placeholder = "",
      options = [],
      onFocusHandler = () => {},
      onChangeHandler = () => {},
      defaultValue = "",
      required = false,
      error = false,
      errorMessage = "",
    },
    ref
  ) => {
    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="mg-b-10 font-weight-bold h6 text-black">{label}</p>
          {error && (
            <span
              className="font-weight-bold d-block text-end tx-12"
              style={{ color: RED_COLOR }}
            >
              {errorMessage}
            </span>
          )}
        </div>
        <div className="SlectBox">
          <Select
            required={required}
            ref={ref}
            classNamePrefix="selectform"
            defaultValue={defaultValue}
            isClearable={true}
            onChange={(e) => {onChangeHandler(e)}}
            onFocus={onFocusHandler}
            options={options}
            placeholder={placeholder}
            styles={{
              input: (styles) => ({
                ...styles,
              }),
              control: (styles) => ({
                ...styles,
                backgroundColor: "#F9F9F9",
                border: `${
                  error ? "1px solid red !important" : "none !important"
                }`,
                borderRadius: 10,
              }),
              indicatorSeparator: (styles) => ({
                ...styles,
                width: "0px !important",
              }),
            }}
          />
        </div>
      </>
    );
  }
);

ComboInput.displayName = "ComboInput";

export default ComboInput;
