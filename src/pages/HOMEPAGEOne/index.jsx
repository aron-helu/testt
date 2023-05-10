import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import CARTPAGECard from "components/CARTPAGECard";
import HOMEPAGEArrowleft from "components/HOMEPAGEArrowleft";
import HOMEPAGEArrowright from "components/HOMEPAGEArrowright";
import HOMEPAGEButtonsm from "components/HOMEPAGEButtonsm";
import HOMEPAGEButtonsm1 from "components/HOMEPAGEButtonsm1";
import HOMEPAGEListbluetooth from "components/HOMEPAGEListbluetooth";
import HOMEPAGEOneColmd from "components/HOMEPAGEOneColmd";
import HOMEPAGEOneColumnNineteen from "components/HOMEPAGEOneColumnNineteen";
import HOMEPAGEOneColumnTwelve from "components/HOMEPAGEOneColumnTwelve";
import HOMEPAGERowproductcoverfive from "components/HOMEPAGERowproductcoverfive";

import { CloseSVG } from "../../assets/images";

const HOMEPAGEOnePage = () => {
  const homepageOneColmdPropList = [
    {
      h2: (
        <>
          DSLR <br />
          CAMERAS
        </>
      ),
      imageone: "images/img_image1_294x312.png",
    },
    {
      h2: (
        <>
          SMART
          <br />
          WATCHS
        </>
      ),
      imageone: "images/img_image1_1.png",
    },
    {
      h2: (
        <>
          OLED........
          <br />
          TVS ........
        </>
      ),
      imageone: "images/img_productcover5.png",
    },
  ];
  const [fieldvalue, setFieldvalue] = React.useState("");
  const homepageRowproductcoverfivePropList = [
    { productcoverfive: "images/img_productcover5_178x209.png" },
    { productcoverfive: "images/img_productcover5_1.png" },
    { productcoverfive: "images/img_productcover5_2.png" },
    { productcoverfive: "images/img_image1_1.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgbold items-start justify-start mx-auto pb-[1161px] w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-full">
          <div className="md:h-[1819px] sm:h-[2737px] h-[2800px] relative w-full">
            <div className="absolute md:h-[1819px] h-[2400px] sm:h-[2737px] inset-x-[0] mx-auto overflow-auto top-[1%] w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto pr-0.5 py-20 self-stretch top-[30%] w-auto">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1954px] w-full"
                  orientation="horizontal"
                >
                  {homepageOneColmdPropList.map((props, index) => (
                    <React.Fragment key={`HOMEPAGEOneColmd${index}`}>
                      <HOMEPAGEOneColmd
                        className="h-[317px] relative w-full"
                        h6="Featured"
                        h6One="Explore Items"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
              <div className="bg-gray_900 flex flex-col h-full items-center justify-end ml-auto mt-44 p-[111px] md:px-10 sm:px-5 w-auto md:w-full">
                <Text
                  className="leading-[75.00px] text-center text-yellow_A700 tracking-[2.14px]"
                  as="h4"
                  variant="h4"
                >
                  <>
                    Feel Free to shop with almost any <br />
                    cryptocurrency
                  </>
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-end my-auto py-[337px] right-[0] w-[84%] md:w-full"
                style={{ backgroundImage: "url('images/img_group152.png')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start mt-[360px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[507px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-[459px] sm:w-full">
                      <Text
                        className="text-center text-gray_900 w-auto"
                        variant="body4"
                      >
                        Explore our top categories
                      </Text>
                    </div>
                    <div className="flex flex-col relative w-full">
                      <div className="bg-gray_900 flex flex-col items-center justify-start max-w-[1621px] mx-auto py-[100px] w-full">
                        <div className="flex flex-col items-center justify-start max-w-[1175px] pb-10 pt-2 w-full">
                          <div className="flex flex-col gap-[50px] items-center justify-start pb-[42px] md:px-10 sm:px-5 px-[42px] w-full">
                            <div className="flex flex-col font-futuramaxicgbold items-start justify-start max-w-[970px] w-full">
                              <Text
                                className="font-normal text-center text-white_A700_01"
                                variant="body1"
                              ></Text>
                            </div>
                            <Text
                              className="font-futuramaxicgbook text-center text-white_A700_01 w-auto"
                              variant="body10"
                            >
                              Experience how easy it is to buy your daily life
                              products, without intermediaries, using a crypto
                              wallet.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center max-w-[1175px] ml-auto mr-[188px] mt-[-155px] py-2.5 w-full z-[1]">
                        <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs10 w-full">
                          <div className="bg-gray_900 flex flex-col h-[69px] md:h-auto items-center justify-center mt-[26px] rounded-[34px] w-[69px]">
                            <Img
                              src="images/img_bitcoinsvgrepocom.svg"
                              className="h-[69px] rounded-[34px] w-[69px]"
                              alt="bitcoinsvgrepoc"
                            />
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-[58px] text-blue_gray_900_01 text-left w-auto"
                            variant="body6"
                          >
                            WEB 3.0 Payments
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[49px] mt-[42px] text-center text-gray_600_04"
                            variant="body14"
                          >
                            <>
                              Through various Blockchain <br />
                              Networks / Wallets
                            </>
                          </Text>
                        </div>
                        <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-center p-[54px] md:px-10 sm:px-5 rounded-[16px] shadow-bs10 w-full">
                          <div className="h-[70px] md:h-[72px] mt-0.5 relative w-[85px]">
                            <div className="bg-gray_900 h-[69px] m-auto rounded-[34px] w-[69px]"></div>
                            <div className="absolute h-[70px] inset-[0] justify-center m-auto px-[7px] w-full">
                              <Img
                                src="images/img_bag.svg"
                                className="h-[50px] m-auto w-[50px]"
                                alt="bag"
                              />
                              <Img
                                src="images/img_contrast_yellow_a700.svg"
                                className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                                alt="contrast"
                              />
                            </div>
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-[38px] text-blue_gray_900_01 text-center w-auto"
                            variant="body7"
                          >
                            Wide selection of electronic goods
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[27px] mt-[23px] text-center text-gray_600_04 w-[98%] sm:w-full"
                            variant="body14"
                          >
                            +70,000 products to explore from large marketplaces
                          </Text>
                        </div>
                        <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-center p-[29px] sm:px-5 rounded-[16px] shadow-bs10 w-full">
                          <div className="bg-gray_900 flex flex-col h-[69px] md:h-auto items-center justify-center mt-[27px] rounded-[34px] w-[69px]">
                            <Img
                              src="images/img_bitcoinsvgrepocom_yellow_a700.svg"
                              className="h-[69px] rounded-[34px] w-[69px]"
                              alt="bitcoinsvgrepoc_One"
                            />
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-[54px] text-blue_gray_900_01 text-left w-auto"
                            variant="body7"
                          >
                            Fast Shipping
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[53px] mt-[38px] text-center text-gray_600_04"
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
                  <div className="flex flex-col items-center justify-start w-[459px] sm:w-full">
                    <Text
                      className="text-center text-gray_900 w-auto"
                      variant="body4"
                    >
                      BESTSELLER PRODUCTS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col font-futuramaxicgbook items-center justify-start right-[3%] w-[79%]">
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-start w-[223px]">
                          <Text
                            className="font-normal text-center text-gray_900 uppercase w-auto"
                            variant="body14"
                          >
                            PC Game Hardware
                          </Text>
                        </div>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto sm:w-full"
                                h6One="Notebooks"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Webcams"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Cameras"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Webcams"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Cameras"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Webcams"
                              />
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <HOMEPAGEButtonsm1
                                  className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                  h6Two="Cameras"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <HOMEPAGEButtonsm1
                                  className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                  h6Two="Cameras"
                                />
                              </div>
                            </List>
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                            <div className="flex flex-col items-start justify-start w-12">
                              <HOMEPAGEArrowleft className="border border-gray_400_02 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12" />
                            </div>
                            <div className="flex flex-col h-[49px] md:h-auto items-start justify-start w-[49px]">
                              <HOMEPAGEArrowright className="border border-solid border-yellow_A700_01 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_200 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  {new Array(4).fill({}).map((props, index) => (
                    <React.Fragment key={`CARTPAGECard${index}`}>
                      <CARTPAGECard
                        className="bg-white_A700_01 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs2 w-full"
                        tag="Sale"
                        linkproductcate="Digital Cameras"
                        p49="4.9"
                        paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                        price="$ 1,039.95"
                        priceOne="USDT"
                        paywith10000="Pay with +10000 cryptocurrencies"
                        addToCart="Add to cart"
                        buyNow="Buy Now"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <header className="absolute flex flex-col font-futuramaxicgdemi items-center justify-center right-[0] top-[0] w-full">
              <div className="bg-gray_900 flex flex-col items-center justify-center pb-[13px] w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="h-[49px] md:h-[88px] relative w-full">
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
                            <Line className="bg-gray_900 h-11 sm:h-px sm:w-full w-px" />
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
                    <Line className="absolute bg-gray_900 h-[49px] inset-y-[0] my-auto right-[6%] w-px" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[15px] w-[96%] md:w-full">
                    <Img
                      src="images/img_group451.png"
                      className="h-[51px] sm:h-auto object-cover w-[12%] md:w-full"
                      alt="group451"
                    />
                    <Input
                      value={fieldvalue}
                      onChange={(e) => setFieldvalue(e)}
                      wrapClassName="flex md:ml-[0] ml-[62px] md:mt-0 my-0.5 w-[48%] md:w-full"
                      className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_700 text-gray_700 text-left text-xs w-full"
                      name="field"
                      placeholder="Search Products"
                      suffix={
                        <div className="h-[18px] ml-[35px] w-[18px] bg-gray_600">
                          {fieldvalue?.length > 0 ? (
                            <CloseSVG
                              className="cursor-pointer my-auto"
                              onClick={() => setFieldvalue("")}
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
                      style={{
                        backgroundImage: "url('images/img_group87.svg')",
                      }}
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[19px] pl-[9px] py-[9px] w-[54%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[34px] text-center text-yellow_A700 w-auto"
                      variant="body15"
                    >
                      All Categories
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-2 md:ml-[0] ml-[11px] w-auto"
                      alt="arrowdown"
                    />
                    <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start max-w-[692px] md:ml-[0] ml-[17px] w-full">
                      <Text
                        className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                        variant="body15"
                      >
                        Best of Electronics
                      </Text>
                      <Text
                        className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                        variant="body15"
                      >
                        Best of Appliances
                      </Text>
                      <Text
                        className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                        variant="body15"
                      >
                        Best of Computers
                      </Text>
                      <Text
                        className="leading-[18.00px] max-w-[138px] md:max-w-full text-center text-white_A700_01"
                        variant="body15"
                      >
                        Best of Audio, Video & Media Players
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
          </div>
          <Text
            className="mt-[121px] text-center text-gray_900 w-auto"
            variant="body4"
          >
            NEW ARRIVALS{" "}
          </Text>
          <div className="flex flex-col font-futuramaxicgbook items-center justify-start mt-[81px] w-[79%] md:w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-[223px]">
                        <Text
                          className="font-normal text-center text-gray_900 uppercase w-auto"
                          variant="body14"
                        >
                          PC Game Hardware
                        </Text>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto sm:w-full"
                              h6One="Notebooks"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm1
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                              h6Two="Webcams"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm1
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                              h6Two="Cameras"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm1
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                              h6Two="Webcams"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm1
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                              h6Two="Cameras"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <HOMEPAGEButtonsm1
                              className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                              h6Two="Webcams"
                            />
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Cameras"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <HOMEPAGEButtonsm1
                                className="flex flex-col gap-2.5 items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto sm:w-full"
                                h6Two="Cameras"
                              />
                            </div>
                          </List>
                        </div>
                        <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-start justify-start w-12">
                            <HOMEPAGEArrowleft className="border border-gray_400_02 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12" />
                          </div>
                          <div className="flex flex-col h-[49px] md:h-auto items-start justify-start w-[49px]">
                            <HOMEPAGEArrowright className="border border-solid border-yellow_A700_01 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_200 h-0.5 w-full" />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {new Array(4).fill({}).map((props, index) => (
                  <React.Fragment key={`CARTPAGECard${index}`}>
                    <CARTPAGECard
                      className="bg-white_A700_01 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs2 w-full"
                      tag="Sale"
                      linkproductcate="Digital Cameras"
                      p49="4.9"
                      paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                      price="$ 1,039.95"
                      priceOne="USDT"
                      paywith10000="Pay with +10000 cryptocurrencies"
                      addToCart="Add to cart"
                      buyNow="Buy Now"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="flex flex-col font-futuramaxicgbold items-center justify-start mt-[111px] w-[84%] md:w-full">
            <div className="bg-white_A700_01 flex flex-col gap-11 items-center justify-start pb-12 md:px-10 px-12 sm:px-5 w-full">
              <Text
                className="leading-[58.00px] text-blue_gray_900_01 text-center tracking-[-0.79px] w-[66%] sm:w-full"
                as="h5"
                variant="h5"
              ></Text>
              <div className="font-futuramaxicgbook md:h-[274px] h-[309px] relative w-[71%] md:w-full">
                <Text
                  className="absolute inset-x-[0] leading-[23.00px] mx-auto text-center text-gray_900 top-[0] tracking-[0.57px] w-[66%] sm:w-full"
                  variant="body9"
                >
                  We are happy to be the leading crypto shopping platform. buy
                  your favorite products instantly and securely with the most
                  popular blockchain networks and wallets
                </Text>
                <HOMEPAGEListbluetooth className="absolute bottom-[0] sm:flex-col flex-row gap-[57px] grid grid-cols-1 inset-x-[0] justify-center mx-auto p-[11px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[110px] w-[88%] md:w-full">
              <HOMEPAGEOneColumnTwelve
                className="flex flex-col items-center justify-start w-auto md:w-full"
                mediumlengthdis="See how work gets done with Source"
                collectionofcom="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisOne="Easy to Use"
                collectionofcomOne="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisTwo="You’re in good company"
                collectionofcomTwo="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisThree="We make sure that everyone is able to use a Source"
                collectionofcomThree="A website wireframe, also known as a page schematic or screen blueprint"
              />
              <div className="flex flex-col md:gap-10 gap-[83px] items-center justify-start w-[34%] md:w-full">
                <Text
                  className="text-center text-gray_900 w-auto"
                  variant="body4"
                >
                  FEATURE PRODUCTS
                </Text>
                <List
                  className="flex-col font-montserrat gap-[39px] grid items-center w-full"
                  orientation="vertical"
                >
                  {homepageRowproductcoverfivePropList.map((props, index) => (
                    <React.Fragment key={`HOMEPAGERowproductcoverfive${index}`}>
                      <HOMEPAGERowproductcoverfive
                        className="bg-white_A700_01 flex sm:flex-1 flex-row items-start justify-start self-stretch shadow-bs7 w-auto sm:w-full"
                        tag="NEW"
                        language="Digital Cameras "
                        p49="4.9"
                        h4posttitle="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                        h6="Learn More"
                        arrowright="images/img_arrowright_purple_900.svg"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <div className="bg-gray_900 flex flex-col items-center justify-start mt-[121px] p-[54px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[42px] items-center justify-start mb-1.5 w-[96%] md:w-full">
                <Text
                  className="text-center text-yellow_A700 w-auto"
                  variant="body4"
                >
                  What our crypto shoppers think
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[0.64]"
                  magnifiedIndex={1}
                  centerMode
                  ref={sliderRef}
                  className="bg-white_A700_01 border border-gray_600_5b border-solid font-futuramaxicglight rounded-[20px] shadow-bs7 w-full"
                  items={[...Array(15)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-8 items-center justify-start mx-2.5 md:pl-10 sm:pl-5 pl-[95px]">
                        <div className="flex flex-col items-end justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="leading-[34.00px] text-gray_900 text-left tracking-[-0.20px]"
                            variant="body7"
                          >
                            <>
                              &quot;I would also like to say thank you to all
                              your <br />
                              staff. It fits our needs perfectly. I don&#39;t
                              know <br />
                              what else to say. Keep up the excellent
                              work.&quot;
                            </>
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-yellow_A700 w-2.5" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray_300 w-2.5"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div className="font-montserrat h-[1610px] sm:h-[1700px] md:h-[3618px] mt-[91px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[364px] items-center justify-start w-full">
                  <div className="bg-white_A700_01 flex flex-col items-center justify-start p-3 w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[73px] w-full">
                      <div className="flex sm:flex-1 flex-col h-[797px] md:h-auto items-start justify-start pb-[47px] self-stretch w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start self-stretch w-auto">
                          <div
                            className="bg-cover bg-no-repeat bg-white_A700_01 border border-blue_200 border-solid h-[796px] md:h-[911px] relative w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_carditem_gray_400_05.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[5px] h-full items-start justify-center mx-auto md:pl-10 pl-12 pr-6 sm:px-5 py-6 w-[389px] sm:w-full">
                              <Text
                                className="font-bold text-blue_gray_900_01 text-left tracking-[0.20px] w-auto"
                                variant="body14"
                              >
                                GAMING
                              </Text>
                              <Text
                                className="font-bold text-gray_600_04 text-left tracking-[0.20px] w-auto"
                                variant="body14"
                              >
                                12 Items
                              </Text>
                            </div>
                            <div className="absolute bg-blue_gray_900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="h-[796px] md:h-[911px] relative w-full">
                                <Img
                                  src="images/img_unsplashryyrk3ysqg.png"
                                  className="h-[796px] m-auto object-cover w-full"
                                  alt="unsplashryyrk3y"
                                />
                                <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                  <div className="flex flex-col items-center justify-start py-28 self-stretch w-auto sm:w-full">
                                    <div className="flex flex-col items-center justify-start w-[389px] sm:w-full">
                                      <div className="flex flex-col gap-[30px] items-center justify-start self-stretch w-auto">
                                        <div className="flex flex-col gap-[30px] items-center justify-start w-auto md:w-full">
                                          <Text
                                            className="font-bold leading-[50.00px] text-center text-white_A700_01 tracking-[0.20px]"
                                            variant="body1"
                                          >
                                            <>
                                              Designing <br />
                                              Better <br />
                                              Experience
                                            </>
                                          </Text>
                                          <Text
                                            className="font-normal leading-[20.00px] not-italic text-center text-white_A700_01 tracking-[0.20px]"
                                            variant="body14"
                                          >
                                            <>
                                              Problems trying to resolve the c
                                              <br />
                                              onflict between the two major
                                              <br /> realms of Classical
                                              physics: <br />
                                              Newtonian mechanics{" "}
                                            </>
                                          </Text>
                                        </div>
                                        <Img
                                          src="images/img_blouse1.png"
                                          className="h-[397px] sm:h-auto object-cover w-[316px] md:w-full"
                                          alt="blouseOne"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CARTPAGECard
                        className="bg-white_A700_01 border border-gray_600_1c border-solid h-[546px] mb-[124px] md:mt-0 mt-[127px] pt-[21px] relative shadow-bs2 w-[23%] md:w-full"
                        tag="Sale"
                        linkproductcate="Digital Cameras"
                        p49="4.9"
                        paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                        price="$ 1,039.95"
                        priceOne="USDT"
                        paywith10000="Pay with +10000 cryptocurrencies"
                        addToCart="Add to cart"
                        buyNow="Buy Now"
                      />
                      <div className="flex md:flex-1 flex-col font-futuramaxicgbold items-start justify-start w-[48%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[22px] text-center text-gray_900 w-auto"
                          variant="body4"
                        >
                          FEATURE PRODUCTS
                        </Text>
                        <List
                          className="sm:flex-col flex-row font-montserrat gap-[31px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[92px] w-full"
                          orientation="horizontal"
                        >
                          <CARTPAGECard
                            className="bg-white_A700_01 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs2 w-full"
                            tag="Sale"
                            linkproductcate="Digital Cameras"
                            p49="4.9"
                            paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                            price="$ 1,039.95"
                            priceOne="USDT"
                            paywith10000="Pay with +10000 cryptocurrencies"
                            addToCart="Add to cart"
                            buyNow="Buy Now"
                          />
                          <CARTPAGECard
                            className="bg-white_A700_01 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs2 w-full"
                            tag="Sale"
                            linkproductcate="Digital Cameras"
                            p49="4.9"
                            paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                            price="$ 1,039.95"
                            priceOne="USDT"
                            paywith10000="Pay with +10000 cryptocurrencies"
                            addToCart="Add to cart"
                            buyNow="Buy Now"
                          />
                        </List>
                        <div className="font-hind h-[39px] md:h-[86px] md:ml-[0] ml-[26px] mt-[47px] relative w-[42%]">
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[58%]">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="h-[39px] relative w-[18%]">
                                <div className="absolute bg-yellow_A700 h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                                <Text
                                  className="absolute font-medium h-full inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                                  variant="body5"
                                >
                                  1
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-gray_600 text-left w-auto"
                                variant="body5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium text-gray_600 text-left w-auto"
                                variant="body5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium text-gray_600 text-left w-auto"
                                variant="body5"
                              >
                                4
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_arrows.svg"
                            className="absolute bottom-[15%] h-6 inset-x-[0] mx-auto w-auto"
                            alt="arrows"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <HOMEPAGEOneColumnNineteen
                    className="bg-white_A700_01 flex flex-col font-futuramaxicgbold items-center justify-end p-[57px] md:px-10 sm:px-5 w-full"
                    h2sectiontitleFour="Meet our partners"
                    poweredby="powered by"
                  />
                </div>
              </div>
              <div className="absolute bottom-[20%] flex flex-col inset-x-[0] items-center justify-start mx-auto py-20 self-stretch w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[43px] w-full">
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
                  <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                    <div className="overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
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
                        <div className="bg-white_A700_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 my-20 w-[92%] md:w-full">
                          <div className="h-[300px] relative w-full">
                            <Img
                              src="images/img_unsplashqyc13qbgam4_300x510.png"
                              className="h-[300px] m-auto object-cover w-full"
                              alt="unsplashqyc13qb_One"
                            />
                            <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[49px] w-full">
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
                            src="images/img_printedsummerdress_414x248.png"
                            className="sm:flex-1 h-[414px] md:h-auto object-cover w-[55%] sm:w-full"
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
        </div>
      </div>
    </>
  );
};

export default HOMEPAGEOnePage;
