import { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';

// <GiHamburgerMenu/>
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  console.log(isToggle);
  return (
    <div className="flex bg-color_black justify-between items-center py-6 px-[100px] text-white">
      <div>
        <img src={images.gericht} className="w-[150px]" alt="" />
      </div>
      <div>
        <ul className="hidden space-x-8 lg:flex">
          <li className="">
            <a className="nav-hover" href="#home">
              Home
            </a>
          </li>
          <li className="">
            <a className="nav-hover" href="#about">
              About
            </a>
          </li>
          <li className="">
            <a className="nav-hover" href="#menu">
              Menu
            </a>
          </li>
          <li className="">
            <a className="nav-hover" href="#awards">
              Awards
            </a>
          </li>
          <li className="">
            <a className="nav-hover" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden space-x-8 sm:flex items-center">
        <a className="nav-hover" href="">
          Login / Register
        </a>
        <div className="border-[0.5px] #545454 h-[30px] border-color_gray" />
        <a className="nav-hover" href="">
          Book Table
        </a>
      </div>

      <div className="lg:hidden flex items-center nav-hover cursor-pointer">
        <GiHamburgerMenu fontSize={27} onClick={() => setIsToggle(true)} />
      </div>

      {isToggle && (
        <div className="h-screen w-full flex flex-col fixed z-10 bg-color_black top-0 left-0 justify-center items-center ">
          <MdOutlineRestaurantMenu fontSize={27} className="absolute text-color_golden top-5 right-5 cursor-pointer" onClick={()=>setIsToggle(false)}/>
          <ul className="text-lg space-y-4 font-cormorant text-color_golden">
            <li className="">
              <a className="nav-hover" href="#home">
                Home
              </a>
            </li>
            <li className="">
              <a className="nav-hover" href="#about">
                About
              </a>
            </li>
            <li className="">
              <a className="nav-hover" href="#menu">
                Menu
              </a>
            </li>
            <li className="">
              <a className="nav-hover" href="#awards">
                Awards
              </a>
            </li>
            <li className="">
              <a className="nav-hover" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;