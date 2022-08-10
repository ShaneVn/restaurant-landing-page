import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="bg-color_black section__padding flex flex-col xl:flex-row">
      <div className="flex flex-col mr-[70px] xl:w-1/3 ">
        <SubHeading title="Instagram" />
        <h1 className="section-title mb-12"> Photo Gallery</h1>
        <p className="body_text mb-5">
          {" "}
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis tellu
        </p>
        <div className="">
          <a
            href="#chef"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-color_golden absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-color_black font-bold font-cormorant text-lg transition-colors duration-300 ease-in-out group-hover:text-white">
              Know More
            </span>
          </a>
        </div>
      </div>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        speed={1200}
        slidesPerView={1}
        spaceBetween={60}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1.7,
          },
          1280: {
            // width: 1280,
            slidesPerView: 2,
          },
          1800: {
            // width: 1280,
            slidesPerView: 2.7,
          },
        }}
        className="xl:w-2/3 w-full mt-12 xl:mt-0 xl:h-[500px] h-[450px] "
      >
        <SwiperSlide className="">
          <img
            src={images.gallery01}
            alt=""
            className=" w-full h-full object-cover cursor-pointer hover_image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={images.gallery02}
            alt=""
            className="w-full h-full object-cover cursor-pointer hover_image"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src={images.gallery03}
            alt=""
            className="w-full h-full object-cover cursor-pointer hover_image"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src={images.gallery04}
            alt=""
            className=" w-full h-full object-cover cursor-pointer hover_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
