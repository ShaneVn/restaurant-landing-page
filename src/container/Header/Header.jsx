import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import Lottie, { useLottie } from "lottie-react";
import animation from "../../lottie/ballon.json";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);
  return (
    <div className="app__wrapper section__padding bg-color_black" id="home">
      <div className="app__wrapper_img lg:pt-12   ">
        <img
          src={images.steak}
          alt="header_image"
          className=" 2xl:w-[55%] rounded-lg lg:w-[70%] "
        />
      </div>

      <div className="app__wrapper_info pt-12 lg:pt-0 relative">
        <div class="md:w-[80%] space-y-7">
          <SubHeading title={"Chase The New Flavor"} />
          <h1 className="text-color_golden lg:text-[80px] text-[50px] font-cormorant">
            The Key To Fine Dining
          </h1>
          <p className="text-color_white mb-9">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <a
            href="#menu"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span
              class="w-48 h-48 rounded rotate-[-40deg] bg-color_golden
         absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all
          translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 
          group-hover:translate-x-0"
            ></span>
            <span
              class="font-cormorant relative w-full text-left text-black 
        transition-colors duration-300 ease-in-out group-hover:text-white text-lg"
            >
              Explore Menu
            </span>
          </a>

          <div className="hidden xl:flex absolute top-1 right-5">{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
