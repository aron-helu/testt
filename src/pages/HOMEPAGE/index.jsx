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
import HOMEPAGEColmd from "components/HOMEPAGEColmd";
import HOMEPAGEColumnTwelve from "components/HOMEPAGEColumnTwelve";
import HOMEPAGEListbluetooth from "components/HOMEPAGEListbluetooth";
import HOMEPAGEOpenyes from "components/HOMEPAGEOpenyes";
import HOMEPAGERowproductcoverfive from "components/HOMEPAGERowproductcoverfive";

import { CloseSVG } from "../../assets/images";

const HOMEPAGEPage = () => {
  const [fieldvalue, setFieldvalue] = React.useState("");
  const homepageColmdPropList = [
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
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgbold items-start justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[78px] items-end justify-end md:px-5 w-full">
          <div className="md:h-[1065px] sm:h-[1171px] h-[1199px] relative w-full">
            <div className="h-[1199px] m-auto w-full">
              <div className="flex flex-col font-futuramaxicgdemi items-center justify-start mb-[-83px] ml-auto w-[84%] md:w-full z-[1]">
                <div className="bg-gray_900 flex flex-col items-center justify-start pb-[15px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[49px] md:h-[88px] relative w-full">
                      <div className="absolute bg-yellow_A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto px-3 top-[0] w-full">
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
                        className="h-[51px] sm:h-auto object-cover w-[11%] md:w-full"
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
                            className="mt-1 mr-2"
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
                        className="h-4 md:ml-[0] ml-[39px] w-[15px]"
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
                        src="images/img_frame48095574.png"
                        className="h-[25px] md:h-auto md:ml-[0] ml-[22px] rounded-[50%] w-[25px]"
                        alt="frame48095574"
                      />
                      <Text
                        className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-left text-yellow_A700 w-auto"
                        variant="body15"
                      >
                        Jeniffer H
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        className="h-1 md:ml-[0] ml-[9px] w-auto"
                        alt="vector"
                      />
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
              </div>
              <div className="md:h-[1065px] h-[1073px] sm:h-[1171px] mt-auto mx-auto overflow-auto w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pr-0.5 py-20 self-stretch w-auto">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1954px] w-full"
                    orientation="horizontal"
                  >
                    {homepageColmdPropList.map((props, index) => (
                      <React.Fragment key={`HOMEPAGEColmd${index}`}>
                        <HOMEPAGEColmd
                          className="h-[317px] relative w-full"
                          h6="Featured"
                          h6One="Explore Items"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
                <div className="absolute bg-gray_900 flex flex-col items-center justify-end p-[111px] md:px-10 sm:px-5 right-[0] top-[6%] w-auto md:w-full">
                  <Text
                    className="leading-[75.00px] text-center text-yellow_A700_01 tracking-[2.14px]"
                    as="h4"
                    variant="h4"
                  >
                    <>
                      Feel Free to shop with almost any <br />
                      cryptocurrency
                    </>
                  </Text>
                </div>
                <div className="absolute bottom-[41%] flex flex-col items-center justify-start right-[31%] w-[459px] sm:w-full">
                  <Text
                    className="text-blue_gray_900_01 text-center w-auto"
                    variant="body4"
                  >
                    TOP CATEGORIES
                  </Text>
                </div>
                <div className="absolute bg-gray_800_bf h-[1065px] inset-y-[0] my-auto right-[0] w-[84%]"></div>
              </div>
            </div>
            <div className="absolute bg-gray_900 flex flex-col font-poppins items-center justify-start pt-0.5 right-[0] top-[11%] w-[17%]">
              <div className="flex flex-col items-end justify-end sm:pl-5 pl-[21px] pt-[21px] w-full">
                <HOMEPAGEOpenyes className="flex flex-col items-start justify-start pb-[3px] pr-[3px] w-auto md:w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
            <div className="flex flex-col font-montserrat pb-[13px] relative w-full">
              <div className="bg-gray_900 flex flex-col items-center justify-start max-w-[1621px] mx-auto py-[100px] w-full">
                <div className="flex flex-col items-center justify-start max-w-[1175px] pb-10 w-full">
                  <div className="flex flex-col gap-[29px] items-center justify-start pb-[3px] w-full">
                    <div className="flex flex-col gap-4 items-start justify-start max-w-[1175px] w-full">
                      <Text
                        className="font-semibold font-urbanist text-center text-white_A700_01 w-auto"
                        variant="body1"
                      ></Text>
                      <Text
                        className="font-futuramaxicgbook leading-[29.00px] max-w-[1175px] md:max-w-full text-center text-white_A700_01"
                        variant="body10"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu est amet a ornare tempus, risus. Integer in nunc
                        tempus nunc, risus, vel vitae ut. Ut sodales fusce purus
                        risus, turpis faucibus. Ipsum adipiscing nunc.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-center text-gray_900 text-sm uppercase w-[148px]"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="FillYellowA700"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center max-w-[1175px] mt-[-160px] mx-auto py-2.5 w-full z-[1]">
                <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs10 w-full">
                  <div className="bg-gray_900 flex flex-col h-[69px] md:h-auto items-center justify-center mt-[50px] rounded-[34px] w-[69px]">
                    <Img
                      src="images/img_bitcoinsvgrepocom.svg"
                      className="h-[69px] rounded-[34px] w-[69px]"
                      alt="bitcoinsvgrepoc"
                    />
                  </div>
                  <Text
                    className="font-futuramaxicgbold mt-[49px] text-blue_gray_900_01 text-left w-auto"
                    variant="body6"
                  >
                    WEB 3.0 Payments
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[50px] mt-5 text-center text-gray_600_04"
                    variant="body14"
                  >
                    <>
                      Through various Blockchain <br />
                      Networks / Wallets
                    </>
                  </Text>
                </div>
                <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[16px] shadow-bs10 w-full">
                  <div className="md:h-[127px] h-[70px] mt-[57px] relative w-[85px]">
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
                    className="font-futuramaxicgbold mt-12 text-blue_gray_900_01 text-left w-auto"
                    variant="body7"
                  >
                    The Best Electronic Products
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[58px] mt-5 text-center text-gray_600_04"
                    variant="body14"
                  >
                    <>
                      With + 60.000 electronics products
                      <br />
                      with the best discounts
                    </>
                  </Text>
                </div>
                <div className="bg-white_A700_01 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs10 w-full">
                  <div className="bg-gray_900 flex flex-col h-[69px] md:h-auto items-center justify-center mt-[49px] rounded-[34px] w-[69px]">
                    <Img
                      src="images/img_bitcoinsvgrepocom_yellow_a700.svg"
                      className="h-[69px] rounded-[34px] w-[69px]"
                      alt="bitcoinsvgrepoc_One"
                    />
                  </div>
                  <Text
                    className="font-futuramaxicgbold mt-[49px] text-blue_gray_900_01 text-left w-auto"
                    variant="body7"
                  >
                    Fast Shipping
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[49px] mt-[22px] text-center text-gray_600_04"
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
            <div className="flex flex-col font-futuramaxicgbold items-center justify-start mt-[78px] w-[459px] sm:w-full">
              <Text
                className="text-blue_gray_900_01 text-center w-auto"
                variant="body4"
              >
                BESTSELLER PRODUCTS
              </Text>
            </div>
            <div className="flex flex-col font-futuramaxicgbook items-center justify-start mt-[74px] w-[94%] md:w-full">
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
            <Text
              className="font-futuramaxicgbold mt-[119px] text-blue_gray_900_01 text-center w-auto"
              variant="body4"
            >
              NEW ARRIVALS{" "}
            </Text>
            <div className="flex flex-col font-futuramaxicgbook items-center justify-start mt-[74px] w-[94%] md:w-full">
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
            <div className="bg-white_A700_01 flex flex-col font-futuramaxicgbold gap-11 items-center justify-start mt-[111px] pt-8 sm:px-5 px-8 w-full">
              <Text
                className="leading-[58.00px] text-blue_gray_900_01 text-center tracking-[-0.79px] w-[47%] sm:w-full"
                as="h5"
                variant="h5"
              ></Text>
              <div className="font-futuramaxicgbook md:h-[274px] h-[309px] relative w-[69%] md:w-full">
                <Text
                  className="absolute inset-x-[0] leading-[23.00px] mx-auto text-center text-gray_900 top-[0] tracking-[0.57px] w-[66%] sm:w-full"
                  variant="body9"
                >
                  We pride ourselves on being the leading
                  cryptocurrency-friendly electronic products platform. Pay for
                  your purchases anywhere in the world seamlessly using your
                  favorite cryptocurrency.
                </Text>
                <HOMEPAGEListbluetooth className="absolute bottom-[0] sm:flex-col flex-row gap-[57px] grid grid-cols-1 inset-x-[0] justify-center mx-auto p-[11px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-futuramaxicgbold md:gap-10 items-center justify-between mt-[110px] w-[88%] md:w-full">
              <HOMEPAGEColumnTwelve
                className="flex flex-col items-center justify-start w-auto md:w-full"
                mediumlengthdis="See how work gets done with Source"
                collectionofcom="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisOne="Easy to Use"
                collectionofcomOne="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdis1="You’re in good company"
                collectionofcom1="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisOne1="We make sure that everyone is able to use a Source"
                collectionofcomOne1="A website wireframe, also known as a page schematic or screen blueprint"
              />
              <div className="flex flex-col font-montserrat gap-[29px] items-center justify-start w-[34%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[459px] sm:w-full">
                  <Text
                    className="not-italic text-center text-gray_600_04 tracking-[0.20px] w-auto"
                    variant="body7"
                  >
                    Featured Products
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_900_01 text-center tracking-[0.20px] w-auto"
                    variant="body1"
                  >
                    Featured Products
                  </Text>
                </div>
                <List
                  className="flex-col gap-[39px] grid items-center w-full"
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
                        arrowright="images/img_arrowright_yellow_a700.svg"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <div className="bg-gray_900 flex flex-col font-futuramaxicgbold items-center justify-start mt-[146px] p-[59px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-11 items-center justify-start mb-0.5 w-[96%] md:w-full">
                <Text
                  className="text-center text-yellow_A700 w-auto"
                  variant="body4"
                >
                  CUSTOMER REVIEWS
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
            <div className="bg-white_A700_01 flex flex-col font-montserrat items-center justify-start mt-[79px] p-3.5 w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start mb-[70px] w-[98%] md:w-full">
                <div className="flex flex-col h-[797px] md:h-auto items-start justify-start pb-[47px] self-stretch w-auto sm:w-full">
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
                                        Problems trying to resolve the c<br />
                                        onflict between the two major
                                        <br /> realms of Classical physics:{" "}
                                        <br />
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
                <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1098px] w-full">
                    <Text
                      className="not-italic text-center text-gray_600_04 tracking-[0.20px] w-auto"
                      variant="body7"
                    >
                      Featured Products
                    </Text>
                    <Text
                      className="font-bold text-blue_gray_900_01 text-center tracking-[0.20px] w-auto"
                      variant="body1"
                    >
                      Featured Products
                    </Text>
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-center text-gray_600_04 tracking-[0.20px]"
                      variant="body14"
                    >
                      <>
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: <br />
                        Newtonian mechanics{" "}
                      </>
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[34px] w-full"
                    orientation="horizontal"
                  >
                    {new Array(3).fill({}).map((props, index) => (
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
                  <div className="font-hind h-[30px] md:h-[66px] mt-9 relative w-[28%]">
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[58%]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="bg-yellow_A700 flex flex-col h-[30px] items-center justify-end rounded-[50%] w-[30px]">
                          <Text
                            className="font-medium mt-1 text-gray_900 text-left w-auto"
                            variant="body5"
                          >
                            1
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[5px] text-gray_600 text-left w-auto"
                          variant="body5"
                        >
                          2
                        </Text>
                        <Text
                          className="font-medium mt-[5px] text-gray_600 text-left w-auto"
                          variant="body5"
                        >
                          3
                        </Text>
                        <Text
                          className="font-medium mt-[5px] text-gray_600 text-left w-auto"
                          variant="body5"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrows.svg"
                      className="absolute bottom-[7%] h-6 inset-x-[0] mx-auto w-auto"
                      alt="arrows"
                    />
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

export default HOMEPAGEPage;
