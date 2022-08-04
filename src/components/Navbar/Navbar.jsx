import { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

// <GiHamburgerMenu/>
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  console.log(isToggle);
  return (
    <div className="flex bg-color_black justify-between items-center py-5 lg:px-[100px] px-[50px] text-white fixed w-full z-50 top-0 ">
      <div>
        <h1 className="text-4xl font-cormorant cursor-pointer text-color_golden font-bold">L’Orphéon</h1>
      </div>
      <div>
        <ul className="hidden space-x-8 lg:flex font-cormorant text-lg ">
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
      <div className="hidden space-x-8 sm:flex items-center font-cormorant">
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
        <div
          className="h-screen w-full flex flex-col fixed z-10 bg-color_black top-0 
        left-0 justify-center items-center slide-bottom"
        >
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="absolute text-color_golden top-5 right-5 cursor-pointer"
            onClick={() => setIsToggle(false)}
          />
          <ul className="text-xl space-y-4 font-cormorant text-color_golden">
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
