import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray600: "bg-white_A700_01 border border-gray_600 border-solid",
  OutlineGray400: "bg-white_A700_01 border border-gray_400 border-solid",
  OutlineWhiteA70001:
    "bg-white_A700_01 border border-solid border-white_A700_01",
  FillBluegray90003: "bg-blue_gray_900_03",
  OutlineGray60076: "border border-gray_600_76 border-solid",
  srcFillWhiteA70001: "bg-white_A700_01",
};
const shapes = {
  RoundedBorder6: "rounded-md",
  CircleBorder21: "rounded-[21px]",
  srcCircleBorder23: "rounded-[23px]",
};
const sizes = {
  sm: "px-2.5 py-[11px]",
  md: "p-[13px]",
  lg: "pb-[18px] pt-[15px] px-[15px]",
  xl: "p-[25px] sm:px-5",
  "2xl": "p-[27px] sm:px-5",
  smSrc: "p-3.5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CircleBorder21",
    "srcCircleBorder23",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray600",
    "OutlineGray400",
    "OutlineWhiteA70001",
    "FillBluegray90003",
    "OutlineGray60076",
    "srcFillWhiteA70001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
