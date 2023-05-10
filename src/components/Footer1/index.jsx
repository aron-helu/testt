import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer1 = (props) => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray_900 flex flex-col items-center justify-start shadow-bs8 w-full">
            <div className="h-[664px] md:h-[798px] relative w-full">
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
                            <div className="flex flex-col items-center justify-start sm:mt-0 mt-[22px] rotate-[2deg] shadow-bs3 w-[15%] sm:w-full">
                              <div className="h-[118px] relative w-full">
                                <Img
                                  src="images/img_icon.png"
                                  className="h-[118px] m-auto object-cover w-full"
                                  alt="icon"
                                />
                                <Img
                                  src="images/img_icon.png"
                                  className="absolute h-[118px] inset-[0] justify-center m-auto object-cover w-full"
                                  alt="iconmask"
                                />
                              </div>
                            </div>
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
                            <div className="flex flex-col items-center justify-start mb-[22px] sm:ml-[0] ml-[52px] rotate-[2deg] shadow-bs3 w-[15%] sm:w-full">
                              <div className="h-[118px] relative w-full">
                                <Img
                                  src="images/img_icon.png"
                                  className="h-[118px] m-auto object-cover w-full"
                                  alt="icon_One"
                                />
                                <Img
                                  src="images/img_icon.png"
                                  className="absolute h-[118px] inset-[0] justify-center m-auto object-cover w-full"
                                  alt="iconmask_One"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[29px] items-start justify-end ml-auto w-[36%] md:w-full">
                            <div className="flex flex-col items-center justify-start mt-[106px] shadow-bs3 w-[45%]">
                              <div className="h-[104px] relative w-full">
                                <Img
                                  src="images/img_icon_104x74.png"
                                  className="h-[104px] m-auto object-cover w-full"
                                  alt="icon_Two"
                                />
                                <Img
                                  src="images/img_icon_104x74.png"
                                  className="absolute h-[104px] inset-[0] justify-center m-auto object-cover w-full"
                                  alt="iconmask_Two"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mb-[92px] rotate-[2deg] shadow-bs3 w-[38%]">
                              <div className="h-[118px] relative w-full">
                                <Img
                                  src="images/img_icon.png"
                                  className="h-[118px] m-auto object-cover w-full"
                                  alt="icon_Three"
                                />
                                <Img
                                  src="images/img_icon.png"
                                  className="absolute h-[118px] inset-[0] justify-center m-auto object-cover w-full"
                                  alt="iconmask_Three"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[2%] w-[58%]">
                        <div className="flex flex-col items-center justify-start mb-[35px] rotate-[-21deg] shadow-bs3 w-[145px]">
                          <div className="h-36 relative w-[145px]">
                            <Img
                              src="images/img_icon_144x145.png"
                              className="h-36 m-auto object-cover w-[145px]"
                              alt="icon_Four"
                            />
                            <Img
                              src="images/img_icon_144x145.png"
                              className="absolute h-36 inset-[0] justify-center m-auto object-cover w-[145px]"
                              alt="iconmask_Four"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[75px] shadow-bs3 w-[17%]">
                          <div className="h-[104px] relative w-full">
                            <Img
                              src="images/img_icon_104x74.png"
                              className="h-[104px] m-auto object-cover w-full"
                              alt="icon_Five"
                            />
                            <Img
                              src="images/img_icon_104x74.png"
                              className="absolute h-[104px] inset-[0] justify-center m-auto object-cover w-full"
                              alt="iconmask_Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row gap-[39px] items-start justify-center left-[27%] top-[23%] w-[35%]">
                      <div className="flex flex-col items-center justify-start mb-[27px] rotate-[-2deg] shadow-bs3 w-[135px]">
                        <div className="h-[134px] relative w-[135px]">
                          <Img
                            src="images/img_icon_134x135.png"
                            className="h-[134px] m-auto object-cover w-[135px]"
                            alt="icon_Six"
                          />
                          <Img
                            src="images/img_icon_134x135.png"
                            className="absolute h-[134px] inset-[0] justify-center m-auto object-cover w-[135px]"
                            alt="iconmask_Six"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col h-[103px] items-center justify-start mt-[59px] shadow-bs3 w-[103px]">
                        <div className="h-[103px] relative w-[103px]">
                          <Img
                            src="images/img_icon_103x103.png"
                            className="h-[103px] m-auto object-cover w-[103px]"
                            alt="icon_Seven"
                          />
                          <Img
                            src="images/img_icon_103x103.png"
                            className="absolute h-[103px] inset-[0] justify-center m-auto object-cover w-[103px]"
                            alt="iconmask_Seven"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[31%] flex flex-col items-center justify-start left-[0] rotate-[-1deg] shadow-bs3 w-[122px]">
                    <div className="h-[123px] relative w-[122px]">
                      <Img
                        src="images/img_icon_123x122.png"
                        className="h-[123px] m-auto object-cover w-[122px]"
                        alt="icon_Eight"
                      />
                      <Img
                        src="images/img_icon_123x122.png"
                        className="absolute h-[123px] inset-[0] justify-center m-auto object-cover w-[122px]"
                        alt="iconmask_Eight"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-12 md:h-auto h-max inset-y-[0] items-center justify-center max-w-[704px] my-auto pb-20 pt-[51px] md:px-10 px-12 sm:px-5 right-[1%] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="font-inter text-center text-white_A700_01 tracking-[-0.90px] w-auto"
                    variant="body2"
                  >
                    Join our community
                  </Text>
                  <Text
                    className="font-inter leading-[28.00px] not-italic text-blue_100 text-center"
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
          <div className="bg-gray_900 flex flex-col items-center justify-end p-[43px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-8 w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[86%] md:w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start md:mt-0 mt-14 w-[24%] md:w-full">
                  <Img
                    src="images/img_group451.png"
                    className="h-[66px] md:h-auto object-cover w-full"
                    alt="group452"
                  />
                  <Text
                    className="font-futuramaxicgbook leading-[15.00px] text-center text-white_A700_01 w-[95%] sm:w-full"
                    variant="body16"
                  >
                    iKing.io makes it easy for you to buy goods from large
                    marketplaces with crypto instantly and securely. Live a true
                    crypto shopping experience
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[77px] justify-start w-[62%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-auto w-[79%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <Text
                        className="font-bold font-montserrat text-left text-white_A700_01 tracking-[0.20px] w-auto"
                        variant="body14"
                      >
                        Company Information
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-5 text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        About Us
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[25px] text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        Shop With Crypto
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        Returns & Refunds
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[78px] w-auto md:w-full">
                      <Text
                        className="font-bold font-montserrat text-left text-white_A700_01 tracking-[0.20px] w-auto"
                        variant="body14"
                      >
                        Customer Support
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        Help Desk
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[23px] text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        Blog
                      </Text>
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700_01 w-auto"
                        variant="body14"
                      >
                        How It Works
                      </Text>
                      <Text
                        className="font-lato mt-6 not-italic text-left text-white_A700_01 w-auto"
                        variant="body11"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="font-lato mt-[21px] not-italic text-left text-white_A700_01 w-auto"
                        variant="body11"
                      >
                        Feedback
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px] w-[28%] md:w-full">
                      <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                        <Text
                          className="font-bold font-montserrat text-left text-white_A700_01 tracking-[0.20px] w-auto"
                          variant="body14"
                        >
                          Social Media
                        </Text>
                        <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                          <div className="flex flex-col h-5 items-center justify-start w-5">
                            <Img
                              src="images/img_facebook.svg"
                              className="common-pointer h-5 w-5"
                              alt="facebook"
                              onClick={handleNavigate3}
                            />
                          </div>
                          <div className="flex flex-col h-5 items-center justify-start w-5">
                            <Img
                              src="images/img_linkedin.svg"
                              className="h-5 w-5"
                              alt="linkedin"
                            />
                          </div>
                          <Img
                            src="images/img_user_yellow_a700.svg"
                            className="h-5 w-5"
                            alt="user_Two"
                          />
                          <div className="flex flex-col h-5 items-center justify-start w-5">
                            <Img
                              src="images/img_twitter.svg"
                              className="common-pointer h-5 w-5"
                              alt="twitter"
                              onClick={handleNavigate}
                            />
                          </div>
                          <Img
                            src="images/img_camera.svg"
                            className="h-5 w-5"
                            alt="camera"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[50px] items-start justify-start w-[35%] md:w-full">
                    <Text
                      className="font-bold font-montserrat text-gray_700 text-right tracking-[0.20px] w-auto"
                      variant="body14"
                    >
                      Privacy policy
                    </Text>
                    <Text
                      className="font-bold font-montserrat text-gray_700 text-right tracking-[0.20px] w-auto"
                      variant="body14"
                    >
                      Term of service
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray_600_7a h-0.5 mt-2.5 w-full" />
              <Text
                className="font-lato mt-3 not-italic text-center text-gray_600 w-auto"
                variant="body11"
              ></Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
