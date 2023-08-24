import { PRIMARY_COLOR, RED_COLOR } from "@/shared/constants/stylesConstants";
import { forwardRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const MultiSelect = forwardRef(
  (
    {
      label,
      options,
      placeholder,
      onChange,
      onFocus,
      defaultValue,
      required = false,
      error = false,
      errorMessage = "",
    },
    ref
  ) => {
    const Prefilledinput = makeAnimated();
    return (
      <>
        {label && (
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
        )}
        <Select
          required={required}
          defaultValue={defaultValue}
          ref={ref}
          classNamePrefix="selectform"
          onChange={onChange}
          onFocus={onFocus}
          components={Prefilledinput}
          closeMenuOnSelect={false}
          placeholder={placeholder}
          options={options}
          isMulti
          styles={{
            valueContainer: (styles) => ({
              ...styles,
              "& > div": {
                flex: "1 1 auto",
                width: "fit-content !important",
              },
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: "transparent",
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              backgroundColor: PRIMARY_COLOR,
              color: "white",
              fontSize: "98%",
              borderRadius: "6px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "100%",
            }),
            control: (styles) => ({
              ...styles,
              backgroundColor: "#F9F9F9",
              borderWidth: "0px !important",
              border: `${
                error ? "1px solid red !important" : "none !important"
              }`,
              borderRadius: 10,
            }),
            indicatorSeparator: (styles) => ({
              ...styles,
              width: "0px !important",
            }),
            multiValueRemove: (styles) => ({
              ...styles,
              backgroundColor: PRIMARY_COLOR,
              color: "white",
              borderRadius: "6px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }),
          }}
        />
      </>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
export default MultiSelect;
