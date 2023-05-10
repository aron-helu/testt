import React from "react";

import { Img } from "components";

const HOMEPAGEAvatar64x64 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_rectangle10_64x64.png"
          className="h-16 md:h-auto rounded-[50%] w-16"
          alt="rectangleTen"
        />
      </div>
    </>
  );
};

HOMEPAGEAvatar64x64.defaultProps = {};

export default HOMEPAGEAvatar64x64;
