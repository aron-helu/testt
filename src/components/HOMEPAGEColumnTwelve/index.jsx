import React from "react";

import { Img, List, Text } from "components";

const HOMEPAGEColumnTwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[33px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start sm:ml-[0] w-full">
            <div className="h-[530px] relative w-full">
              <Img
                src="images/img_image.png"
                className="h-[530px] m-auto object-cover w-full"
                alt="image"
              />
              <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-auto">
                <Text
                  className="font-futuramaxicgbold leading-[40.00px] text-center text-gray_800 w-full"
                  variant="body4"
                >
                  {props?.mediumlengthdis}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-gray_800 w-full"
                  variant="body14"
                >
                  {props?.collectionofcom}
                </Text>
              </div>
            </div>
            <div className="h-[460px] relative w-full">
              <Img
                src="images/img_image_460x405.png"
                className="h-[460px] m-auto object-cover w-full"
                alt="image_One"
              />
              <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[10%] w-auto">
                <Text
                  className="font-futuramaxicgbold text-center text-yellow_A700 w-auto"
                  variant="body4"
                >
                  {props?.mediumlengthdisOne}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-yellow_A700 w-full"
                  variant="body14"
                >
                  {props?.collectionofcomOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start sm:ml-[0] w-full">
            <div className="h-[460px] relative w-full">
              <Img
                src="images/img_image_2.png"
                className="h-[460px] m-auto object-cover w-full"
                alt="image"
              />
              <div className="absolute flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto top-[10%] w-auto">
                <Text
                  className="font-futuramaxicgbold leading-[40.00px] text-center text-white_A700_01 w-full"
                  variant="body4"
                >
                  {props?.mediumlengthdis1}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-white_A700_01 w-full"
                  variant="body14"
                >
                  {props?.collectionofcom1}
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[60px] h-[530px] items-end justify-end pt-[25px] sm:px-5 px-[25px] w-full"
              style={{ backgroundImage: "url('images/img_group109.svg')" }}
            >
              <Text
                className="font-futuramaxicgbold leading-[40.00px] mr-5 mt-5 text-center text-gray_800 w-[89%] sm:w-full"
                variant="body4"
              >
                {props?.mediumlengthdisOne1}
              </Text>
              <div className="md:h-[290px] h-[305px] mr-5 relative w-[95%]">
                <Text
                  className="absolute font-futuramaxicgbook font-normal leading-[22.00px] right-[0] text-center text-gray_800 top-[0] w-[95%] sm:w-full"
                  variant="body14"
                >
                  {props?.collectionofcomOne1}
                </Text>
                <Img
                  src="images/img_image8.png"
                  className="absolute bottom-[0] h-[290px] left-[0] object-cover w-[89%]"
                  alt="imageEight"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HOMEPAGEColumnTwelve.defaultProps = {
  mediumlengthdis: "See how work gets done with Source",
  collectionofcom:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdisOne: "Easy to Use",
  collectionofcomOne:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdis1: "You’re in good company",
  collectionofcom1:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdisOne1: "We make sure that everyone is able to use a Source",
  collectionofcomOne1:
    "A website wireframe, also known as a page schematic or screen blueprint",
};

export default HOMEPAGEColumnTwelve;
