import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Frame48095563Buttonmd from "components/Frame48095563Buttonmd";

import { CloseSVG } from "../../assets/images";

const CARTMODALPage = () => {
  const [fieldonevalue, setFieldonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700_01 flex font-futuramaxicgbook h-[1203px] justify-end mx-auto relative w-full">
        <div className="h-[1267px] mt-auto mx-auto md:px-5 w-full">
          <header className="flex flex-col font-futuramaxicgdemi items-center justify-center mb-[-14.75px] mx-auto w-full z-[1]">
            <div className="bg-gray_900 flex flex-col items-center justify-center pb-[13px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="h-[49px] sm:h-[50px] md:h-[88px] relative w-full">
                  <div className="absolute bg-yellow_A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto px-[13px] top-[0] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-col h-11 md:h-auto items-start justify-between max-w-[1438px] w-full">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between max-w-[1438px] sm:px-5 px-6 w-full">
                          <div className="flex sm:flex-1 flex-col items-center justify-end p-[7px] w-auto sm:w-full">
                            <Text
                              className="mt-[9px] text-gray_900 text-left w-auto"
                              variant="body15"
                            >
                              Follow Us and get a chance to win 80% off
                            </Text>
                          </div>
                          <Text
                            className="text-gray_900 text-left w-auto"
                            variant="body15"
                          >
                            UNITED STATES
                          </Text>
                          <Img
                            src="images/img_folder.svg"
                            className="h-3 w-auto"
                            alt="folder"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-6 md:ml-[0] ml-[5px] relative w-[5%] md:w-full">
                      <Text
                        className="absolute h-max inset-y-[0] left-[0] my-auto text-gray_900 text-left w-auto"
                        variant="body15"
                      >
                        ENGLISH
                      </Text>
                      <Img
                        src="images/img_mdtranslate.svg"
                        className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                        alt="mdtranslate"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-between my-auto right-[6%] w-[9%]">
                    <Line className="bg-gray_900 h-12 w-px" />
                    <Line className="bg-gray_900 h-[50px] w-px" />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[15px] w-[95%] md:w-full">
                  <Img
                    src="images/img_group451.png"
                    className="h-[51px] sm:h-auto object-cover w-[12%] md:w-full"
                    alt="group451"
                  />
                  <Input
                    value={fieldonevalue}
                    onChange={(e) => setFieldonevalue(e)}
                    wrapClassName="flex md:ml-[0] ml-[62px] md:mt-0 my-0.5 w-[48%] md:w-full"
                    className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_700 text-gray_700 text-left text-xs w-full"
                    name="field_One"
                    placeholder="Search Products"
                    suffix={
                      <div className="h-[18px] ml-[35px] w-[18px] bg-gray_600">
                        {fieldonevalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer my-auto"
                            onClick={() => setFieldonevalue("")}
                            fillColor="#5e5d5d"
                            height={18}
                            width={18}
                            viewBox="0 0 18 18"
                          />
                        ) : (
                          <Img
                            src="images/img_search.svg"
                            className="cursor-pointer my-auto"
                            alt="search"
                          />
                        )}
                      </div>
                    }
                    shape="srcCircleBorder23"
                    size="smSrc"
                    variant="srcFillWhiteA70001"
                  ></Input>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[122px] md:ml-[0] ml-[99px] md:mt-0 my-2.5 w-auto"
                    leftIcon={
                      <Img
                        src="images/img_menu.svg"
                        className="mt-[3px] mb-px mr-2"
                        alt="menu"
                      />
                    }
                    shape="RoundedBorder15"
                    size="sm"
                    variant="FillYellowA700"
                  >
                    <div className="font-bold font-montserrat text-center text-gray_900 text-sm tracking-[0.20px]">
                      Feedback
                    </div>
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[31px] items-center justify-end ml-3 md:ml-[0] p-[5px] rounded-[15px] w-[8%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group87.svg')" }}
                  >
                    <div className="flex flex-row gap-2 items-start justify-center w-[83%] md:w-full">
                      <Img
                        src="images/img_supporticon13.png"
                        className="h-3.5 md:h-auto object-cover w-3.5"
                        alt="supporticonThirteen"
                      />
                      <a
                        href="javascript:"
                        className="font-bold text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                      >
                        <Text className="">Support</Text>
                      </a>
                    </div>
                  </div>
                  <Img
                    src="images/img_cart.svg"
                    className="h-4 ml-7 md:ml-[0] w-[15px]"
                    alt="cart"
                  />
                  <Text
                    className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                    variant="body15"
                  >
                    1
                  </Text>
                  <Img
                    src="images/img_location.svg"
                    className="h-4 md:ml-[0] ml-[18px] w-4"
                    alt="location"
                  />
                  <Text
                    className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                    variant="body15"
                  >
                    1
                  </Text>
                  <Img
                    src="images/img_user.svg"
                    className="h-3 md:ml-[0] ml-[18px] w-3"
                    alt="user"
                  />
                  <Text
                    className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                    variant="body15"
                  >
                    Login / Register
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[19px] p-[9px] w-[54%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[34px] text-center text-yellow_A700 w-auto"
                    variant="body15"
                  >
                    All Categories
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-2 md:ml-[0] ml-[11px] w-auto"
                    alt="arrowdown_One"
                  />
                  <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start md:ml-[0] mx-[17px] self-stretch w-auto md:w-full">
                    <Text
                      className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                      variant="body15"
                    >
                      Camera & Photo
                    </Text>
                    <Text
                      className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                      variant="body15"
                    >
                      Computers & Accesories
                    </Text>
                    <Text
                      className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                      variant="body15"
                    >
                      Home Appliances
                    </Text>
                    <Text
                      className="text-center text-white_A700_01 w-auto"
                      variant="body15"
                    >
                      Smart Home
                    </Text>
                    <Text
                      className="text-center text-white_A700_01 w-auto"
                      variant="body15"
                    >
                      Smartphones
                    </Text>
                    <Text
                      className="text-center text-white_A700_01 w-auto"
                      variant="body15"
                    >
                      Tv & Video
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div
            className="bg-cover bg-gray_900 bg-no-repeat h-[1074px] sm:h-[529px] md:h-[665px] mt-auto mx-auto p-[23px] sm:px-5 shadow-bs7 w-full"
            style={{ backgroundImage: "url('images/img_financeversion.png')" }}
          >
            <div className="absolute bottom-[2%] sm:h-[529px] md:h-[665px] h-[926px] right-[6%] w-[77%] md:w-full">
              <div className="absolute sm:h-[529px] md:h-[605px] h-[647px] left-[4%] top-[0] w-[78%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
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
                      <div className="bg-gray_900_99 border-solid flex flex-col font-futuramaxicgdemi items-start justify-start sm:px-5 px-8 py-6 rounded-lg self-stretch md:w-full">
                        <div className="flex md:flex-col flex-row gap-7 items-end justify-between w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[81%] md:w-full">
                            <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                              <div className="flex flex-col font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                                <Text
                                  className="text-left text-white_A700_ab w-auto"
                                  variant="body15"
                                >
                                  Search Products
                                </Text>
                              </div>
                              <Input
                                wrapClassName="flex max-w-[655px] w-full"
                                className="font-dmsans font-normal italic p-0 placeholder:text-gray_50_01 text-gray_50_01 text-left text-lg w-full"
                                type="number"
                                name="field"
                                placeholder="headphones"
                                suffix={
                                  <Img
                                    src="images/img_icon_gray_50_01.svg"
                                    className="mt-0.5 mb-[5px] ml-[35px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder6"
                                size="md"
                                variant="FillBluegray90003"
                              ></Input>
                            </div>
                          </div>
                          <Frame48095563Buttonmd
                            className="bg-yellow_A700 flex sm:flex-1 flex-col gap-2.5 items-center justify-start md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] self-stretch w-auto sm:w-full"
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
                </div>
                <Text
                  className="absolute bottom-[38%] font-normal right-[2%] text-gray_900_02 text-left w-auto"
                  variant="body12"
                >
                  Order Total
                </Text>
              </div>
              <div className="absolute bg-white_A700_01 bottom-[0] flex md:flex-col flex-row gap-[30px] items-center justify-between left-[0] self-stretch shadow-bs11 w-auto">
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
              <div className="absolute md:h-[23px] h-[42px] right-[0] top-[41%] w-[10%]">
                <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <Text
                      className="text-left text-purple_900 w-auto"
                      variant="body6"
                    >
                      $ 1,039.95
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[33px] mt-[-0.67px] w-[21px] z-[1]">
                    <Img
                      src="images/img_arrowdown_teal_300.svg"
                      className="h-5 rounded-[50%] w-[21px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Text
                  className="absolute bottom-[5%] font-futuramaxicgdemi right-[26%] text-gray_600_a0 text-left w-auto"
                  variant="body15"
                >
                  USDT
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] font-futuramaxicgdemi inset-x-[0] mx-auto overflow-x-auto w-full">
          <div className="bg-gray_800_bf h-[1132px] sm:h-[675px] md:h-[811px] overflow-auto pb-[455px] pl-[455px] md:px-5 relative w-full">
            <div className="absolute sm:h-[675px] h-[677px] md:h-[811px] right-[0] top-[0] w-[62%] md:w-full">
              <div className="absolute sm:h-[675px] h-[677px] md:h-[811px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                <div className="absolute bg-white_A700_01 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-[41px] md:px-10 sm:px-5 w-[93%]">
                  <Text
                    className="font-futuramaxicgbold md:ml-[0] ml-[3px] text-gray_900_02 text-left w-auto"
                    variant="body3"
                  >
                    Cart
                  </Text>
                  <div className="flex md:flex-col flex-row font-hind md:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-[57px] w-[97%] md:w-full">
                    <Text
                      className="font-light md:mt-0 mt-1 text-gray_900 text-left uppercase w-auto"
                      variant="body14"
                    >
                      Item
                    </Text>
                    <Text
                      className="font-light mb-1 md:ml-[0] ml-[398px] text-gray_900 text-left uppercase w-auto"
                      variant="body14"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-light mb-[3px] md:ml-[0] ml-[110px] text-gray_900 text-left uppercase w-auto"
                      variant="body14"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="font-light mb-1 md:ml-[0] ml-[98px] text-gray_900 text-left uppercase w-auto"
                      variant="body14"
                    >
                      Subtotal
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-futuramaxicgbook font-normal mb-[7px] md:ml-[0] ml-[517px] mt-[430px] text-center text-gray_900_02 text-xs w-[302px]"
                    shape="CircleBorder21"
                    size="md"
                    variant="FillYellowA70001"
                  >
                    Procesed to Checkout
                  </Button>
                </div>
                <div className="absolute flex flex-col items-start justify-start right-[0] top-[29%] w-[96%]">
                  <div className="flex flex-col md:gap-10 gap-[83px] justify-start w-[87%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[16%] md:w-full">
                        <Img
                          src="images/img_bg.png"
                          className="h-[127px] md:h-auto object-cover w-full"
                          alt="bg"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[11px] md:mt-0 mt-[53px] w-auto md:w-full">
                        <Text
                          className="leading-[18.00px] text-gray_900_02 text-left tracking-[-0.07px]"
                          variant="body13"
                        >
                          <>
                            V-Series 65&quot; Class 4K <br />
                            HDR Smart TV V655-G9
                          </>
                        </Text>
                      </div>
                      <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[51px] relative w-[11%] md:w-full">
                        <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                          <div className="flex flex-col items-center justify-start mx-auto w-full">
                            <Text
                              className="font-normal text-left text-purple_900 w-auto"
                              variant="body12"
                            >
                              $ 1,039.95
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-[21px] mt-[-0.54px] w-[21px] z-[1]">
                            <Img
                              src="images/img_arrowdown_teal_300.svg"
                              className="h-5 rounded-[50%] w-[21px]"
                              alt="arrowdown_Two"
                            />
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                          variant="body16"
                        >
                          USDT
                        </Text>
                      </div>
                      <div className="bg-white_A700_01 border border-gray_400 border-solid flex md:flex-1 flex-row font-roboto items-center justify-end mb-[41px] md:ml-[0] ml-[78px] md:mt-0 mt-11 pl-[9px] py-[9px] rounded-[21px] w-[12%] md:w-full">
                        <Text
                          className="font-light my-0.5 text-gray_700_01 text-left w-auto"
                          variant="body12"
                        >
                          -
                        </Text>
                        <Text
                          className="font-medium ml-2.5 my-0.5 text-gray_700_01 text-left w-auto"
                          variant="body12"
                        >
                          1
                        </Text>
                        <Text
                          className="font-light ml-3 my-0.5 text-gray_700_01 text-left w-auto"
                          variant="body12"
                        >
                          +
                        </Text>
                        <Img
                          src="images/img_close.svg"
                          className="h-[19px] mb-[5px] ml-[290px] w-5"
                          alt="close"
                        />
                      </div>
                      <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[11%] md:w-full">
                        <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                          <div className="flex flex-col items-center justify-start mx-auto w-full">
                            <Text
                              className="font-normal text-left text-purple_900 w-auto"
                              variant="body12"
                            >
                              $ 1,039.95
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-[21px] mt-[-0.54px] w-[21px] z-[1]">
                            <Img
                              src="images/img_arrowdown_teal_300.svg"
                              className="h-5 rounded-[50%] w-[21px]"
                              alt="arrowdown_Three"
                            />
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                          variant="body16"
                        >
                          USDT
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[135px] w-auto md:w-full">
                      <Text
                        className="leading-[18.00px] text-gray_900_02 text-left tracking-[-0.07px]"
                        variant="body13"
                      >
                        <>
                          V-Series 65&quot; Class 4K <br />
                          HDR Smart TV V655-G9
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[29%] flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[131px] right-[0] w-[96%]">
                <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
                  <Img
                    src="images/img_bg_127x122.png"
                    className="h-[127px] md:h-auto object-cover w-full"
                    alt="bg_One"
                  />
                </div>
                <div className="md:h-5 h-9 md:ml-[0] ml-[271px] md:mt-0 mt-[53px] relative w-[11%] md:w-full">
                  <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                    <Text
                      className="font-normal mx-auto text-left text-purple_900 w-auto"
                      variant="body12"
                    >
                      $ 1,039.95
                    </Text>
                    <div className="flex flex-col items-center justify-start ml-[22px] mt-[-0.54px] w-[21px] z-[1]">
                      <Img
                        src="images/img_arrowdown_teal_300.svg"
                        className="h-5 rounded-[50%] w-[21px]"
                        alt="arrowdown_Four"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[14%] font-futuramaxicgdemi right-[18%] text-gray_600_a0 text-left w-auto"
                    variant="body16"
                  >
                    USDT
                  </Text>
                </div>
                <div className="bg-white_A700_01 border border-gray_400 border-solid flex flex-row items-center justify-end md:ml-[0] ml-[79px] md:mt-0 my-[42px] pl-[9px] py-[9px] rounded-[21px] w-[12%] md:w-full">
                  <Text
                    className="font-light my-0.5 text-gray_700_01 text-left w-auto"
                    variant="body12"
                  >
                    -
                  </Text>
                  <Text
                    className="font-medium ml-2.5 my-0.5 text-gray_700_01 text-left w-auto"
                    variant="body12"
                  >
                    1
                  </Text>
                  <Text
                    className="font-light ml-3 my-0.5 text-gray_700_01 text-left w-auto"
                    variant="body12"
                  >
                    +
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="h-[19px] mb-[5px] ml-[299px] w-5"
                    alt="close_One"
                  />
                </div>
                <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[11%] md:w-full">
                  <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                    <div className="flex flex-col items-center justify-start mx-auto w-full">
                      <Text
                        className="font-normal text-left text-purple_900 w-auto"
                        variant="body12"
                      >
                        $ 1,039.95
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[21px] mt-[-0.54px] w-[21px] z-[1]">
                      <Img
                        src="images/img_arrowdown_teal_300.svg"
                        className="h-5 rounded-[50%] w-[21px]"
                        alt="arrowdown_Five"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                    variant="body16"
                  >
                    USDT
                  </Text>
                </div>
              </div>
              <Line className="absolute bg-blue_gray_50 h-px inset-y-[0] left-[5%] my-auto w-[87%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CARTMODALPage;
