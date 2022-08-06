import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding ">
      <div className="app__wrapper_img mr-[200px]">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="flex-1 ">
        <SubHeading title="Chef's Word" />
        <h1 className="section-title mb-12">What we Believe in </h1>
        <div className="flex items-end justify-start">
          <img
            className="w-[47px] h-[40px] mr-3 mb-1"
            src={images.quote}
            alt=""
          />
          <p className="leading-8 font-openSans text-color_grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          </p>
        </div>

        <p className="leading-8 font-openSans text-color_grey ">
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
         
        </p>
      </div>
    </div>
  );
};
export default Chef;
