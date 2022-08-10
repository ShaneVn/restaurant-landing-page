import React from "react";
import { SubHeading } from "../../components";
import { Button } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className="flex__center app__bg section__padding ">
      <div className="flex-1 flex flex-col mr-[80px] ">
        <SubHeading title="contact" />
        <h1 className="section-title mb-[70px]">Find Us</h1>
        <p className="body_text"></p>
        <Button text="Visit Us" />
      </div>

      <div className="flex-1 ">
        <img src={images.findus} alt="" className="w-[90%]"/>
      </div>
    </div>
  );
};
export default FindUs;
