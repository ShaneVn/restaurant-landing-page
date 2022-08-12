import React from "react";
import { Button, Newsletter, SubHeading } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col  w-full h-auto items-center app__bg section__padding">
      {/* top box for newsletter */}
      <div className="bg-color_black h-[250px]  w-screen flex flex-col items-center pt-12">
        <div
          className="flex flex-col items-center border-2 py-7 px-[80px] bg-color_black 
        border-color_golden mt-5 "
        >
          <SubHeading title="Newsletter" imageCenter />
          <h1 className="section-title">Subscribe To Our NewsLetter</h1>
          <p className="body_text text-color_white mb-12">
            And Never Miss Latest Updates!{" "}
          </p>
          <div className="flex items-center w-full">
            <div className=" border-[1px] w-full mr-10 border-color_golden rounded-[5px] overflow-hidden ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-color_black outline-none text-color_white p-2 caret-white font-cormorant w-full "
              />
            </div>
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="flex flex-col xl:flex-row justify-center items-center mt-[300px] xl:mt-[220px] w-full space-y-12">
        {/* left side text */}
        <div className="flex flex-col items-center ">
          <h1
            className="
            text-color_crimson
            font-cormorant
            font-normal
            text-4xl
            mb-5"
          >
            Contact Us
          </h1>
          <p className="body_text">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="body_text">+1 212-344-1230</p>
          <p className="body_text">+1 212-555-1230</p>
        </div>
        {/* middle  */}
        <div className="flex flex-col items-center xl:ml-[150px] xl:mr-[200px] pt-0 mt-0">
          <h1 className="section-title  pt-0 mt-0 ">L’Orphéon</h1>
          <p className="body_text w-[80%] text-center">
            {" "}
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </p>
          <img src={images.spoon_right} alt="" className="mt-5" />
          <div className="text-color_white flex mt-5 space-x-5 text-[30px]">
            <FiFacebook className="font-[24px]" />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        {/* right side */}
        <div className="xl:mr-6 flex flex-col items-center justify-center">
          <h1 className="text-color_crimson font-cormorant font-normal text-4xl mb-3">
            Working Hours
          </h1>
          <p className="body_text">Monday-Friday:</p>
          <p className="body_text mb-2">08:00 Am - 12:00 Am</p>
          <p className="body_text">Saturday-Sunday:</p>
          <p className="body_text">07:00 Am - 11:00 Pm</p>
        </div>
      </div>

      <p className="body_text xl:mt-[70px]  mt-10">
        2022 L’Orphéon. All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
