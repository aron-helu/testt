import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[43px] mt-[75px] mx-auto w-[93%]">
          <div className="flex flex-col items-center justify-center w-full">
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
                            onClick={handleNavigate1}
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
                          alt="user_One"
                        />
                        <div className="flex flex-col h-5 items-center justify-start w-5">
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer h-5 w-5"
                            alt="twitter"
                            onClick={handleNavigate2}
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
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
