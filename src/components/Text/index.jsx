import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-8xl",
  h2: "font-normal text-[9px]",
  h3: "font-normal text-[8px]",
  h4: "font-normal sm:text-5xl md:text-5xl text-[61px]",
  h5: "font-normal sm:text-[39px] md:text-[45px] text-[53px]",
  h6: "font-normal sm:text-4xl md:text-[42px] text-[46px]",
  body1: "sm:text-4xl md:text-[38px] text-[40px]",
  body2: "font-extrabold text-4xl sm:text-[32px] md:text-[34px]",
  body3: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  body4: "font-normal sm:text-2xl md:text-[26px] text-[28px]",
  body5: "text-2xl md:text-[22px] sm:text-xl",
  body6: "font-normal text-[22px] sm:text-lg md:text-xl",
  body7: "font-normal text-xl",
  body8: "font-normal sm:text-5xl md:text-5xl text-[190px]",
  body9: "font-normal text-[19px]",
  body10: "font-normal text-lg",
  body11: "font-normal text-[17px]",
  body12: "text-base",
  body13: "font-normal text-[15px]",
  body14: "text-sm",
  body15: "font-normal text-xs",
  body16: "font-normal text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
