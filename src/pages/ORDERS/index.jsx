import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ACCOUNTColumnhistory from "components/ACCOUNTColumnhistory";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const ORDERSPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="sm:h-[1007px] md:h-[1470px] h-[1518px] md:px-5 relative w-full">
          <div className="sm:h-[1007px] md:h-[1470px] h-[1518px] m-auto w-full">
            <Header1 className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            <div className="flex flex-col h-full items-center justify-start ml-[166px] mt-[534px] w-[11%]">
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
                    className="font-futuramaxicgbook font-normal mt-0.5 text-gray_700 text-left w-auto"
                    variant="body14"
                  >
                    Order History
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-futuramaxicgbold h-full inset-[0] items-center justify-center m-auto p-[78px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group104.png')" }}
            >
              <div className="flex flex-col items-start justify-start mt-[564px] w-[86%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[307px] text-gray_900 text-justify w-auto"
                  variant="body6"
                >
                  Hi Jeniffer Hurtado Coronado!
                </Text>
                <div className="flex md:flex-col flex-row font-futuramaxicgdemi md:gap-10 items-start justify-between mt-[51px] w-full">
                  <ACCOUNTColumnhistory
                    className="flex md:flex-1 flex-col items-center justify-start shadow-bs4 w-auto md:w-full"
                    history="Account Details"
                    userOne="images/img_user_gray_600.svg"
                    historyOne="Addresses"
                    lineeleven="images/img_line11.svg"
                    historyTwo="Wishlist"
                    contrast="images/img_contrast.svg"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[76%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] w-[85%] md:w-full">
                        <Text
                          className="md:mt-0 mt-1 text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Item
                        </Text>
                        <Text
                          className="mb-1 md:ml-[0] ml-[448px] text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Date
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[101px] text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Status
                        </Text>
                        <Text
                          className="mb-1 md:ml-[0] ml-[123px] text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Total
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row font-futuramaxicgbook gap-[25px] items-center justify-start mt-[54px] w-[88%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                          <Img
                            src="images/img_bg.png"
                            className="h-[90px] md:h-auto object-cover w-full"
                            alt="bg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                          <Text
                            className="text-gray_600 text-left w-auto"
                            variant="body15"
                          >
                            #65465465484654
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[5px] w-full">
                            <Text
                              className="font-futuramaxicgdemi leading-[18.00px] text-gray_900 text-left w-auto"
                              variant="body15"
                            >
                              Nikon D7200 24.2 MP DX-Format Digital SLR Body
                              with Wi-Fi and NFC (Black)(Renewed)
                            </Text>
                            <Text
                              className="font-futuramaxicgbook sm:mt-0 mt-2 text-gray_800 text-justify w-auto"
                              variant="body15"
                            >
                              July 24, 2022
                            </Text>
                            <Button
                              className="cursor-pointer font-futuramaxicgbook font-normal mb-7 min-w-[102px] sm:mt-0 mt-0.5 text-center text-gray_800 text-xs w-auto"
                              shape="RoundedBorder6"
                              size="sm"
                              variant="FillGreenA2004c"
                            >
                              Delivered
                            </Button>
                            <Text
                              className="font-futuramaxicgbook sm:mt-0 mt-[7px] text-gray_800 text-justify w-auto"
                              variant="body15"
                            ></Text>
                          </div>
                          <Text
                            className="mt-1 text-gray_600 text-justify w-auto"
                            variant="body15"
                          >
                            1 Units
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray_50 h-px ml-0.5 md:ml-[0] mt-[35px] w-full" />
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col font-futuramaxicgbook gap-10 grid md:ml-[0] ml-[307px] mt-[33px] pb-[37px] sm:pr-5 pr-[37px] w-[76%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                      <Img
                        src="images/img_bg.png"
                        className="h-[90px] md:h-auto object-cover w-full"
                        alt="bg"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] justify-start w-[88%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[5px] w-full">
                        <Text
                          className="text-gray_600 text-left w-auto"
                          variant="body15"
                        >
                          #65465465484654
                        </Text>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] text-gray_900 text-left w-auto"
                            variant="body15"
                          >
                            Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                            Wi-Fi and NFC (Black)(Renewed)
                          </Text>
                          <Text
                            className="font-futuramaxicgbook sm:mt-0 mt-2 text-gray_800 text-justify w-auto"
                            variant="body15"
                          >
                            July 24, 2022
                          </Text>
                          <Button
                            className="cursor-pointer font-futuramaxicgbook font-normal mb-7 min-w-[102px] sm:mt-0 mt-0.5 text-center text-gray_800 text-xs w-auto"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="FillRed4004c"
                          >
                            Canceled
                          </Button>
                          <Text
                            className="font-futuramaxicgbook sm:mt-0 mt-[7px] text-gray_800 text-justify w-auto"
                            variant="body15"
                          ></Text>
                        </div>
                      </div>
                      <Text
                        className="text-gray_600 text-justify w-auto"
                        variant="body15"
                      >
                        1 Units
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray_50 w-full" />
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-start w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                      <Img
                        src="images/img_bg.png"
                        className="h-[90px] md:h-auto object-cover w-full"
                        alt="bg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                      <Text
                        className="text-gray_600 text-left w-auto"
                        variant="body15"
                      >
                        #65465465484654
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[5px] w-full">
                        <Text
                          className="font-futuramaxicgdemi leading-[18.00px] text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                          Wi-Fi and NFC (Black)(Renewed)
                        </Text>
                        <Text
                          className="font-futuramaxicgbook sm:mt-0 mt-2 text-gray_800 text-justify w-auto"
                          variant="body15"
                        >
                          July 24, 2022
                        </Text>
                        <Button
                          className="cursor-pointer font-futuramaxicgbook font-normal mb-7 min-w-[102px] sm:mt-0 mt-0.5 text-center text-gray_800 text-xs w-auto"
                          shape="RoundedBorder6"
                          size="sm"
                          variant="FillGray6004c"
                        >
                          Processing
                        </Button>
                        <Text
                          className="font-futuramaxicgbook sm:mt-0 mt-[7px] text-gray_800 text-justify w-auto"
                          variant="body15"
                        ></Text>
                      </div>
                      <Text
                        className="mt-1 text-gray_600 text-justify w-auto"
                        variant="body15"
                      >
                        1 Units
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray_50 w-full" />
                  <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                      <Img
                        src="images/img_bg.png"
                        className="h-[90px] md:h-auto object-cover w-full"
                        alt="bg"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] justify-start w-[88%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[5px] w-full">
                        <Text
                          className="text-gray_600 text-left w-auto"
                          variant="body15"
                        >
                          #65465465484654
                        </Text>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] text-gray_900 text-left w-auto"
                            variant="body15"
                          >
                            Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                            Wi-Fi and NFC (Black)(Renewed)
                          </Text>
                          <Text
                            className="font-futuramaxicgbook sm:mt-0 mt-2 text-gray_800 text-justify w-auto"
                            variant="body15"
                          >
                            July 24, 2022
                          </Text>
                          <Button
                            className="cursor-pointer font-futuramaxicgbook font-normal mb-7 min-w-[102px] sm:mt-0 mt-0.5 text-center text-gray_800 text-xs w-auto"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="FillRed4004c"
                          >
                            Canceled
                          </Button>
                          <Text
                            className="font-futuramaxicgbook sm:mt-0 mt-[7px] text-gray_800 text-justify w-auto"
                            variant="body15"
                          ></Text>
                        </div>
                      </div>
                      <Text
                        className="text-gray_600 text-justify w-auto"
                        variant="body15"
                      >
                        1 Units
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_900 flex flex-col font-futuramaxicgbold inset-x-[0] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 top-[13%] w-full">
            <Text
              className="mb-2 text-center text-yellow_A700_01 uppercase w-auto"
              variant="body3"
            ></Text>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-start justify-start mt-[71px] py-20 self-stretch w-auto md:w-full">
          <div className="h-[460px] md:h-[957px] md:px-5 relative w-[1621px] md:w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[69%]">
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
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
                <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
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
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[32%]">
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
            <Line className="absolute bg-blue_gray_50 h-px right-[0] top-[0] w-[59%]" />
          </div>
        </div>
        <Footer1 className="flex font-inter items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ORDERSPage;
