import { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {RiShoppingCartLine,RiShoppingCartFill } from "react-icons/ri"




// <GiHamburgerMenu/>
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();

  console.log(isToggle);
  return (
    <div
      className="flex bg-color_black justify-between items-center py-5 lg:px-[100px] px-[50px] text-white fixed w-full z-50 top-0"
      data-aos="fade-down"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <div>
        <a href="#home" onClick={() => navigate("/")}>
          {" "}
          <h1 className="text-4xl font-cormorant cursor-pointer text-color_golden font-bold">
            L’Orphéon
          </h1>{" "}
        </a>
      </div>
      <div>
        <ul className="hidden space-x-8 lg:flex font-cormorant text-lg ">
          <li className="">
            <a className="nav-hover" href="#home" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li className="" onClick={() => navigate("/")} >
            <a className="nav-hover" href="#about">
              About
            </a>
          </li>
          <li className="" onClick={() => navigate("/")}>
            <a className="nav-hover" href="#menu">
              Menu
            </a>
          </li>
          <li className="" onClick={() => navigate("/")}>
            <a className="nav-hover" href="#awards">
              Awards
            </a>
          </li>
          <li className="" onClick={() => navigate("/")}>
            <a className="nav-hover" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden space-x-8 sm:flex items-center font-cormorant">
      <div className="cursor-pointer nav-hover group relative  ">
        <RiShoppingCartLine fontSize={27} />
        <div className=""></div>
        </div>
        <a
          className="nav-hover cursor-pointer"
          onClick={() => navigate("/order")}
          href="#order_home"
        >
          Order Now
        </a>
        <div className="border-[0.5px] #545454 h-[30px] border-color_gray" />

        <a className="nav-hover" href="">
          Login / Register
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
          <ul
            className="text-xl space-y-4 font-cormorant text-color_golden"
            onClick={() => setIsToggle(false)}
          >
            <li className="" onClick={()=>navigate('/')}>
              <a className="nav-hover" href="#home">
                Home
              </a>
            </li>
            <li className="" onClick={()=>navigate('/order')}>
              <a className="nav-hover" href="#order_home">
                Order
              </a>
            </li>
            <li className="" onClick={()=>navigate('/')}>
              <a className="nav-hover" href="#about">
                About
              </a>
            </li>
            <li className="" onClick={()=>navigate('/')}>
              <a className="nav-hover" href="#menu">
                Menu
              </a>
            </li>
            <li className="" onClick={()=>navigate('/')}>
              <a className="nav-hover" href="#awards">
                Awards
              </a>
            </li>
            <li className="" onClick={()=>navigate('/')}>
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
