import React from "react";

import { Button, Img } from "components";

const HOMEPAGEArrowleft = (props) => {
  return (
    <>
      <Button
        className={props.className}
        size="mdIcn"
        variant="icbOutlineGray40002"
      >
        <Img src="images/img_arrowleft.svg" className="" alt="arrowleft" />
      </Button>
    </>
  );
};

HOMEPAGEArrowleft.defaultProps = {};

export default HOMEPAGEArrowleft;
