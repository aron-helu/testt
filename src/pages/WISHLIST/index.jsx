import React from "react";

import { Img, Line, List, Text } from "components";
import ACCOUNTColumnhistory from "components/ACCOUNTColumnhistory";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const WISHLISTPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="sm:h-[1211px] h-[1518px] md:h-[1920px] md:px-5 relative w-full">
          <div className="sm:h-[1211px] h-[1518px] md:h-[1920px] m-auto w-full">
            <Header1 className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            <div className="flex flex-col h-full items-center justify-start ml-[166px] mt-[534px] w-[9%]">
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
                    Wishlist
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-futuramaxicgbold h-full inset-[0] items-center justify-center m-auto p-[77px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group104.png')" }}
            >
              <div className="flex flex-col items-start justify-start mt-[565px] w-[86%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[307px] text-gray_900 text-justify w-auto"
                  variant="body6"
                >
                  Hi Jeniffer Hurtado Coronado!
                </Text>
                <div className="flex md:flex-col flex-row font-futuramaxicgdemi md:gap-10 items-start justify-between mt-[50px] w-full">
                  <ACCOUNTColumnhistory
                    className="flex md:flex-1 flex-col items-center justify-start shadow-bs4 w-auto md:w-full"
                    history="Account Details"
                    userOne="images/img_user_gray_600.svg"
                    historyOne="Addresses"
                    lineeleven="images/img_line11.svg"
                    historyTwo="Wishlist"
                    contrast="images/img_favorite.svg"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[76%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-[53%] md:w-full">
                        <Text
                          className="mt-1.5 text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Item
                        </Text>
                        <Text
                          className="mb-1.5 text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Price
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row font-futuramaxicgbook md:gap-5 items-start justify-start mt-[47px] w-4/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-[12%] md:w-full">
                          <Img
                            src="images/img_bg.png"
                            className="h-[90px] md:h-auto object-cover w-full"
                            alt="bg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[38%] md:w-full">
                          <Text
                            className="font-futuramaxicgbook ml-0.5 md:ml-[0] text-gray_600 text-left w-auto"
                            variant="body15"
                          >
                            Digital Cameras
                          </Text>
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] ml-0.5 md:ml-[0] mt-1 text-gray_900 text-left w-full"
                            variant="body15"
                          >
                            Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                            Wi-Fi and NFC (Black)(Renewed)
                          </Text>
                          <div className="flex flex-row font-futuramaxicgbook items-start justify-start mt-[3px] w-1/4 md:w-full">
                            <Img
                              src="images/img_trash.svg"
                              className="h-4 w-4"
                              alt="trash"
                            />
                            <div className="h-3.5 md:h-4 ml-1 mt-0.5 relative w-[72%]">
                              <Text
                                className="m-auto text-gray_600 text-justify w-auto"
                                variant="body15"
                              >
                                Remove
                              </Text>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-justify w-max"
                                variant="body15"
                              >
                                Remove
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-3.5 md:ml-[0] ml-[46px] md:mt-0 mt-[27px] relative w-[13%] md:w-full">
                          <Text
                            className="m-auto text-gray_800 text-justify w-auto"
                            variant="body15"
                          ></Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-gray_800 text-justify w-max"
                            variant="body15"
                          ></Text>
                        </div>
                        <div className="bg-yellow_A700_01 font-futuramaxicgdemi h-[42px] md:h-[72px] mb-9 md:ml-[0] ml-[88px] md:mt-0 mt-[15px] sm:px-5 px-[30px] py-2.5 relative rounded-[21px] w-[131px]">
                          <Text
                            className="font-normal m-auto text-center text-gray_900 tracking-[0.20px] w-auto"
                            variant="body14"
                          >
                            Buy Now
                          </Text>
                          <div className="absolute bg-yellow_A700_01 flex flex-col h-full inset-[0] items-center justify-end m-auto sm:px-5 px-[30px] py-2.5 rounded-[21px] self-stretch w-auto">
                            <Text
                              className="font-normal text-center text-gray_900 tracking-[0.20px] w-auto"
                              variant="body14"
                            >
                              Buy Now
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray_50 h-px ml-0.5 md:ml-[0] mt-[41px] w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-futuramaxicgbook items-start justify-start md:ml-[0] ml-[307px] mt-[26px] w-[76%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-4/5 md:w-full">
                    <div className="h-[90px] relative w-[12%] md:w-full">
                      <Img
                        src="images/img_bg.png"
                        className="h-[90px] m-auto object-cover w-full"
                        alt="bg_One"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          src="images/img_bg.png"
                          className="h-[90px] md:h-auto object-cover w-full"
                          alt="bg_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[38%] md:w-full">
                      <div className="h-3.5 ml-0.5 md:ml-[0] relative w-[35%]">
                        <Text
                          className="m-auto text-gray_600 text-left w-auto"
                          variant="body15"
                        >
                          Digital Cameras
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-left w-max"
                          variant="body15"
                        >
                          Digital Cameras
                        </Text>
                      </div>
                      <div className="font-futuramaxicgdemi h-[54px] md:h-[58px] ml-0.5 md:ml-[0] mt-1 relative w-full">
                        <Text
                          className="leading-[18.00px] m-auto text-gray_900 text-left w-full"
                          variant="body15"
                        >
                          Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                          Wi-Fi and NFC (Black)(Renewed)
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center leading-[18.00px] m-auto text-gray_900 text-left w-full"
                          variant="body15"
                        >
                          Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                          Wi-Fi and NFC (Black)(Renewed)
                        </Text>
                      </div>
                      <div className="flex flex-row font-futuramaxicgbook items-start justify-start mt-[3px] w-1/4 md:w-full">
                        <Img
                          src="images/img_trash.svg"
                          className="h-4 w-4"
                          alt="trash_One"
                        />
                        <div className="h-3.5 md:h-4 ml-1 mt-0.5 relative w-[72%]">
                          <Text
                            className="m-auto text-gray_600 text-justify w-auto"
                            variant="body15"
                          >
                            Remove
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-justify w-max"
                            variant="body15"
                          >
                            Remove
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-3.5 md:ml-[0] ml-[46px] md:mt-0 mt-[27px] relative w-[13%] md:w-full">
                      <Text
                        className="m-auto text-gray_800 text-justify w-auto"
                        variant="body15"
                      ></Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-gray_800 text-justify w-max"
                        variant="body15"
                      ></Text>
                    </div>
                    <div className="bg-yellow_A700_01 font-futuramaxicgdemi h-[42px] md:h-[72px] mb-9 md:ml-[0] ml-[88px] md:mt-0 mt-[15px] sm:px-5 px-[30px] py-2.5 relative rounded-[21px] w-[131px]">
                      <Text
                        className="font-normal m-auto text-center text-gray_900 tracking-[0.20px] w-auto"
                        variant="body14"
                      >
                        Buy Now
                      </Text>
                      <div className="absolute bg-yellow_A700_01 flex flex-col h-full inset-[0] items-center justify-end m-auto sm:px-5 px-[30px] py-2.5 rounded-[21px] self-stretch w-auto">
                        <Text
                          className="font-normal text-center text-gray_900 tracking-[0.20px] w-auto"
                          variant="body14"
                        >
                          Buy Now
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[43px] h-px mt-[42px] relative w-full">
                    <Line className="bg-blue_gray_50 h-px m-auto w-full" />
                    <Line className="absolute bg-blue_gray_50 h-px inset-[0] justify-center m-auto w-full" />
                  </div>
                  <List
                    className="flex-col gap-[39.5px] grid ml-0.5 md:ml-[0] mt-[37px] w-4/5"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[12%] md:w-full">
                        <Img
                          src="images/img_bg.png"
                          className="h-[90px] md:h-auto object-cover w-full"
                          alt="bg"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[23px] w-[38%] md:w-full">
                        <Text
                          className="font-futuramaxicgbook ml-0.5 md:ml-[0] text-gray_600 text-left w-auto"
                          variant="body15"
                        >
                          Digital Cameras
                        </Text>
                        <Text
                          className="font-futuramaxicgdemi leading-[18.00px] ml-0.5 md:ml-[0] mt-1 text-gray_900 text-left w-full"
                          variant="body15"
                        >
                          Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                          Wi-Fi and NFC (Black)(Renewed)
                        </Text>
                        <div className="flex flex-row font-futuramaxicgbook items-start justify-start mt-[3px] w-1/4 md:w-full">
                          <Img
                            src="images/img_trash.svg"
                            className="h-4 w-4"
                            alt="trash"
                          />
                          <div className="h-3.5 md:h-4 ml-1 mt-0.5 relative w-[72%]">
                            <Text
                              className="m-auto text-gray_600 text-justify w-auto"
                              variant="body15"
                            >
                              Remove
                            </Text>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-justify w-max"
                              variant="body15"
                            >
                              Remove
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-3.5 md:ml-[0] ml-[46px] md:mt-0 mt-[27px] relative w-[13%] md:w-full">
                        <Text
                          className="m-auto text-gray_800 text-justify w-auto"
                          variant="body15"
                        ></Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-gray_800 text-justify w-max"
                          variant="body15"
                        ></Text>
                      </div>
                      <div className="bg-yellow_A700_01 font-futuramaxicgdemi h-[42px] md:h-[72px] mb-9 md:ml-[0] ml-[88px] md:mt-0 mt-[15px] sm:px-5 px-[30px] py-2.5 relative rounded-[21px] w-[131px]">
                        <Text
                          className="font-normal m-auto text-center text-gray_900 tracking-[0.20px] w-auto"
                          variant="body14"
                        >
                          Buy Now
                        </Text>
                        <div className="absolute bg-yellow_A700_01 flex flex-col h-full inset-[0] items-center justify-end m-auto sm:px-5 px-[30px] py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_900 tracking-[0.20px] w-auto"
                            variant="body14"
                          >
                            Buy Now
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray_50 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="h-[90px] relative w-[12%] md:w-full">
                        <Img
                          src="images/img_bg.png"
                          className="h-[90px] m-auto object-cover w-full"
                          alt="bg"
                        />
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <Img
                            src="images/img_bg.png"
                            className="h-[90px] md:h-auto object-cover w-full"
                            alt="bg_One"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[23px] w-[38%] md:w-full">
                        <div className="h-3.5 ml-0.5 md:ml-[0] relative w-[35%]">
                          <Text
                            className="m-auto text-gray_600 text-left w-auto"
                            variant="body15"
                          >
                            Digital Cameras
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-left w-max"
                            variant="body15"
                          >
                            Digital Cameras
                          </Text>
                        </div>
                        <div className="font-futuramaxicgdemi h-[54px] md:h-[58px] ml-0.5 md:ml-[0] mt-1 relative w-full">
                          <Text
                            className="leading-[18.00px] m-auto text-gray_900 text-left w-full"
                            variant="body15"
                          >
                            Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                            Wi-Fi and NFC (Black)(Renewed)
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center leading-[18.00px] m-auto text-gray_900 text-left w-full"
                            variant="body15"
                          >
                            Nikon D7200 24.2 MP DX-Format Digital SLR Body with
                            Wi-Fi and NFC (Black)(Renewed)
                          </Text>
                        </div>
                        <div className="flex flex-row font-futuramaxicgbook items-start justify-start mt-[3px] w-1/4 md:w-full">
                          <Img
                            src="images/img_trash.svg"
                            className="h-4 w-4"
                            alt="trash"
                          />
                          <div className="h-3.5 md:h-4 ml-1 mt-0.5 relative w-[72%]">
                            <Text
                              className="m-auto text-gray_600 text-justify w-auto"
                              variant="body15"
                            >
                              Remove
                            </Text>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-gray_600 text-justify w-max"
                              variant="body15"
                            >
                              Remove
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-3.5 md:ml-[0] ml-[46px] md:mt-0 mt-[27px] relative w-[13%] md:w-full">
                        <Text
                          className="m-auto text-gray_800 text-justify w-auto"
                          variant="body15"
                        ></Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-gray_800 text-justify w-max"
                          variant="body15"
                        ></Text>
                      </div>
                      <div className="bg-yellow_A700_01 font-futuramaxicgdemi h-[42px] md:h-[72px] mb-9 md:ml-[0] ml-[88px] md:mt-0 mt-[15px] sm:px-5 px-[30px] py-2.5 relative rounded-[21px] w-[131px]">
                        <Text
                          className="font-normal m-auto text-center text-gray_900 tracking-[0.20px] w-auto"
                          variant="body14"
                        >
                          Buy Now
                        </Text>
                        <div className="absolute bg-yellow_A700_01 flex flex-col h-full inset-[0] items-center justify-end m-auto sm:px-5 px-[30px] py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_900 tracking-[0.20px] w-auto"
                            variant="body14"
                          >
                            Buy Now
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="md:h-[43px] h-px ml-0.5 md:ml-[0] mt-[42px] relative w-full">
                    <Line className="bg-blue_gray_50 h-px m-auto w-full" />
                    <Line className="absolute bg-blue_gray_50 h-px inset-[0] justify-center m-auto w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_900 flex flex-col font-futuramaxicgbold inset-x-[0] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 top-[13%] w-full">
            <Text
              className="mb-2 text-center text-yellow_A700_01 uppercase w-auto"
              variant="body3"
            >
              WISHLIST
            </Text>
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

export default WISHLISTPage;
