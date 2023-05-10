import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-[15px]",
  RoundedBorder6: "rounded-md",
  CircleBorder21: "rounded-[21px]",
  CircleBorder24: "rounded-[24px]",
  icbRoundedBorder24: "rounded-[24px]",
  icbCircleBorder15: "rounded-[15px]",
};
const variants = {
  FillYellowA700: "bg-yellow_A700 text-gray_900",
  OutlineBluegray90026: "bg-gray_900 shadow-bs1 text-white_A700_01",
  FillYellowA70001: "bg-yellow_A700_01",
  OutlineGray900: "border border-gray_900 border-solid text-gray_900",
  OutlineBlack9000f: "bg-yellow_A700 shadow-bs text-gray_900",
  OutlineBlack900: "border border-black_900 border-solid text-gray_900",
  FillGreenA2004c: "bg-green_A200_4c text-gray_800",
  FillRed4004c: "bg-red_400_4c text-gray_800",
  FillGray6004c: "bg-gray_600_4c text-gray_800",
  Outline: "bg-gradient  border border-solid text-yellow_A400",
  FillPurple900: "bg-purple_900",
  icbOutlineYellowA70001: "border border-solid border-yellow_A700_01",
  icbFillWhiteA70001: "bg-white_A700_01",
  icbOutlineGray800: "bg-white_A700_01 border border-gray_800 border-solid",
  icbFillDeeppurpleA200: "bg-deep_purple_A200",
  icbFillGray40001: "bg-gray_400_01",
  icbFillAmber600: "bg-amber_600",
  icbOutlineGray40002: "border border-gray_400_02 border-solid",
};
const sizes = {
  sm: "p-1.5",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-5",
  smIcn: "p-1.5",
  mdIcn: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder15",
    "RoundedBorder6",
    "CircleBorder21",
    "CircleBorder24",
    "icbRoundedBorder24",
    "icbCircleBorder15",
  ]),
  variant: PropTypes.oneOf([
    "FillYellowA700",
    "OutlineBluegray90026",
    "FillYellowA70001",
    "OutlineGray900",
    "OutlineBlack9000f",
    "OutlineBlack900",
    "FillGreenA2004c",
    "FillRed4004c",
    "FillGray6004c",
    "Outline",
    "FillPurple900",
    "icbOutlineYellowA70001",
    "icbFillWhiteA70001",
    "icbOutlineGray800",
    "icbFillDeeppurpleA200",
    "icbFillGray40001",
    "icbFillAmber600",
    "icbOutlineGray40002",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
