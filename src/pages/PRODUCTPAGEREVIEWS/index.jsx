import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CARTPAGECard from "components/CARTPAGECard";
import CARTPAGEColumnicon from "components/CARTPAGEColumnicon";
import CARTPAGEColumniconFour from "components/CARTPAGEColumniconFour";
import CARTPAGEColumniconSeven from "components/CARTPAGEColumniconSeven";
import CARTPAGEColumniconTwo from "components/CARTPAGEColumniconTwo";
import Footer from "components/Footer";
import Header from "components/Header";
import PRODUCTPAGEDESCRIPTIONStackrectangleten from "components/PRODUCTPAGEDESCRIPTIONStackrectangleten";

const PRODUCTPAGEREVIEWSPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="h-[2013px] md:px-5 relative w-full">
          <Header className="flex flex-col font-futuramaxicgdemi items-center justify-center mb-[-48.75px] mx-auto w-full z-[1]" />
          <div className="md:h-[1620px] h-[1854px] mt-auto mx-auto w-full">
            <div className="absolute bottom-[0] flex flex-col gap-[51px] inset-x-[0] items-center justify-start mx-auto w-[74%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center w-[53%] md:w-full">
                <Text
                  className="font-bold text-center text-gray_900 tracking-[0.20px] uppercase w-auto"
                  variant="body14"
                >
                  Description
                </Text>
                <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[92px] w-1/5 md:w-full">
                  <Text
                    className="font-bold text-center text-gray_900 tracking-[0.20px] uppercase w-auto"
                    variant="body14"
                  >
                    Reviews (4)
                  </Text>
                  <Line className="bg-yellow_A700 h-[3px] rounded-[1px] w-full" />
                </div>
                <Text
                  className="font-bold md:ml-[0] ml-[97px] text-center text-gray_900 tracking-[0.20px] uppercase w-auto"
                  variant="body14"
                >
                  Additional Information
                </Text>
              </div>
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row font-futuramaxicgbook md:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-normal text-gray_900 text-left w-auto"
                        variant="body14"
                      >
                        Amanda Fox
                      </Text>
                      <Img
                        src="images/img_rait.svg"
                        className="h-3.5 ml-9 md:ml-[0] md:mt-0 mt-0.5 w-auto"
                        alt="rait"
                      />
                      <Img
                        src="images/img_reply1.svg"
                        className="h-4 md:ml-[0] ml-[946px] w-4"
                        alt="replyOne"
                      />
                    </div>
                    <Text
                      className="font-futuramaxicglight font-normal leading-[22.00px] mt-[21px] text-gray_700 text-left w-full"
                      variant="body14"
                    >
                      Sed pretium turpis id orci molestie, vitae placerat ligula
                      vulputate. Duis volutpat ante sed laoreet tempus. Vivamus
                      diam purus, vehicula ac tortor ut, dictum vestibulum nisi.
                      Nulla condimentum felis quis augue viverra, et tempor arcu
                      dapibus.
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[29px] w-[36%] md:w-full">
                      <Img
                        src="images/img_bg_155x130.png"
                        className="h-[155px] md:h-auto object-cover w-[32%] sm:w-full"
                        alt="bg"
                      />
                      <Img
                        src="images/img_bg_1.png"
                        className="h-[155px] md:h-auto sm:ml-[0] ml-[15px] object-cover w-[32%] sm:w-full"
                        alt="bg_One"
                      />
                      <Img
                        src="images/img_bg_2.png"
                        className="h-[155px] md:h-auto ml-3 sm:ml-[0] object-cover w-[32%] sm:w-full"
                        alt="bg_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row font-futuramaxicgbook md:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-normal md:mt-0 mt-0.5 text-gray_900 text-left w-auto"
                        variant="body14"
                      >
                        Roi Semple
                      </Text>
                      <Img
                        src="images/img_rait_orange_200.svg"
                        className="h-3.5 md:ml-[0] ml-[39px] md:mt-0 mt-0.5 w-auto"
                        alt="rait_One"
                      />
                      <Img
                        src="images/img_reply1.svg"
                        className="h-4 mb-0.5 md:ml-[0] ml-[956px] w-4"
                        alt="replyOne_One"
                      />
                    </div>
                    <Text
                      className="font-futuramaxicglight font-normal leading-[22.00px] text-gray_700 text-left w-full"
                      variant="body14"
                    >
                      Maecenas magna enim, hendrerit sed ex ac, cursus faucibus
                      odio. Vivamus quis placerat orci. Mauris a maximus leo.
                      Proin efficitur orci ex, finibus semper mauris venenatis
                      in. Nunc ac semper lacus. Suspendisse orci purus, pretium
                      sed risus quis, pellentesque interdum turpis. Sed maximus
                      velit at libero rutrum interdum. Curabitur tempor mauris
                      ut sem dictum congue. Etiam imperdiet, magna non vehicula
                      egestas, nunc felis dictum risus, id ornare leo justo id
                      nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed pharetra mauris vitae tellus congue auctor.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <PRODUCTPAGEDESCRIPTIONStackrectangleten
              className="absolute font-futuramaxicgbook h-[1620px] inset-x-[0] mx-auto top-[0] w-[1621px] md:w-full"
              offer="Grab Upto 50% Off On Selected TV & Video"
              buyNow="Buy Now"
            />
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1509px] mt-[270px] mx-auto md:px-5 w-full"
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
        <div className="flex flex-col font-futuramaxicgbook items-center justify-start mt-[54px] md:px-5 w-[19%] md:w-full">
          <div className="h-[30px] relative w-full">
            <div className="absolute flex flex-row h-full inset-[0] items-center justify-center m-auto w-[58%]">
              <div className="bg-yellow_A700_01 flex flex-col h-[30px] items-end justify-start p-[5px] rounded-[50%] w-[30px]">
                <Text
                  className="font-normal mb-0.5 mr-[5px] text-gray_900 text-left w-auto"
                  variant="body14"
                >
                  1
                </Text>
              </div>
              <Text
                className="font-normal ml-[34px] text-gray_600 text-left w-auto"
                variant="body14"
              >
                2
              </Text>
              <Text
                className="font-normal ml-[43px] text-gray_600 text-left w-auto"
                variant="body14"
              >
                3
              </Text>
              <Text
                className="font-normal ml-[42px] text-gray_600 text-left w-auto"
                variant="body14"
              >
                4
              </Text>
            </div>
            <Img
              src="images/img_arrows.svg"
              className="absolute bottom-[7%] h-6 inset-x-[0] mx-auto w-auto"
              alt="arrows"
            />
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-start justify-start mt-[55px] py-20 self-stretch w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start self-stretch w-auto md:w-full">
            <div className="flex flex-col items-center justify-start md:px-5 w-[32%] md:w-full">
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
        <div className="bg-gray_900 flex flex-col font-inter items-center justify-start shadow-bs8 w-full">
          <div className="h-[664px] md:h-[798px] md:px-5 relative w-full">
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
            <div className="absolute h-[664px] md:h-[798px] inset-y-[0] left-[4%] my-auto w-[51%] md:w-full">
              <div className="absolute bottom-[0] h-[798px] inset-x-[0] mx-auto w-[797px] md:w-full">
                <div className="h-[798px] m-auto w-[797px] md:w-full">
                  <div className="h-[798px] m-auto w-[797px] md:w-full">
                    <Img
                      src="images/img_20794850convertido.png"
                      className="h-[798px] m-auto object-cover w-[797px]"
                      alt="20794850convert"
                    />
                    <div className="absolute flex flex-col gap-[21px] justify-start left-[17%] top-[19%] w-[59%]">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mr-9 w-[93%] md:w-full">
                        <CARTPAGEColumnicon className="flex flex-col items-center justify-start sm:mt-0 mt-[22px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                        <div className="h-[124px] sm:h-[127px] md:h-[139px] mb-1 sm:ml-[0] ml-[130px] sm:mt-0 mt-3 relative rotate-[-42deg] shadow-bs9 w-[29%] sm:w-full">
                          <div className="absolute bg-gradient1  h-[123px] inset-y-[0] left-[0] my-auto rotate-[-37deg] rounded-[61px] w-[96%]"></div>
                          <div className="absolute h-[121px] inset-y-[0] my-auto right-[0] w-[92%]">
                            <div className="bg-yellow_A700 h-[121px] m-auto rotate-[-37deg] rounded-[60px] w-full"></div>
                            <div className="absolute h-[105px] inset-[0] justify-center m-auto w-[89%]">
                              <div className="bg-gray_900 h-[105px] m-auto rotate-[-37deg] rounded-[52px] w-full"></div>
                              <div className="absolute h-[89px] inset-[0] justify-center m-auto w-[85%]">
                                <div className="bg-gray_900 h-[89px] m-auto rotate-[-38deg] rounded-[44px] w-full"></div>
                                <div className="absolute h-[87px] inset-[0] justify-center m-auto w-[97%]">
                                  <div className="bg-gray_900 h-[87px] m-auto rotate-[-38deg] rounded-[43px] w-full"></div>
                                  <Img
                                    src="images/img_image61_79x73.png"
                                    className="absolute h-[79px] inset-[0] justify-center m-auto object-cover rounded-[36px] w-[92%]"
                                    alt="imageSixtyOne"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <CARTPAGEColumnicon className="flex flex-col items-center justify-start mb-[22px] sm:ml-[0] ml-[52px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                      </div>
                      <div className="flex flex-row gap-[30px] items-start justify-end ml-auto w-[36%] md:w-full">
                        <CARTPAGEColumniconTwo className="flex flex-col items-center justify-start mt-[106px] shadow-bs3 w-auto sm:w-full" />
                        <CARTPAGEColumnicon className="flex flex-col items-center justify-start mb-[92px] rotate-[2deg] shadow-bs3 w-auto sm:w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[2%] w-[58%]">
                    <CARTPAGEColumniconFour
                      className="flex flex-col h-36 items-center justify-start mb-[35px] rotate-[-21deg] shadow-bs3 w-36 sm:w-full"
                      iconFour="images/img_icon_144x145.png"
                      iconmaskFour="images/img_icon_144x145.png"
                    />
                    <CARTPAGEColumniconTwo className="flex flex-col items-center justify-start mt-[75px] shadow-bs3 w-auto sm:w-full" />
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[39px] items-start justify-center left-[27%] top-[23%] w-[35%]">
                  <CARTPAGEColumniconFour
                    className="flex flex-col h-[134px] items-center justify-start mb-[27px] rotate-[-2deg] shadow-bs3 w-[134px] sm:w-full"
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
            <div className="absolute flex flex-col gap-12 md:h-auto h-max inset-y-[0] items-center justify-center max-w-[694px] my-auto pb-20 pt-[51px] md:px-10 px-12 sm:px-5 right-[2%] w-full">
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
                  wrapClassName="sm:flex-1 w-[58%] sm:w-full"
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
    </>
  );
};

export default PRODUCTPAGEREVIEWSPage;
