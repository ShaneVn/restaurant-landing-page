import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

const SpecialMenu = () => {
  return (
    <div className=" flex flex-col items-center  bg-color_black section__padding  " id="menu">
      <div className="flex flex-col items-center justify-center text-center">
        <SubHeading title="Menu That Fits Your Palette" imageCenter={true} />
        <h1 className="font-cormorant lg:text-[80px] text-[50px] text-color_golden ">
          Today's Special
        </h1>
      </div>
      <div>
        <div></div>
        <div></div>
        <div>
          <img src={images.menu} alt="" className="rounded-lg w-[410px] h-auto" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SpecialMenu;
