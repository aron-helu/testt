import React from "react";

import { Text } from "components";

const HOMEPAGEButtonsm = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-futuramaxicgbook font-normal text-center text-yellow_A700_01 w-auto"
          variant="body14"
        >
          {props?.h6One}
        </Text>
      </div>
    </>
  );
};

HOMEPAGEButtonsm.defaultProps = { h6One: "Notebooks" };

export default HOMEPAGEButtonsm;
