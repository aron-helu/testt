import React from "react";

import { Button, Img, List, Text } from "components";

const PRODUCTPAGEDESCRIPTIONStackrectangleten = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_rectangle10_281x1616.png"
          className="absolute h-[281px] inset-x-[0] mx-auto object-cover top-[3%] w-full"
          alt="rectangleTen"
        />
        <Img
          src="images/img_rectangle11_281x1621.png"
          className="absolute h-[281px] inset-x-[0] mx-auto object-cover top-[3%] w-full"
          alt="rectangleEleven"
        />
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[41px] md:px-10 sm:px-5 w-[1621px] md:w-full"
          style={{ backgroundImage: "url('images/img_group84.png')" }}
        >
          <div className="flex flex-col gap-[54px] items-center justify-start mb-[346px] w-[93%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[68px] w-auto md:w-full">
                <Text
                  className="font-futuramaxicgbold leading-[52.00px] text-left text-yellow_A700_01 w-full"
                  as="h6"
                  variant="h6"
                >
                  {props?.offer}
                </Text>
                <Button
                  className="cursor-pointer font-bold font-montserrat text-center text-gray_900 text-sm tracking-[0.20px] w-[163px]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillYellowA700"
                >
                  {props?.buyNow}
                </Button>
              </div>
              <Img
                src="images/img_image1.png"
                className="h-[294px] sm:h-auto object-cover w-auto md:w-full"
                alt="imageOne"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col justify-start w-[51%] md:w-full">
                  <div className="flex flex-col items-center justify-start ml-14 md:ml-[0] w-[54%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        {!!props?.home ? (
                          <Text
                            className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                            variant="body14"
                          >
                            {props?.home}
                          </Text>
                        ) : null}
                        {!!props?.nine ? (
                          <Text
                            className="font-medium font-roboto text-gray_700_01 text-left w-auto"
                            variant="body12"
                          >
                            {props?.nine}
                          </Text>
                        ) : null}
                        {!!props?.tvvideo ? (
                          <Text
                            className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                            variant="body14"
                          >
                            {props?.tvvideo}
                          </Text>
                        ) : null}
                        {!!props?.ten ? (
                          <Text
                            className="font-medium font-roboto text-gray_700_01 text-left w-auto"
                            variant="body12"
                          >
                            {props?.ten}
                          </Text>
                        ) : null}
                        {!!props?.televisions ? (
                          <Text
                            className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                            variant="body14"
                          >
                            {props?.televisions}
                          </Text>
                        ) : null}
                        {!!props?.eleven ? (
                          <Text
                            className="font-medium font-roboto text-gray_700_01 text-left w-auto"
                            variant="body12"
                          >
                            {props?.eleven}
                          </Text>
                        ) : null}
                        {!!props?.productpage ? (
                          <Text
                            className="font-futuramaxicgbook font-normal mt-0.5 text-gray_700 text-left w-auto"
                            variant="body14"
                          >
                            {props?.productpage}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        {!!props?.bgThree ? (
                          <Img
                            src={props?.bgThree}
                            className="h-[635px] md:h-auto object-cover w-full"
                            alt="bg_Three"
                          />
                        ) : null}
                      </div>
                      {!!props?.bgFour ? (
                        <Img
                          src={props?.bgFour}
                          className="h-[250px] mt-[-63px] object-cover w-[32%] z-[1]"
                          alt="bg_Four"
                        />
                      ) : null}
                      {!!props?.bgFive ? (
                        <Img
                          src={props?.bgFive}
                          className="h-[250px] mt-[-63px] mx-auto object-cover w-[32%] z-[1]"
                          alt="bg_Five"
                        />
                      ) : null}
                      {!!props?.bgSix ? (
                        <Img
                          src={props?.bgSix}
                          className="h-[250px] ml-auto mt-[-63px] object-cover w-[32%] z-[1]"
                          alt="bg_Six"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[51px] items-start justify-start md:mt-0 mt-[124px] w-[46%] md:w-full">
                  <div className="h-[365px] md:h-[442px] sm:h-[507px] relative w-full">
                    {!!props?.linkproductcate ? (
                      <Text
                        className="font-futuramaxicgbook font-normal mt-[73px] text-gray_600 text-left w-auto"
                        variant="body14"
                      >
                        {props?.linkproductcate}
                      </Text>
                    ) : null}
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          {!!props?.element ? (
                            <div className="bg-light_green_900 h-3 mb-1 md:mt-0 mt-5 rounded-[50%] w-3"></div>
                          ) : null}
                          {!!props?.instock ? (
                            <Text
                              className="font-hind font-normal ml-2.5 md:ml-[0] md:mt-0 mt-[13px] not-italic text-gray_900_02 text-left w-auto"
                              variant="body14"
                            >
                              {props?.instock}
                            </Text>
                          ) : null}
                          {!!props?.heart ? (
                            <Button
                              className="flex h-[34px] items-center justify-center mb-0.5 md:ml-[0] ml-[522px] w-[34px]"
                              shape="icbCircleBorder15"
                              size="smIcn"
                              variant="icbOutlineGray800"
                            >
                              <Img
                                src={props?.heart}
                                className="h-[18px]"
                                alt="heart"
                              />
                            </Button>
                          ) : null}
                        </div>
                        {!!props?.vseries65class ? (
                          <Text
                            className="font-futuramaxicgbold leading-[42.00px] mt-14 text-gray_900_02 text-left w-[95%] sm:w-full"
                            variant="body3"
                          >
                            {props?.vseries65class}
                          </Text>
                        ) : null}
                        <div className="flex flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[5px] w-[23%] md:w-full">
                          {!!props?.p49 ? (
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[50px] w-auto"
                              leftIcon={
                                <Img
                                  src="images/img_icon_emojionestar.svg"
                                  className="mr-[5px]"
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
                          ) : null}
                          {!!props?.reviewscounter ? (
                            <Text
                              className="font-futuramaxicgbook font-normal mt-[3px] text-gray_600 text-left tracking-[-0.21px] underline w-auto"
                              variant="body14"
                            >
                              {props?.reviewscounter}
                            </Text>
                          ) : null}
                        </div>
                        <div className="flex flex-row gap-[7px] items-start justify-start mt-[50px] w-[33%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            {!!props?.price ? (
                              <Text
                                className="font-futuramaxicgbold text-left text-purple_900 w-auto"
                                variant="body4"
                              >
                                {props?.price}
                              </Text>
                            ) : null}
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[3px] w-[21px]">
                            {!!props?.arrowdown ? (
                              <Img
                                src={props?.arrowdown}
                                className="h-5 rounded-[50%] w-[21px]"
                                alt="arrowdown"
                              />
                            ) : null}
                          </div>
                          {!!props?.priceOne ? (
                            <Text
                              className="font-futuramaxicgdemi mt-1.5 text-gray_600_a0 text-left w-auto"
                              variant="body16"
                            >
                              {props?.priceOne}
                            </Text>
                          ) : null}
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[29px] w-[73%] md:w-full">
                          <div className="bg-white_A700_01 border border-gray_800 border-solid flex flex-row items-center justify-center p-[15px] rounded-[26px] w-[21%] sm:w-full">
                            {!!props?.twelve ? (
                              <Text
                                className="font-bold font-montserrat ml-[9px] mt-0.5 text-gray_700_01 text-left tracking-[0.20px] w-auto"
                                variant="body14"
                              >
                                {props?.twelve}
                              </Text>
                            ) : null}
                            {!!props?.two ? (
                              <Text
                                className="font-bold font-montserrat ml-2.5 text-gray_700_01 text-left tracking-[0.20px] w-auto"
                                variant="body14"
                              >
                                {props?.two}
                              </Text>
                            ) : null}
                            {!!props?.thirteen ? (
                              <Text
                                className="font-bold font-montserrat mx-2.5 text-gray_700_01 text-left tracking-[0.20px] w-auto"
                                variant="body14"
                              >
                                {props?.thirteen}
                              </Text>
                            ) : null}
                          </div>
                          <div className="h-[52px] ml-6 sm:ml-[0] relative w-[39%] sm:w-full">
                            {!!props?.cart ? (
                              <Img
                                src={props?.cart}
                                className="h-4 ml-[30px] my-auto w-4"
                                alt="cart"
                              />
                            ) : null}
                            {!!props?.buttonmd ? (
                              <Text
                                className="absolute border border-gray_800 border-solid font-futuramaxicgdemi font-normal h-full inset-[0] m-auto sm:px-5 px-[30px] py-[15px] rounded-[26px] self-stretch text-gray_800 text-left tracking-[0.20px] w-max"
                                variant="body14"
                              >
                                {props?.buttonmd}
                              </Text>
                            ) : null}
                          </div>
                          {!!props?.buyNowOne ? (
                            <Button
                              className="cursor-pointer font-futuramaxicgdemi font-normal min-w-[143px] sm:ml-[0] ml-[18px] text-center text-gray_800 text-sm tracking-[0.20px] w-auto"
                              shape="CircleBorder24"
                              size="lg"
                              variant="FillYellowA700"
                            >
                              {props?.buyNowOne}
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end outline outline-[1px] outline-gray_600 p-[25px] sm:px-5 rounded-[13px] w-[95%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-end justify-start w-[87%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="md:h-8 h-[26px] sm:mt-0 mt-1.5 relative w-[23%] sm:w-full">
                          <div className="absolute h-[26px] inset-y-[0] left-[0] my-auto w-[88%]">
                            <div className="absolute h-[26px] inset-y-[0] left-[0] my-auto w-[86%]">
                              <div className="absolute h-[26px] inset-y-[0] left-[0] my-auto w-[84%]">
                                <div className="absolute h-[26px] inset-y-[0] left-[0] my-auto w-4/5">
                                  <div className="absolute h-[26px] inset-y-[0] left-[0] my-auto w-3/4">
                                    {!!props?.shibainubadge ? (
                                      <Img
                                        src={props?.shibainubadge}
                                        className="absolute h-[26px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[26px]"
                                        alt="shibainubadge"
                                      />
                                    ) : null}
                                    {!!props?.save ? (
                                      <Button
                                        className="absolute flex h-[26px] inset-y-[0] items-center justify-center my-auto right-[0] w-[26px]"
                                        shape="icbCircleBorder15"
                                        size="smIcn"
                                        variant="icbFillDeeppurpleA200"
                                      >
                                        <Img
                                          src={props?.save}
                                          className=""
                                          alt="save"
                                        />
                                      </Button>
                                    ) : null}
                                  </div>
                                  {!!props?.airplane ? (
                                    <Button
                                      className="absolute flex h-[26px] inset-y-[0] items-center justify-center my-auto right-[0] w-[26px]"
                                      shape="icbCircleBorder15"
                                      size="smIcn"
                                      variant="icbFillGray40001"
                                    >
                                      <Img
                                        src={props?.airplane}
                                        className=""
                                        alt="airplane"
                                      />
                                    </Button>
                                  ) : null}
                                </div>
                                {!!props?.dogecoinbadge ? (
                                  <Img
                                    src={props?.dogecoinbadge}
                                    className="absolute h-[26px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[26px]"
                                    alt="dogecoinbadge"
                                  />
                                ) : null}
                              </div>
                              {!!props?.arrowdownOne ? (
                                <Img
                                  src={props?.arrowdownOne}
                                  className="absolute h-[26px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[26px]"
                                  alt="arrowdown_One"
                                />
                              ) : null}
                            </div>
                            {!!props?.call ? (
                              <Button
                                className="absolute flex h-[26px] inset-y-[0] items-center justify-center my-auto right-[0] w-[26px]"
                                shape="icbCircleBorder15"
                                size="smIcn"
                                variant="icbFillAmber600"
                              >
                                <Img
                                  src={props?.call}
                                  className=""
                                  alt="call"
                                />
                              </Button>
                            ) : null}
                          </div>
                          {!!props?.tetherbadge ? (
                            <Img
                              src={props?.tetherbadge}
                              className="absolute h-[26px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[26px]"
                              alt="tetherbadge"
                            />
                          ) : null}
                        </div>
                        {!!props?.descriptionThree ? (
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] text-gray_900 text-left"
                            variant="body14"
                          >
                            {props?.descriptionThree}
                          </Text>
                        ) : null}
                      </div>
                      <List
                        className="flex-col gap-[13px] grid w-[94%]"
                        orientation="vertical"
                      >
                        <div className="flex sm:flex-col flex-row gap-[49px] items-end justify-start w-full">
                          <div className="flex flex-col h-[43px] items-center justify-start mb-0.5 sm:mt-0 mt-1.5 w-[43px]">
                            {!!props?.ticket ? (
                              <Img
                                src={props?.ticket}
                                className="h-[43px] w-[43px]"
                                alt="ticket"
                              />
                            ) : null}
                          </div>
                          {!!props?.duration ? (
                            <Text
                              className="font-futuramaxicgbook font-normal leading-[22.00px] text-gray_900 text-left"
                              variant="body14"
                            >
                              {props?.duration}
                            </Text>
                          ) : null}
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start w-[93%] md:w-full">
                          <div className="flex flex-col h-[43px] items-center justify-start sm:mt-0 mt-0.5 w-[43px]">
                            {!!props?.mail ? (
                              <Img
                                src={props?.mail}
                                className="h-[43px] w-[43px]"
                                alt="mail"
                              />
                            ) : null}
                          </div>
                          {!!props?.duration1 ? (
                            <Text
                              className="font-futuramaxicgbook font-normal leading-[22.00px] text-gray_900 text-left"
                              variant="body14"
                            >
                              {props?.duration1}
                            </Text>
                          ) : null}
                        </div>
                      </List>
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

PRODUCTPAGEDESCRIPTIONStackrectangleten.defaultProps = {
  offer: "Grab Upto 50% Off On Selected TV & Video",
  buyNow: "Buy Now",
};

export default PRODUCTPAGEDESCRIPTIONStackrectangleten;
