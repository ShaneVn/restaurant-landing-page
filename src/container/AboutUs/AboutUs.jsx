import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";


const AboutUs = () => {
  return (
    <div className="app__bg flex__center section__padding"  id="about">
      <div className="absolute  flex__center z-0">
        <img src={images.G} alt="G" className="w-[391px] h-[415px]" />
      </div>

      <div>
        
      </div>

      <div className="z-10">
          <img src={images.knife} alt="" className="h-[910px]" />
      </div>

    </div>
  );
};

export default AboutUs;
