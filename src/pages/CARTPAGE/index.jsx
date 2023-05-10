import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import CARTPAGECard from "components/CARTPAGECard";
import CARTPAGEColumnicon from "components/CARTPAGEColumnicon";
import CARTPAGEColumniconFour from "components/CARTPAGEColumniconFour";
import CARTPAGEColumniconSeven from "components/CARTPAGEColumniconSeven";
import CARTPAGEColumniconTwo from "components/CARTPAGEColumniconTwo";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CARTPAGEPage = () => {
  const tableData = React.useRef([
    {
      item: "images/img_bg.png",
      priceFour: "+",
      quantity: "1",
      subtotal: "images/img_close.svg",
    },
    {
      item: "images/img_bg_127x122.png",
      priceFour: "+",
      quantity: "1",
      subtotal: "images/img_close.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("item", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start sm:pr-5 pr-9 pt-9">
            <Img
              src={info?.getValue()}
              className="h-[127px] md:h-auto object-cover w-[31%]"
              alt="bg"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[449px] pl-0.5 pt-1 text-gray_700_01 text-left"
            as="p"
            variant="body14"
          >
            Item
          </Text>
        ),
      }),
      tableColumnHelper.accessor("priceFour", {
        cell: (info) => (
          <Text
            className="font-light pr-[-77px] text-gray_700_01 text-left w-auto"
            as="p"
            variant="body12"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[144px] pb-1 sm:pl-5 pl-[29px] text-gray_700_01 text-left"
            as="p"
            variant="body14"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-[7px]">
            <div className="bg-white_A700_01 border border-gray_400 border-solid flex flex-row items-center justify-start mb-[29px] mt-[75px] sm:px-5 px-[25px] rounded-[21px] w-[61%]">
              <Text
                className="font-light pr-[-77px] text-gray_700_01 text-left w-auto"
                as="p"
                variant="body12"
              >
                +
              </Text>
              <Text
                className="font-light text-gray_700_01 text-left w-auto"
                as="p"
                variant="body12"
              >
                -
              </Text>
              <Text
                className="font-medium ml-2.5 text-gray_700_01 text-left w-auto"
                as="p"
                variant="body12"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[170px] pl-[17px] text-gray_700_01 text-left"
            as="p"
            variant="body14"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between pr-2.5 py-2.5">
            <div className="h-9 md:h-[122px] mb-7 mt-[74px] relative w-[49%]">
              <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                <Text
                  className="font-normal mx-auto text-left text-purple_900 w-auto"
                  as="p"
                  variant="body12"
                >
                  $ 1,039.95
                </Text>
                <Img
                  src="images/img_arrowdown_teal_300.svg"
                  className="h-5 ml-[21px] mt-[-0.54px] rounded-[50%] w-[21px] z-[1]"
                  alt="arrowdown_One"
                />
              </div>
              <Text
                className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                as="p"
                variant="body16"
              >
                USDT
              </Text>
            </div>
            <Img
              src={info?.getValue()}
              className="h-[19px] mt-[79px] w-5"
              alt="close"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[185px] pb-1 pl-2 text-gray_700_01 text-left"
            as="p"
            variant="body14"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  const [fieldvalue, setFieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray_900 flex flex-col items-center justify-center pb-[13px] w-full">
                <div className="flex flex-col items-center justify-center w-full">
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
                      alt="arrowdown"
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
            </div>
          </header>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[78px] mt-[87px] md:px-5 w-[10%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                  variant="body14"
                >
                  Home
                </Text>
                <Text
                  className="font-medium font-roboto text-gray_700_01 text-left w-auto"
                  variant="body12"
                >
                  |
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal mt-0.5 text-gray_700 text-left w-auto"
                  variant="body14"
                >
                  Cart Page
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-futuramaxicgbold md:gap-5 items-start justify-start max-w-[1448px] mt-[89px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[113px] justify-start w-[69%] md:w-full">
              <Text
                className="text-gray_900_02 text-left w-auto"
                variant="body3"
              >
                Cart Page
              </Text>
              <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-[99%] md:w-full">
                <div className="overflow-auto font-roboto w-[98%]">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={"border-b border-blue_gray_50"}
                    headerClass=""
                  />
                </div>
                <div className="flex flex-row font-futuramaxicgdemi gap-[79px] items-center justify-end ml-auto mt-[50px] w-[38%] md:w-full">
                  <Button
                    className="cursor-pointer font-normal min-w-[137px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                    shape="CircleBorder21"
                    size="md"
                    variant="FillYellowA70001"
                  >
                    Clear Cart
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[154px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                    shape="CircleBorder21"
                    size="md"
                    variant="OutlineGray900"
                  >
                    Update Cart
                  </Button>
                </div>
                <div className="flex flex-col font-futuramaxicgbold gap-3.5 items-start justify-start ml-0.5 md:ml-[0] mt-[98px] w-3/5 md:w-full">
                  <Text
                    className="text-gray_900_02 text-left w-auto"
                    variant="body6"
                  >
                    Coupon Discount
                  </Text>
                  <div className="h-[42px] relative w-full">
                    <div className="absolute bg-white_A700_01 border border-gray_400 border-solid flex flex-col font-futuramaxicgbook h-full inset-[0] items-start justify-center m-auto p-[13px] rounded-[21px] w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-gray_700_01 text-left w-auto"
                        variant="body15"
                      >
                        Enter your code here
                      </Text>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-futuramaxicgdemi font-normal h-full inset-y-[0] min-w-[116px] my-auto right-[0] text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                      shape="CircleBorder21"
                      size="md"
                      variant="FillYellowA70001"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <Text
                  className="font-futuramaxicgbold md:ml-[0] ml-[371px] mt-[246px] text-gray_900 text-left w-auto"
                  variant="body4"
                >
                  Customers who bought this also bough
                </Text>
              </div>
            </div>
            <div className="bg-black_900_14 flex md:flex-1 flex-col font-montserrat items-center justify-start mb-[181px] md:mt-0 mt-[137px] p-[50px] md:px-10 sm:px-5 rounded-[10px] w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                <Text
                  className="font-futuramaxicgbold ml-1 md:ml-[0] text-gray_900_02 text-left w-auto"
                  variant="body7"
                >
                  Shipping
                </Text>
                <SelectBox
                  className="font-futuramaxicgbook font-normal mt-[18px] text-gray_600 text-left text-xs w-full"
                  placeholderClassName="text-gray_600"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_400.svg"
                      className="h-[19px] mr-[0] w-3.5"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                  isSearchable={false}
                  placeholder="Vietnam"
                  shape="CircleBorder21"
                  isMulti={false}
                  options={countryOptionsList}
                  name="country"
                  variant="OutlineGray400"
                />
                <Input
                  wrapClassName="mt-2.5 w-full"
                  className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_600 text-gray_600 text-left text-xs w-full"
                  name="city"
                  placeholder="State/City"
                  shape="CircleBorder21"
                  size="md"
                  variant="OutlineGray400"
                ></Input>
                <Input
                  wrapClassName="mt-2.5 w-full"
                  className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_600 text-gray_600 text-left text-xs w-full"
                  name="zip"
                  placeholder="ZIP"
                  shape="CircleBorder21"
                  size="md"
                  variant="OutlineGray400"
                ></Input>
                <Button
                  className="cursor-pointer font-futuramaxicgdemi font-normal min-w-[112px] md:ml-[0] ml-[221px] mt-[15px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                  shape="CircleBorder21"
                  size="md"
                  variant="FillYellowA70001"
                >
                  Submit
                </Button>
              </div>
              <div className="flex flex-col font-futuramaxicgdemi items-center justify-start mt-24 w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-gray_900_02 text-left w-auto"
                      variant="body15"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="text-gray_900_02 text-right w-auto"
                      variant="body15"
                    >
                      $325
                    </Text>
                  </div>
                  <div className="flex flex-row font-futuramaxicgbook items-start justify-between mt-[26px] w-full">
                    <Text
                      className="font-normal text-gray_900_02 text-left w-auto"
                      variant="body14"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="font-normal text-gray_900_02 text-right w-auto"
                      variant="body14"
                    >
                      Free
                    </Text>
                  </div>
                  <div className="flex flex-row font-futuramaxicgbold items-center justify-between mt-[55px] w-full">
                    <Text
                      className="text-gray_900_02 text-left w-auto"
                      variant="body6"
                    >
                      Order Total
                    </Text>
                    <Text
                      className="text-gray_900_02 text-right w-auto"
                      variant="body6"
                    >
                      $325
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold mb-2.5 min-w-[347px] mt-[91px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto"
                shape="CircleBorder24"
                size="md"
                variant="FillYellowA70001"
              >
                Procesed to Checkout
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1509px] mt-[83px] mx-auto md:px-5 w-full"
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
          <div className="flex flex-col font-montserrat items-start justify-start mt-[84px] py-20 self-stretch w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col items-center justify-start md:px-5 w-[31%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-end justify-start sm:pl-5 pl-[38px] w-full">
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
              <div className="flex flex-col items-center justify-start md:px-5 w-[32%] md:w-full">
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
                        src="images/img_printedsummerdress_414x253.png"
                        className="sm:flex-1 h-[414px] md:h-auto object-cover w-[56%] sm:w-full"
                        alt="printedsummerdr_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mt-[25px] shadow-bs8 w-full">
            <div className="h-[664px] md:h-[798px] md:px-5 relative w-full">
              <div className="h-[664px] md:h-[798px] m-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[435px] inset-x-[0] items-center justify-start mx-auto w-full"
                  style={{ backgroundImage: "url('images/img_group71.png')" }}
                >
                  <Img
                    src="images/img_group71.png"
                    className="h-[435px] sm:h-auto object-cover w-auto md:w-full"
                    alt="vector"
                  />
                </div>
                <div className="absolute h-[664px] md:h-[798px] inset-y-[0] left-[4%] my-auto w-[52%] md:w-full">
                  <div className="absolute bottom-[0] h-[798px] inset-x-[0] mx-auto w-[97%] md:w-full">
                    <div className="h-[798px] m-auto w-full">
                      <div className="h-[798px] m-auto w-full">
                        <Img
                          src="images/img_20794850convertido.png"
                          className="h-[798px] m-auto object-cover w-full"
                          alt="20794850convert"
                        />
                        <div className="absolute flex flex-col gap-[21px] justify-start left-[17%] top-[19%] w-[59%]">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mr-9 w-[93%] md:w-full">
                            <CARTPAGEColumnicon className="flex flex-col items-center justify-start sm:mt-0 mt-[22px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                            <div className="h-[124px] sm:h-[127px] md:h-[139px] mb-1 sm:ml-[0] ml-[130px] sm:mt-0 mt-3 relative rotate-[-42deg] shadow-bs9 w-[29%] sm:w-full">
                              <div className="absolute bg-gradient1  h-[123px] inset-y-[0] left-[0] my-auto rotate-[-37deg] rounded-[61px] w-[96%]"></div>
                              <div className="absolute h-[121px] inset-y-[0] my-auto right-[0] w-[91%]">
                                <div className="bg-yellow_A700 h-[121px] m-auto rotate-[-37deg] rounded-[60px] w-full"></div>
                                <div className="absolute h-[105px] inset-[0] justify-center m-auto w-[89%]">
                                  <div className="bg-gray_900 h-[105px] m-auto rotate-[-37deg] rounded-[52px] w-full"></div>
                                  <div className="absolute h-[89px] inset-[0] justify-center m-auto w-[85%]">
                                    <div className="bg-gray_900 h-[89px] m-auto rotate-[-38deg] rounded-[44px] w-full"></div>
                                    <div className="absolute h-[87px] inset-[0] justify-center m-auto w-[98%]">
                                      <div className="bg-gray_900 h-[87px] m-auto rotate-[-38deg] rounded-[43px] w-full"></div>
                                      <Img
                                        src="images/img_image61.png"
                                        className="absolute h-[79px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[92%]"
                                        alt="imageSixtyOne"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CARTPAGEColumnicon className="flex flex-col items-center justify-start mb-[22px] sm:ml-[0] ml-[52px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                          </div>
                          <div className="flex flex-row gap-[29px] items-start justify-end ml-auto w-[36%] md:w-full">
                            <CARTPAGEColumniconTwo className="flex flex-col items-center justify-start mt-[106px] shadow-bs3 w-auto sm:w-full" />
                            <CARTPAGEColumnicon className="flex flex-col items-center justify-start mb-[92px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[2%] w-[58%]">
                        <CARTPAGEColumniconFour
                          className="flex flex-col items-center justify-start mb-[35px] rotate-[-21deg] shadow-bs3 w-[145px] sm:w-full"
                          iconFour="images/img_icon_144x145.png"
                          iconmaskFour="images/img_icon_144x145.png"
                        />
                        <CARTPAGEColumniconTwo className="flex flex-col items-center justify-start mt-[75px] shadow-bs3 w-auto sm:w-full" />
                      </div>
                    </div>
                    <div className="absolute flex flex-row gap-[39px] items-start justify-center left-[27%] top-[23%] w-[35%]">
                      <CARTPAGEColumniconFour
                        className="flex flex-col items-center justify-start mb-[27px] rotate-[-2deg] shadow-bs3 w-[135px] sm:w-full"
                        iconFour="images/img_icon_134x135.png"
                        iconmaskFour="images/img_icon_134x135.png"
                      />
                      <CARTPAGEColumniconSeven className="flex flex-col h-[103px] items-center justify-start mt-[59px] shadow-bs3 w-[103px] sm:w-full" />
                    </div>
                  </div>
                  <CARTPAGEColumniconFour
                    className="absolute bottom-[31%] flex flex-col items-center justify-start left-[0] rotate-[-1deg] shadow-bs3 w-[122px] sm:w-full"
                    iconFour="images/img_icon_123x122.png"
                    iconmaskFour="images/img_icon_123x122.png"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col gap-12 md:h-auto h-max inset-y-[0] items-center justify-center max-w-[704px] my-auto pb-20 pt-[51px] md:px-10 px-12 sm:px-5 right-[1%] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="text-center text-white_A700_01 tracking-[-0.90px] w-auto"
                    variant="body2"
                  >
                    Join our community
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-blue_100 text-center"
                    variant="body10"
                  >
                    <>
                      Receive exclusive offers and unique content, only for
                      iKing.io <br />
                      community members. Don&#39;t miss our new features
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-center w-full">
                  <Input
                    wrapClassName="sm:flex-1 w-[57%] sm:w-full"
                    className="font-inter font-normal not-italic p-0 placeholder:text-gray_600_01 text-base text-gray_600_01 text-left w-full"
                    type="email"
                    name="newslettersecti"
                    placeholder="Enter your email"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineWhiteA70001"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold font-montserrat text-center text-gray_900 text-sm tracking-[0.20px] w-[156px]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBlack9000f"
                  >
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CARTPAGEPage;
