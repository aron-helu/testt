import React from "react";

import { Button, Img, Text } from "components";

const CARTPAGECard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[300px] mx-auto w-full">
          <Img
            src="images/img_productcover5.png"
            className="h-[300px] m-auto object-cover w-full"
            alt="productcoverFive"
          />
          <Text
            className="absolute bg-red_600 font-bold font-montserrat justify-center left-[7%] px-2.5 rounded-[3px] self-stretch text-center text-shadow-ts text-white_A700_01 top-[0] tracking-[0.20px] w-auto"
            variant="body14"
          >
            {props?.tag}
          </Text>
          <div className="absolute bottom-[29%] flex flex-row gap-[11px] items-center justify-center right-[34%] w-[21%]">
            <Button
              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
              size="smIcn"
              variant="icbFillWhiteA70001"
            >
              <Img src="images/img_map.svg" className="h-[18px]" alt="map" />
            </Button>
            <Img
              src="images/img_like.svg"
              className="h-[30px] rounded-[50%] w-[30px]"
              alt="like"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[-49px] mx-auto pb-[35px] pt-[25px] sm:px-5 px-[25px] w-[348px] md:w-full z-[1]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start self-stretch w-auto">
                <Text
                  className="font-futuramaxicgdemi text-gray_600 text-left w-auto"
                  variant="body15"
                >
                  {props?.linkproductcate}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[50px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_icon_emojionestar.svg"
                    className=""
                    alt="icon emojione-star"
                  />
                }
                shape="RoundedBorder15"
                size="sm"
                variant="FillPurple900"
              >
                <div className="font-montserrat font-normal not-italic text-left text-white_A700_01 text-xs tracking-[0.20px]">
                  {props?.p49}
                </div>
              </Button>
            </div>
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-gray_900 text-left w-[94%] sm:w-full"
              variant="body15"
            >
              {props?.paragraphproduc}
            </Text>
            <div className="flex flex-col items-center justify-start mt-[19px] w-[51%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="font-futuramaxicgbold text-left text-purple_900 w-auto"
                      variant="body7"
                    >
                      {props?.price}
                    </Text>
                  </div>
                  <div className="flex relative w-[31%]">
                    <div className="flex flex-col items-center justify-start my-auto w-[21px]">
                      <Img
                        src="images/img_arrowdown_teal_300.svg"
                        className="h-5 rounded-[50%] w-[21px]"
                        alt="arrowdown"
                      />
                    </div>
                    <Text
                      className="font-futuramaxicgdemi ml-[-0.03px] mt-[3px] text-gray_600_a0 text-left w-auto z-[1]"
                      variant="body16"
                    >
                      {props?.priceOne}
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-futuramaxicgdemi mt-0.5 text-gray_600_a0 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.paywith10000}
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[146px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_cart_gray_900.svg"
                    className="mr-[3px] my-px"
                    alt="cart"
                  />
                }
                shape="CircleBorder21"
                size="md"
                variant="OutlineGray900"
              >
                <div className="font-futuramaxicgdemi font-normal text-gray_900 text-left text-sm tracking-[0.20px]">
                  {props?.addToCart}
                </div>
              </Button>
              <Button
                className="cursor-pointer font-futuramaxicgdemi font-normal min-w-[111px] text-center text-gray_900_01 text-sm tracking-[0.20px] w-auto"
                shape="CircleBorder21"
                size="md"
                variant="FillYellowA700"
              >
                {props?.buyNow}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CARTPAGECard.defaultProps = {
  tag: "Sale",
  linkproductcate: "Digital Cameras",
  p49: "4.9",
  paragraphproduc:
    "Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)",
  price: "$ 1,039.95",
  priceOne: "USDT",
  paywith10000: "Pay with +10000 cryptocurrencies",
  addToCart: "Add to cart",
  buyNow: "Buy Now",
};

export default CARTPAGECard;
