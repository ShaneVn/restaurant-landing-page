import React from "react";
import { MenuItem, SubHeading } from "../../components";
import images from "../../constants/images";
import { data } from "../../constants";
import { Button } from "../../components";

const SpecialMenu = () => {
  return (
    <div
      className=" flex flex-col items-center bg-color_black section__padding  "
      id="menu"
    >
      {/* top part */}
      <div className="flex flex-col items-center justify-center text-center">
        <SubHeading title="Menu That Fits Your Palette" imageCenter={true} />
        <h1 className="section-title ">Today's Special</h1>
      </div>

      {/* middle part*/}
      <div className="flex flex-col xl:flex-row items-center justify-center space-x-10 w-full   ">
        {/* left side text */}
        <div
          className=" flex flex-col items-center flex-1 w-full "
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <h1 className="text-color_white font-cormorant text-[40px] mb-10">
            Wine & Beer
          </h1>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>

        {/* middle imgage */}
        <div class="">
          <img
            src={images.drink}
            alt="cocktails"
            className="rounded-lg w-[410px] h-auto"
          />
        </div>

        {/* right part text */}
        <div
          className=" flex flex-col items-center flex-1 w-full"
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <h1 className="text-color_white font-cormorant text-[40px] mb-10">
            Cocktails
          </h1>
          {data.cocktails.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 ">
        <Button text="View More" section="gallery" />
      </div>
    </div>
  );
};

export default SpecialMenu;
