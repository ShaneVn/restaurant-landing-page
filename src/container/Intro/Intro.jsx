import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const vidRef = useRef();

  const vidButton = () => {
    setIsPlaying((prev) => !prev);

    if (!isPlaying) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <div className="h-[50%] relative group ">
      <video
        src={meal}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="object-cover h-full w-full"
        ref={vidRef}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center
         items-center duration-[1200ms] ease-in-out cursor-pointer
          "
        onClick={vidButton}
      >
        <div className="flex__center  border-solid rounded-[50%] border-2 border-color_golden h-[100px] w-[100px] ">
          {isPlaying ? (
            <BsPauseFill color="#fff" fontSize={40} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={40} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
