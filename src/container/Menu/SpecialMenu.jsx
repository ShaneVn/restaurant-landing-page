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
      <div className="mt-10">
      <a
        href="#menu"
        class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
      >
        <span class="w-48 h-48 rounded rotate-[-40deg] bg-color_golden
         absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all
          translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 
          group-hover:translate-x-0"></span>
        <span class="font-cormorant relative w-full text-left text-black 
        transition-colors duration-300 ease-in-out group-hover:text-white text-lg">
          View More
        </span>
      </a>
      </div>
    </div>
  );
};

export default SpecialMenu;
