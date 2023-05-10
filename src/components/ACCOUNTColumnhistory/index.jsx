import React from "react";

import { Img, Input, Line, Text } from "components";

const ACCOUNTColumnhistory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-gray_800 border-solid flex flex-row gap-[27px] items-center justify-between p-2 rounded-[5px] w-full">
          <Text
            className="font-futuramaxicgdemi font-normal mb-[5px] ml-0.5 text-gray_900 text-left w-auto"
            variant="body12"
          >
            {props?.history}
          </Text>
          <Img
            src={props?.userOne}
            className="h-[17px] mr-0.5 w-[17px]"
            alt="user_One"
          />
        </div>
        <Input
          wrapClassName="flex w-full"
          className="font-futuramaxicgdemi font-normal p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
          name="group102"
          placeholder="Order History"
          suffix={
            <Img
              src="images/img_menu_gray_600.svg"
              className="ml-[35px] my-px"
              alt="menu"
            />
          }
          shape="RoundedBorder6"
          size="sm"
          variant="OutlineGray60076"
        ></Input>
        <div className="border border-gray_600_76 border-solid flex flex-row items-center justify-between p-[9px] rounded-[5px] w-full">
          <Text
            className="font-futuramaxicgdemi font-normal mb-1 text-gray_600 text-left w-auto"
            variant="body12"
          >
            {props?.historyOne}
          </Text>
          <div
            className="bg-cover bg-no-repeat flex md:h-1 h-[17px] justify-end p-0.5 relative w-[17px]"
            style={{ backgroundImage: "url('images/img_group105.svg')" }}
          >
            <div className="flex mt-auto mx-auto w-[3px]">
              <Img
                src={props?.lineeleven}
                className="h-1 my-auto w-auto"
                alt="lineEleven"
              />
              <Line className="bg-gray_600 h-px ml-[-0.5px] w-full z-[1]" />
            </div>
            <Line className="absolute bg-gray_600 bottom-[12%] h-[3px] right-[35%] rotate-[-90deg] w-px" />
          </div>
        </div>
        <div className="border border-gray_600_76 border-solid flex flex-row items-center justify-between p-2 rounded-[5px] w-full">
          <Text
            className="font-futuramaxicgdemi font-normal mb-[5px] ml-0.5 text-gray_600 text-left w-auto"
            variant="body12"
          >
            {props?.historyTwo}
          </Text>
          <Img
            src={props?.contrast}
            className="h-[17px] mr-0.5 w-[17px]"
            alt="contrast"
          />
        </div>
      </div>
    </>
  );
};

ACCOUNTColumnhistory.defaultProps = {
  history: "Account Details",
  userOne: "images/img_user_gray_900.svg",
  historyOne: "Addresses",
  lineeleven: "images/img_line11.svg",
  historyTwo: "Wishlist",
  contrast: "images/img_contrast.svg",
};

export default ACCOUNTColumnhistory;
