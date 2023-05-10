import React from "react";

import { Button, Img, Line, Text } from "components";

const Login7RegisterPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-montserrat h-[900px] mx-auto md:pl-10 sm:pl-5 pl-[76px] relative w-full">
        <div className="absolute h-[900px] inset-y-[0] my-auto right-[0] w-[84%] md:w-full">
          <div className="bg-yellow_A700 h-[900px] ml-auto my-auto w-[63%]"></div>
          <Img
            src="images/img_tormarch19convertido.png"
            className="absolute h-[900px] inset-[0] justify-center m-auto object-cover w-full"
            alt="tormarch19conve"
          />
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[10%] my-auto w-[28%]">
          <div className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full">
            <Text
              className="font-futuramaxicgbold text-gray_900 text-left w-auto"
              variant="body3"
            >
              Create New Account
            </Text>
            <Text
              className="font-futuramaxicgbook font-normal text-gray_600 text-left w-auto"
              variant="body14"
            >
              Create your own Account
            </Text>
          </div>
          <div className="flex flex-col font-futuramaxicgbook items-center justify-start mt-[45px] w-auto md:w-full">
            <Text
              className="text-blue_gray_900 text-left w-auto"
              variant="body10"
            >
              Email Address
            </Text>
          </div>
          <div className="flex flex-col font-futuramaxicgbook gap-[26px] items-start justify-start mt-[119px] w-full">
            <Text
              className="text-blue_gray_900 text-left w-auto"
              variant="body10"
            >
              User name
            </Text>
            <div className="bg-white_A700_01 border border-gray_400 border-solid md:h-[68px] h-[70px] relative rounded-md w-full">
              <Text
                className="ml-5 my-auto text-black_900 text-left w-auto"
                variant="body15"
              >
                Jennimar17
              </Text>
              <div className="absolute bg-white_A700_01 border border-gray_600 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[19px] rounded-md w-full">
                <Text
                  className="my-2 text-gray_600 text-left w-auto"
                  variant="body15"
                >
                  Type your username
                </Text>
              </div>
            </div>
          </div>
          <div className="font-futuramaxicgbook h-[155px] md:h-[179px] mt-[25px] relative w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body10"
                >
                  Password
                </Text>
                <div className="bg-white_A700_01 border border-gray_400 border-solid flex flex-col items-center justify-start mt-6 pt-[25px] rounded-md w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-[89%] md:w-full">
                      <Text
                        className="text-gray_900 text-left w-auto"
                        variant="body15"
                      >
                        ************
                      </Text>
                      <Img
                        src="images/img_eye_1.svg"
                        className="h-[19px] w-auto"
                        alt="eyeOne"
                      />
                    </div>
                    <Line className="bg-green_A200 h-1 rounded-bl-[5px] rounded-br-[5px] rounded-tl-none rounded-tr-none w-full" />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between ml-auto mt-[25px] w-[94%] md:w-full">
                  <Text
                    className="text-gray_600 text-left w-auto"
                    variant="body15"
                  >
                    Remember me?
                  </Text>
                  <Text
                    className="text-gray_600 text-left w-auto"
                    variant="body15"
                  >
                    Forgot Passoword ?
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-yellow_A700 bottom-[0] flex flex-col items-end justify-start left-[0] p-0.5 rounded-sm w-[15px]">
              <Img
                src="images/img_checkmark.svg"
                className="h-[7px] w-auto"
                alt="checkmark"
              />
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[399px] sm:min-w-full mt-[51px] text-2xl md:text-[22px] text-center text-white_A700_01 sm:text-xl tracking-[0.10px] w-auto"
            shape="RoundedBorder6"
            size="xl"
            variant="OutlineBluegray90026"
          >
            Register
          </Button>
        </div>
        <Img
          src="images/img_group11.png"
          className="absolute h-[57px] left-[8%] object-cover top-[3%] w-[12%]"
          alt="groupEleven"
        />
      </div>
    </>
  );
};

export default Login7RegisterPage;
