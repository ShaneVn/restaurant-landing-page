import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { data } from "../../constants";

const Awards = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="flex items-center space-x-3 mb-12  ">
      <div className="flex">
        <img src={imgUrl} alt="awards" className="w-[60px] lg:w-[60px] lg:h-[60px]  " />
      </div>
      <div className="flex flex-col">
        <p className="font-cormorant text-color_golden text-xl ">{title}</p>
        <p className="body_text lg:w-[70%]">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className="app__bg  h-[80%] flex flex-col lg:flex-row  justify-between items-center section__padding" id="awards">
    {/* left side text  */}
    <div className=" flex  flex-col flex-1  ">
      <SubHeading title={"Award & Recogonition"} />
      <h1 className="section-title mb-[70px]">Our Laurels</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap  ">
        {data.awards.map((award, index) => (
          <Awards award={award} key={award.title + index} />
        ))}
      </div>
    </div>

    {/* right side image */}
    <div className="flex-1">
      <img src="https://images.unsplash.com/photo-1458253756247-1e4ed949191b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
       alt="laurels" className="rounded-xl" 
      />
    </div>
  </div>
);

export default Laurels;
