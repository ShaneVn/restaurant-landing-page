import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__wrapper section__padding bg-color_black" id="home" >
    <div className="app__wrapper_img pt-12   ">
      <img
        src={images.steak}
        alt="header_image"
        className=" w-[55%] rounded-lg "
      />
    </div>

    <div className="app__wrapper_info pt-12 lg:pt-0">
      <SubHeading title={"Chase The New Flavor"} />
      <h1 className="text-color_golden lg:text-[100px] text-[50px] font-cormorant">
        The Key To Fine Dining
      </h1>
      <p className="text-color_white mb-9">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
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
          Explore Menu
        </span>
      </a>
    </div>
  </div>
);

export default Header;
