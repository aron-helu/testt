import React from "react";

import { Button, Img, Input, Text } from "components";
import ACCOUNTColumnhistory from "components/ACCOUNTColumnhistory";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const ACCOUNTPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="h-[1518px] md:h-[572px] md:px-5 relative w-full">
          <div className="flex h-[1518px] md:h-[572px] justify-end m-auto w-full">
            <Header1 className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            <div className="absolute flex flex-col items-center justify-start left-[10%] top-[35%] w-[9%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                    variant="body14"
                  >
                    Home
                  </Text>
                  <Text
                    className="font-medium font-roboto text-gray_700 text-left w-auto"
                    variant="body12"
                  >
                    |
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                    variant="body14"
                  >
                    Account
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-normal mb-[556px] ml-[473px] mt-auto text-gray_900 text-justify w-auto"
              variant="body14"
            >
              Change Password
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat h-[1518px] md:h-[213px] inset-[0] justify-center m-auto p-[162px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group104.png')" }}
            >
              <div className="absolute flex flex-col font-futuramaxicgbold gap-[52px] items-start justify-start left-[29%] top-[42%] w-[31%]">
                <Text
                  className="text-gray_900 text-justify w-auto"
                  variant="body6"
                >
                  Hi Jeniffer Hurtado Coronado!
                </Text>
                <div className="flex flex-row font-futuramaxicgbook items-center justify-between w-full">
                  <Text
                    className="text-blue_gray_900 text-left w-auto"
                    variant="body15"
                  >
                    First Name*
                  </Text>
                  <Text
                    className="text-blue_gray_900 text-left w-auto"
                    variant="body15"
                  >
                    Last Name*
                  </Text>
                </div>
              </div>
              <div className="absolute font-futuramaxicgbook h-12 inset-y-[0] left-[29%] my-auto w-[21%]">
                <div className="bg-white_A700_01 border border-gray_600 border-solid flex flex-col h-full items-start justify-start my-auto p-3 rounded-md w-auto">
                  <Text
                    className="mb-1.5 mt-[3px] text-gray_900 text-left w-auto"
                    variant="body15"
                  >
                    Jeniffer
                  </Text>
                </div>
                <Input
                  wrapClassName="absolute inset-[0] m-auto w-full"
                  className="font-normal justify-center p-0 placeholder:text-gray_900 text-gray_900 text-left text-xs w-full"
                  name="componentFive"
                  placeholder="Jeniffer"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineGray600"
                ></Input>
              </div>
              <div className="absolute bottom-[45%] flex flex-row font-futuramaxicgbook items-start justify-between left-[29%] w-[30%]">
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body15"
                >
                  Email Address*
                </Text>
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body15"
                >
                  Company
                </Text>
              </div>
              <div className="absolute bottom-[41%] font-futuramaxicgbook h-12 left-[29%] w-[21%]">
                <div className="bg-white_A700_01 border border-gray_600 border-solid flex flex-col h-full items-start justify-start my-auto p-3 rounded-md w-auto">
                  <Text
                    className="mb-1.5 mt-0.5 text-gray_900 text-left w-auto"
                    variant="body15"
                  >
                    Hurtado Coronado
                  </Text>
                </div>
                <Input
                  wrapClassName="absolute inset-[0] m-auto w-full"
                  className="font-normal justify-center p-0 placeholder:text-gray_900 text-gray_900 text-left text-xs w-full"
                  name="componentSix"
                  placeholder="Hurtado Coronado"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineGray600"
                ></Input>
              </div>
              <div className="absolute bottom-[34%] flex flex-row font-futuramaxicgbook sm:gap-10 items-center justify-between left-[29%] w-[34%]">
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body15"
                >
                  Password*
                </Text>
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body15"
                >
                  Confirm Password*
                </Text>
              </div>
              <div className="absolute bottom-[28%] font-futuramaxicgbook h-[69px] left-[29%] w-[21%]">
                <div className="bg-white_A700_01 border border-gray_600 border-solid flex flex-col h-full items-start justify-start p-3 rounded-md w-auto">
                  <Text
                    className="my-1 text-gray_900 text-left w-auto"
                    variant="body15"
                  >
                    Jennimar17@gmail.com
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-[7px] h-full inset-[0] items-end justify-center m-auto w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-normal p-0 placeholder:text-gray_900 text-gray_900 text-left text-xs w-full"
                    name="password_One"
                    placeholder="************"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineGray600"
                  ></Input>
                  <Text
                    className="text-gray_600 text-left w-auto"
                    variant="body15"
                  >
                    Forgot Passoword ?
                  </Text>
                </div>
              </div>
              <Input
                wrapClassName="absolute inset-y-[0] my-auto right-[24%] w-[21%]"
                className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_900 text-gray_900 text-left text-xs w-full"
                name="componentNine"
                placeholder="Hurtado Coronado"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineGray600"
              ></Input>
              <Input
                wrapClassName="absolute bottom-[41%] right-[24%] w-[21%]"
                className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_600 text-gray_600 text-left text-xs w-full"
                name="componentTen"
                placeholder="Optional"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineGray600"
              ></Input>
              <div className="absolute bottom-[22%] flex flex-col font-montserrat md:gap-10 gap-[72px] items-center justify-start right-[24%] w-[21%]">
                <Img
                  src="images/img_component11.svg"
                  className="h-12 w-auto"
                  alt="componentEleven"
                />
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-bold text-center text-gray_900 text-sm tracking-[0.20px] w-[162px]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="FillYellowA700"
                  >
                    Save
                  </Button>
                  <Button
                    className="cursor-pointer font-bold text-center text-gray_900 text-sm tracking-[0.20px] w-[162px]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
              <ACCOUNTColumnhistory
                className="absolute bottom-[39%] flex flex-col font-futuramaxicgdemi items-center justify-start left-[11%] shadow-bs4 w-auto sm:w-full"
                history="Account Details"
                userOne="images/img_user_gray_900.svg"
                historyOne="Addresses"
                lineeleven="images/img_line11.svg"
                historyTwo="Wishlist"
                contrast="images/img_contrast.svg"
              />
            </div>
          </div>
          <div className="absolute bg-gray_900 flex flex-col font-futuramaxicgbold inset-x-[0] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 top-[13%] w-full">
            <Text
              className="mb-2 text-center text-yellow_A700_01 uppercase w-auto"
              variant="body3"
            >
              Account Details
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-start justify-start mt-[71px] py-20 self-stretch w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start self-stretch w-auto md:w-full">
            <div className="flex flex-col items-center justify-start md:px-5 w-[31%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-end justify-start sm:pl-5 pl-9 w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-center justify-end ml-auto w-full">
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold font-montserrat text-left text-yellow_A700 tracking-[0.20px] w-auto"
                        variant="body14"
                      >
                        Ends Today
                      </Text>
                      <Text
                        className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700_01 tracking-[0.10px]"
                        variant="body5"
                      >
                        <>
                          Elements Of <br />
                          Style
                        </>
                      </Text>
                      <Text
                        className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700_01"
                        variant="body15"
                      >
                        <>
                          Top Ten Products of the <br />
                          Week
                        </>
                      </Text>
                      <Text
                        className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                        variant="body10"
                      >
                        Explore Items
                      </Text>
                    </div>
                    <Img
                      src="images/img_printedsummerdress.png"
                      className="sm:flex-1 h-[445px] md:h-auto object-cover w-[52%] sm:w-full"
                      alt="printedsummerdr"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:px-5 w-[35%] md:w-full">
              <div className="h-[460px] relative w-full">
                <div className="bg-white_A700_01 flex flex-col h-full items-center justify-start my-auto w-[92%]">
                  <div className="h-[300px] relative w-full">
                    <Img
                      src="images/img_unsplashqyc13qbgam4.png"
                      className="h-[300px] m-auto object-cover w-full"
                      alt="unsplashqyc13qb"
                    />
                    <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                </div>
                <div className="absolute h-[460px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                  <Text
                    className="font-bold mt-[142px] text-left text-yellow_A700 tracking-[0.20px] w-auto"
                    variant="body14"
                  >
                    Ends Today
                  </Text>
                  <div className="absolute h-[460px] inset-y-[0] my-auto right-[0] w-[92%] sm:w-full">
                    <div className="absolute bottom-[28%] flex flex-col items-center justify-start left-[0] w-[33%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="font-bold font-montserrat leading-[32.00px] text-left text-white_A700_01 tracking-[0.10px]"
                          variant="body5"
                        >
                          <>
                            Elements Of <br />
                            Style
                          </>
                        </Text>
                        <Text
                          className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700_01"
                          variant="body15"
                        >
                          <>
                            Top Ten Products of the <br />
                            Week
                          </>
                        </Text>
                        <Text
                          className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                          variant="body10"
                        >
                          Explore Items
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_productcover5.png"
                      className="absolute h-[460px] inset-y-[0] my-auto object-cover right-[0] w-[81%]"
                      alt="printedsummerdr_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:px-5 w-[32%] md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="bg-white_A700_01 flex flex-1 flex-col items-center justify-start mb-[66px] md:mt-0 mt-12 w-full">
                    <div className="h-[300px] relative w-full">
                      <Img
                        src="images/img_unsplashqyc13qbgam4_1.png"
                        className="h-[300px] m-auto object-cover w-full"
                        alt="unsplashqyc13qb_One"
                      />
                      <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                    </div>
                  </div>
                  <div className="h-[414px] sm:h-[646px] relative w-full">
                    <div className="bg-white_A700_01 flex flex-col h-full items-center justify-start mt-12 mx-auto w-full">
                      <div className="h-[300px] relative w-full">
                        <Img
                          src="images/img_unsplashqyc13qbgam4_300x510.png"
                          className="h-[300px] m-auto object-cover w-full"
                          alt="unsplashqyc13qb_Two"
                        />
                        <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[43px] items-center justify-end ml-auto w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="font-bold font-montserrat text-left text-yellow_A700 tracking-[0.20px] w-auto"
                            variant="body14"
                          >
                            Ends Today
                          </Text>
                          <Text
                            className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700_01 tracking-[0.10px]"
                            variant="body5"
                          >
                            <>
                              Elements Of <br />
                              Style
                            </>
                          </Text>
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700_01"
                            variant="body15"
                          >
                            <>
                              Top Ten Products of the <br />
                              Week
                            </>
                          </Text>
                          <Text
                            className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                            variant="body10"
                          >
                            Explore Items
                          </Text>
                        </div>
                        <Img
                          src="images/img_printedsummerdress_414x255.png"
                          className="sm:flex-1 h-[414px] md:h-auto object-cover w-[56%] sm:w-full"
                          alt="printedsummerdr_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex font-inter items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ACCOUNTPage;
