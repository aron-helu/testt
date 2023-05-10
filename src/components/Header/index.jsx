import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [fieldvalue, setFieldvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="bg-gray_900 flex flex-col items-center justify-center pb-[13px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="h-[49px] md:h-[88px] relative w-full">
              <div className="absolute bg-yellow_A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto px-3 top-[0] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[91%] md:w-full">
                  <div className="flex flex-col h-11 md:h-auto items-start justify-between max-w-[1438px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between max-w-[1438px] sm:px-5 px-6 w-full">
                      <div className="flex sm:flex-1 flex-col items-center justify-end p-[7px] w-auto sm:w-full">
                        <Text
                          className="font-futuramaxicgdemi mt-[9px] text-gray_900 text-left w-auto"
                          variant="body15"
                        >
                          Follow Us and get a chance to win 80% off
                        </Text>
                      </div>
                      <Text
                        className="font-futuramaxicgdemi text-gray_900 text-left w-auto"
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
                    className="absolute font-futuramaxicgdemi h-max inset-y-[0] left-[0] my-auto text-gray_900 text-left w-auto"
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
              <Line className="absolute bg-gray_900 h-12 inset-y-[0] my-auto right-[15%] w-px" />
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
                className="bg-cover bg-no-repeat flex flex-col h-[31px] items-center justify-end ml-3 md:ml-[0] p-[5px] rounded-[15px] w-[8%] md:w-full"
                style={{ backgroundImage: "url('images/img_group87.svg')" }}
              >
                <div className="flex flex-row gap-2 items-start justify-center w-[83%] md:w-full">
                  <Img
                    src="images/img_supporticon13.png"
                    className="h-3.5 md:h-auto object-cover w-3.5"
                    alt="supporticonThirteen"
                  />
                  <Text
                    className="font-bold font-montserrat text-center text-gray_900 tracking-[0.20px] w-auto"
                    variant="body14"
                  >
                    Support
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_cart.svg"
                className="h-4 ml-7 md:ml-[0] w-[15px]"
                alt="cart_One"
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
                className="font-futuramaxicgdemi md:ml-[0] ml-[34px] text-center text-yellow_A700 w-auto"
                variant="body15"
              >
                All Categories
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="h-2 md:ml-[0] ml-[11px] w-auto"
                alt="arrowdown_Two"
              />
              <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start max-w-[692px] md:ml-[0] ml-[17px] w-full">
                <Text
                  className="font-futuramaxicgdemi leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                  variant="body15"
                >
                  Best of Electronics
                </Text>
                <Text
                  className="font-futuramaxicgdemi leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                  variant="body15"
                >
                  Best of Appliances
                </Text>
                <Text
                  className="font-futuramaxicgdemi leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700_01"
                  variant="body15"
                >
                  Best of Computers
                </Text>
                <Text
                  className="font-futuramaxicgdemi leading-[18.00px] max-w-[138px] md:max-w-full text-center text-white_A700_01"
                  variant="body15"
                >
                  Best of Audio, Video & Media Players
                </Text>
                <Text
                  className="font-futuramaxicgdemi text-center text-white_A700_01 w-auto"
                  variant="body15"
                >
                  Smartphones
                </Text>
                <Text
                  className="font-futuramaxicgdemi text-center text-white_A700_01 w-auto"
                  variant="body15"
                >
                  Tv & Video
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
