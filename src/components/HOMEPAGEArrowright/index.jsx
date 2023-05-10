import React from "react";

import { Button, Img } from "components";

const HOMEPAGEArrowright = (props) => {
  return (
    <>
      <Button
        className={props.className}
        shape="icbRoundedBorder24"
        size="mdIcn"
        variant="icbOutlineYellowA70001"
      >
        <Img
          src="images/img_arrowright_yellow_a700_01.svg"
          className=""
          alt="arrowright"
        />
      </Button>
    </>
  );
};

HOMEPAGEArrowright.defaultProps = {};

export default HOMEPAGEArrowright;
