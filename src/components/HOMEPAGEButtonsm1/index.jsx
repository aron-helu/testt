import React from "react";

import { Text } from "components";

const HOMEPAGEButtonsm1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-futuramaxicgbook font-normal text-center text-gray_600_04 w-auto"
          variant="body14"
        >
          {props?.h6Two}
        </Text>
      </div>
    </>
  );
};

HOMEPAGEButtonsm1.defaultProps = { h6Two: "Webcams" };

export default HOMEPAGEButtonsm1;
