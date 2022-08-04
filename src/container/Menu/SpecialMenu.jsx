import React from "react";
import { MenuItem, SubHeading } from "../../components";
import images from "../../constants/images";
import { data } from "../../constants";

const SpecialMenu = () => {
  return (
    <div
      className=" flex flex-col items-center bg-color_black section__padding  "
      id="menu"
    >
      <div className="flex flex-col items-center justify-center text-center ">
        <SubHeading title="Menu That Fits Your Palette" imageCenter={true} />
        <h1 className="font-cormorant lg:text-[70px] text-[50px] text-color_golden ">
          Today's Special
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center space-x-10 w-full   ">
        <div className=" flex flex-col items-center flex-1 w-full ">
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
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/fr
            esh-tropical-cocktail-pineapple-ice-jar-glass-dark-blue-background-studio-shot-drink-freeze-motion-flying-171168493.jpg"
            alt=""
            className="rounded-lg w-[410px] h-auto"
          />
        </div>

        <div className=" flex flex-col items-center flex-1 w-full">
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
            View More
          </span>
        </a>
      </div>
    </div>
  );
};

export default SpecialMenu;
