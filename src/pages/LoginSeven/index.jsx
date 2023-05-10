import React from "react";

import { Button, Img, Input, Text } from "components";

const LoginSevenPage = () => {
  return (
    <>
      <div className="bg-white_A700 h-[900px] mx-auto md:pl-10 sm:pl-5 pl-[76px] relative w-full">
        <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-evenly ml-auto my-auto w-[95%]">
          <Img
            src="images/img_group11.png"
            className="h-[57px] sm:h-auto md:mt-0 mt-7 object-cover w-[13%] md:w-full"
            alt="groupEleven"
          />
          <div className="h-[900px] relative w-[88%] md:w-full">
            <div className="bg-yellow_A700 h-[900px] ml-auto my-auto w-[63%]"></div>
            <Img
              src="images/img_tormarch19convertido.png"
              className="absolute h-[900px] inset-[0] justify-center m-auto object-cover w-full"
              alt="tormarch19conve"
            />
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-[28%]">
          <div className="flex flex-col gap-[31px] items-start justify-start w-auto md:w-full">
            <Text
              className="font-futuramaxicgbold text-gray_900 text-left w-auto"
              variant="body3"
            >
              Login{" "}
            </Text>
            <Text
              className="font-futuramaxicgbook font-normal text-gray_600 text-left w-auto"
              variant="body14"
            >
              Welcome back! Sign in to your account
            </Text>
          </div>
          <Text
            className="font-futuramaxicgbook mt-[78px] text-blue_gray_900 text-left w-auto"
            variant="body7"
          >
            Email Address
          </Text>
          <Input
            wrapClassName="mt-6 w-full"
            className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_600 text-gray_600 text-left text-xs w-full"
            type="email"
            name="componentOne"
            placeholder="Type your email"
            shape="RoundedBorder6"
            size="2xl"
            variant="OutlineGray600"
          ></Input>
          <div className="font-futuramaxicgbook h-[155px] md:h-[199px] mt-[45px] relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray_900 text-left w-auto"
                  variant="body7"
                >
                  Password
                </Text>
                <Input
                  wrapClassName="flex mt-[22px] w-full"
                  className="font-normal p-0 placeholder:text-gray_600 text-gray_600 text-left text-xs w-full"
                  type="password"
                  name="groupThirtyNine"
                  placeholder="Type your password here"
                  suffix={
                    <Img
                      src="images/img_eye_1.svg"
                      className="ml-[35px] my-auto"
                      alt="eye 1"
                    />
                  }
                  shape="RoundedBorder6"
                  size="xl"
                  variant="OutlineGray600"
                ></Input>
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
            <div className="absolute border border-gray_600 border-solid bottom-[0] h-3.5 left-[0] rounded-sm w-[15px]"></div>
          </div>
          <Button
            className="cursor-pointer font-bold font-montserrat min-w-[399px] sm:min-w-full mt-[51px] text-2xl md:text-[22px] text-center text-white_A700_01 sm:text-xl tracking-[0.10px] w-auto"
            shape="RoundedBorder6"
            size="xl"
            variant="OutlineBluegray90026"
          >
            LogIn
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginSevenPage;
