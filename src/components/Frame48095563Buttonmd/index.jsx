import React from "react";

import { Text } from "components";

const Frame48095563Buttonmd = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-futuramaxicgdemi font-normal text-center text-gray_900 tracking-[0.20px] w-auto"
          variant="body14"
        >
          {props?.btntext}
        </Text>
      </div>
    </>
  );
};

Frame48095563Buttonmd.defaultProps = { btntext: "Search" };

export default Frame48095563Buttonmd;
