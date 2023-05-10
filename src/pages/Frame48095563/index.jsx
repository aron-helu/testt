import React from "react";

import { Button, Img, Text } from "components";
import Frame48095563Buttonmd from "components/Frame48095563Buttonmd";
import Header2 from "components/Header2";

const Frame48095563Page = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgdemi items-center justify-end mx-auto w-full">
        <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-gray_900 h-[1074px] md:px-5 relative shadow-bs7 w-full">
          <div className="h-[1066px] md:h-[986px] m-auto pb-[23px] w-full">
            <Img
              src="images/img_bg_986x1622.png"
              className="absolute h-[986px] inset-x-[0] mx-auto object-cover top-[0] w-auto md:w-full"
              alt="bg"
            />
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[11%] w-[59%]">
              <Text
                className="font-futuramaxicgbold leading-[75.00px] text-center text-yellow_A700_01 tracking-[2.14px]"
                as="h4"
                variant="h4"
              >
                <>
                  Feel Free to shop with almost any <br />
                  cryptocurrency
                </>
              </Text>
              <div className="bg-gradient3  md:w-full mt-[85px] p-px rounded-lg sm:w-full w-[93%] ">
                <div className="bg-gray_900_99 border-solid flex flex-col font-futuramaxicgbook items-start justify-start sm:px-5 px-8 py-6 rounded-lg self-stretch md:w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[81%] md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="text-left text-white_A700_ab w-auto"
                            variant="body15"
                          >
                            Search Products
                          </Text>
                        </div>
                        <div className="bg-blue_gray_900_03 flex flex-col font-dmsans items-start justify-start max-w-[655px] pl-4 md:pr-10 sm:pr-5 pr-[381px] py-3 rounded w-full">
                          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start self-stretch w-auto">
                              <Text
                                className="italic text-gray_50_01 text-left w-auto"
                                variant="body10"
                              >
                                headphones
                              </Text>
                            </div>
                            <Img
                              src="images/img_icon_gray_50_01.svg"
                              className="h-4 w-4"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Frame48095563Buttonmd
                      className="bg-yellow_A700 flex sm:flex-1 flex-col font-futuramaxicgdemi gap-2.5 items-center justify-start md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] self-stretch w-auto sm:w-full"
                      btntext="Search"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-futuramaxicglight font-normal leading-[32.00px] mt-16 text-center text-white_A700_01 w-[88%] sm:w-full"
                variant="body5"
              ></Text>
              <Button
                className="mt-[33px]"
                shape="RoundedBorder6"
                size="md"
                variant="Outline"
              >
                <div className="bg-gray_900 cursor-pointer font-futuramaxicgdemi font-normal min-w-[127px] text-center text-sm text-yellow_A400 tracking-[0.20px]">
                  <div className="mt-[33px]">Get Started</div>
                </div>
              </Button>
            </div>
            <div className="absolute bg-white_A700_01 bottom-[0] flex md:flex-col flex-row gap-[30px] inset-x-[0] items-center justify-center mx-auto self-stretch shadow-bs11 w-auto">
              <div className="flex flex-col items-start justify-start w-[328px]">
                <div className="bg-white_A700_01 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                  <Img
                    src="images/img_bitcoinsvgrepocom_yellow_a700_01.svg"
                    className="h-[43px] w-[43px]"
                    alt="bitcoinsvgrepoc"
                  />
                  <Text
                    className="font-futuramaxicgbold text-blue_gray_900_01 text-center w-auto"
                    variant="body7"
                  >
                    WEB 3.0 Payments
                  </Text>
                  <Text
                    className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600_04"
                    variant="body14"
                  >
                    <>
                      Through various Blockchain <br />
                      Networks / Wallets
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[329px]">
                <div className="bg-white_A700_01 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                  <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                    <Img
                      src="images/img_bag_yellow_a700_01.svg"
                      className="h-[39px] w-auto"
                      alt="bag"
                    />
                  </div>
                  <Text
                    className="font-futuramaxicgbold text-blue_gray_900_01 text-center w-auto"
                    variant="body7"
                  >
                    The Best Electronic Products
                  </Text>
                  <Text
                    className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600_04"
                    variant="body14"
                  >
                    <>
                      With + 60.000 electronics products
                      <br />
                      with the best discounts
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                <div className="bg-white_A700_01 flex flex-col gap-2.5 h-[227px] md:h-auto items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                  <Img
                    src="images/img_music.svg"
                    className="h-[49px] w-12"
                    alt="music"
                  />
                  <Text
                    className="font-bold font-montserrat text-blue_gray_900_01 text-center tracking-[0.10px] w-auto"
                    variant="body5"
                  >
                    Fast Shipping
                  </Text>
                  <Text
                    className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600_04"
                    variant="body14"
                  >
                    <>
                      receive your products
                      <br /> in 1-3 days
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_800_bf flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[25px] sm:px-5 px-[25px] w-full">
            <div className="flex flex-col items-center justify-start mb-[490px] w-[98%] md:w-full">
              <Img
                src="images/img_group57_gray_900.svg"
                className="h-[559px] w-auto"
                alt="groupFiftySeven"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame48095563Page;
