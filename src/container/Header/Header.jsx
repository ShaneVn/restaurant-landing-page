import { useState } from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import { useLottie } from "lottie-react";
import animation from "../../lottie/ballon.json";
import { Waypoint } from "react-waypoint";
import Lottie from "lottie-react";

const Header = () => {
  // const defaultOptions = {
  //   loop: 1,
  //   autoplay: true,
  //   animationData: animation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  let [renderLottie, setRenderLottie] = useState(true);

  return (
    <div className="app__wrapper section__padding bg-color_black" id="home">
      <Waypoint onEnter={() => setRenderLottie(true)} />
      <Waypoint onLeave={() => setRenderLottie(false)} />
      <div className="app__wrapper_img lg:pt-12   ">
        <img
          src={images.steak}
          alt="header_image"
          className=" 2xl:w-[60%] rounded-lg lg:w-[70%]"
        />
      </div>

      <div className="app__wrapper_info pt-12 lg:pt-0 relative ">
        <div class="space-y-7 ">
          <SubHeading title={"Chase The New Flavor"} />
          <div className="lg:w-[70%]">
            <h1 className="section-title">The Key To Fine Dining</h1>
          </div>
          <div className="">
            <p className="text-color_white mb-9 font-openSans leading-8">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
          </div>
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
        transition-colors duration-300 ease-in-out group-hover:text-white text-lg font-bold"
            >
              Explore Menu
            </span>
          </a>
          {renderLottie && (
            <div className="hidden lg:flex absolute top-1 right-5">
              <Lottie animationData={animation} loop={1} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
