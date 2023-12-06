import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center bg-black px-8 py-4">
      <div className="flex justify-start items-center">
        <img
          className="w-28 lg:w-36 2xl:w-48"
          src={images.gericht}
          alt="app Logo"
        />
      </div>
      <ul className="hidden flex-1  justify-center items-center lg:flex">
        <li className="app_navbar-links p_opensans">
          <a href="#home">Home</a>
        </li>
        <li className="app_navbar-links p_opensans ">
          <a href="#about">About</a>
        </li>
        <li className="app_navbar-links p_opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="app_navbar-links p_opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="app_navbar-links p_opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hidden justify-end items-center lg:flex">
        <a
          href="#login"
          className="p_opensans  mx-4 transition ease-in hover:border-b-2 hover:border-solid hover:border-golden">
          Log In / Registration
        </a>
        <div className="w-px h-8 bg-grey " />
        <a
          href="/"
          className="p_opensans mx-4 transition ease-in hover:border-b-2 hover:border-solid hover:border-golden ">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="  app__navbar-smallscreen_overlay animate-custom-menu  ">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <div className="flex flex-col my-24 text-center justify-center items-center ">
              <ul className="  flex  flex-col justify-center  items-center  lg:none">
                <li className="app_navbar_small_links p_opensans">
                  <a href="#home">Home</a>
                </li>
                <li className="app_navbar_small_links p_opensans ">
                  <a href="#about">About</a>
                </li>
                <li className="app_navbar_small_links p_opensans">
                  <a href="#menu">Menu</a>
                </li>
                <li className="app_navbar_small_links p_opensans">
                  <a href="#awards">Awards</a>
                </li>
                <li className="app_navbar_small_links p_opensans">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="flex-1 flex justify-end items-center ">
                <a
                  href="#login"
                  className="p_opensans  mx-4 transition ease-in hover:border-b-2 hover:border-solid hover:border-golden">
                  Log In / Registration
                </a>
                <div className="w-px h-8 bg-grey " />
                <a
                  href="/"
                  className="p_opensans mx-4 transition ease-in hover:border-b-2 hover:border-solid hover:border-golden ">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
