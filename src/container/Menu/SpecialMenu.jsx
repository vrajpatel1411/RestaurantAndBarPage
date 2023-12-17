import "./SpecialMenu.css";
import images from "../../constants/images";
import Button from "../../components/Buttons/buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

import MenuItem from "../../components/Menuitem/Menuitem";
import { data } from "../../constants/index";
const SpecialMenu = () => {
  return (
    <div
      className="bg-black app__wrapper section_padding flex flex-col justify-center items-center
  ">
      <div className="mb-4 flex flex-col justify-center items-center">
        <p className="p_cormorant">Menu That Fits Your Palatte</p>
        <img
          className=" w-[45px]"
          src={images.spoon}
          loading="lazy"
          alt="Spoon Image"></img>
      </div>
      <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl lg:text-8xl/[117px] ">
        Today's Special
      </h1>
      <div className="flex-1 flex flex-col lg:flex-row  items-center ">
        <div className="flex-1 flex flex-col w-full md:w-3/4 lg:w-1/2 justify-center items-center mt-8 lg:mt-0">
          <p className="font-base text-white font-bold tracking-tightest capitalize leading-7 text-lg sm:text-xl  lg:text-4xl">
            Wine & Beer
          </p>
          <div className="flex-1 w-full">
            {data.wines.map((drink, index) => (
              <MenuItem
                key={index}
                name={drink.title}
                price={drink.price}
                description={drink.tags}
              />
            ))}
          </div>
        </div>
        <div className="w-3/4 lg:w-3/12 mx-2 lg:mx-6 ">
          <LazyLoadImage src={images.menu} />
        </div>
        <div className="flex-1 flex flex-col w-full md:w-3/4 lg:w-1/2 justify-center items-center mt-8 lg:mt-0">
          <p className="font-base text-white font-bold tracking-tightest capitalize leading-7 text-lg sm:text-xl  lg:text-4xl">
            Cocktails
          </p>
          <div className="flex-1 w-full">
            {data.cocktails.map((drink, index) => (
              <MenuItem
                key={index}
                name={drink.title}
                price={drink.price}
                description={drink.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <Button name="View More" />
      </div>
    </div>
  );
};

export default SpecialMenu;
