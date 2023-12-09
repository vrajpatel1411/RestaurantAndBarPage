import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import Nav_item from "./Nav_item";
import Small_screen from "./mobile_navbar";

import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const nav_items = ["Home", "About", "Menu", "Awards", "Contact"];
  return (
    <nav className="w-full flex justify-between items-center bg-black px-8 py-4">
      <div className="flex justify-start items-center">
        <LazyLoadImage
          src={images.gericht}
          className="w-28 lg:w-36 2xl:w-48"
          alt="app Logo"
        />
      </div>
      <ul className="hidden flex-1  justify-center items-center lg:flex">
        {nav_items.map((item, index) => (
          <Nav_item
            key={index}
            title={item}
            type="app_navbar-links"
          />
        ))}
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
        <Small_screen
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          nav_items={nav_items}
        />
      </div>
      {/* <div className="app__navbar-smallscreen" >
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            setToggleMenu(true);
          }}>
          <div className="w-8 h-1 rounded-full bg-white"></div>
          <div className="w-8 h-1 rounded-full bg-white"></div>
          <div className="w-8 h-1 rounded-full bg-white"></div>
        </div>

        {toggleMenu && (
          <div className="  app__navbar-smallscreen_overlay animate-custom-menu  ">
            <button
              className="flex flex-col  overlay_close mt-2 mr-8"
              onClick={() => {
                setToggleMenu(false);
              }}>
              <svg
                className="h-8 w-8 font-bold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col my-24 text-center justify-center items-center ">
              <ul className="  flex  flex-col justify-center  items-center  lg:none">
                {nav_items.map((item, index) => (
                  <Nav_item
                    key={index}
                    title={item}
                    type="app_navbar_small_links"
                  />
                ))}
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
      </div> */}
    </nav>
  );
};
export default Navbar;
