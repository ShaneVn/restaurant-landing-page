import React from "react";
import images from "../../constants/images";
import Lottie from "lottie-web";
import mobileAnimation from "../../lottie/mobile.json"

const AboutUs = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: mobileAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div
      className="app__bg flex flex-col 2xl:flex-row items-center justify-center section__padding 2xl:h-screen"
      id="about"
    >
      {/* <div className="absolute  flex__center z-0">
        <img src={images.G} alt="G" className="w-[391px] h-[415px]" />
      </div> */}

      <div className="z-10 flex flex-col lg:items-end mr-[80px] flex-1 items-start mb-5 lg:self-start">
        <h1 className="text-color_golden font-cormorant lg:text-[80px] text-[50px]">
          About Us
        </h1>
        <img src={images.spoon_left} alt="spoon" className="mb-5" />
        <p className="text-color_grey lg:text-end mb-10 font-openSans ">
          {" "}
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis tellu
        </p>
        <a
          href="#_"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-color_golden absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-color_black font-bold font-cormorant text-lg transition-colors duration-300 ease-in-out group-hover:text-white">
            Know More
          </span>
        </a>

        <Lottie options={defaultOptions}
              height={400}
              width={400} />
        
      </div>

     

      <div className="z-10 mt-5 mb-4 w-[95%] lg:w-[475px]">
        <img
          src={images.restaurant_background}
          alt=""
          className=" rounded-lg"
        />
      </div>

      <div className="z-10  flex-1 ml-[70px] flex flex-col items-end lg:items-start lg:self-end">
        <h1 className="text-color_golden font-cormorant lg:text-[80px] text-[50px] ">
          Our History
        </h1>
        <img src={images.spoon_right} alt="spoon" className="mb-5" />
        <p className="text-color_grey font-openSans mb-10 lg:text-start text-end">
        Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <a
          href="#_"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-color_golden absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-color_black font-cormorant font-bold  text-lg transition-colors duration-300 ease-in-out group-hover:text-white">
            Know More
          </span>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
