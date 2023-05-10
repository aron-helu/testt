import React from "react";

import { Img } from "components";

const CARTPAGEColumniconFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-36 relative w-[145px] md:w-full">
          <Img
            src={props?.iconFour}
            className="absolute h-36 inset-[0] justify-center m-auto object-cover w-[145px] md:w-full"
            alt="icon_Four"
          />
          <Img
            src={props?.iconmaskFour}
            className="absolute h-36 inset-[0] justify-center m-auto object-cover w-[145px] md:w-full"
            alt="iconmask_Four"
          />
        </div>
      </div>
    </>
  );
};

CARTPAGEColumniconFour.defaultProps = {
  iconFour: "images/img_icon_144x145.png",
  iconmaskFour: "images/img_icon_144x145.png",
};

export default CARTPAGEColumniconFour;
