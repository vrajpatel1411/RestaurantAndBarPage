import "./SpecialMenu.css";
import images from "../../constants/images";
import Button from "../../components/Buttons/buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

import MenuItem from "../../components/Menuitem/Menuitem";

const SpecialMenu = () => {
  const Drink_menu = [
    {
      name: "Chapel Hill Shiraz",
      price: 56,
      description: "AU | Bottle",
    },
    {
      name: "Catena Malbee",
      price: 59,
      description: "AU | Bottle",
    },
    {
      name: "La Vieillw Rose",
      price: 44,
      description: "FR | 750 Ml",
    },
    {
      name: " Rhino Pale Ale",
      price: 31,
      description: "CA | 750 Ml",
    },
    {
      name: "Irish Guinness",
      price: 26,
      description: "IE | 750 Ml",
    },
  ];

  const Cocktails = [
    {
      name: "Aperol Sprtiz",
      price: 20,
      description: "Aperol | Villa Marchesi Prosecco | Soda | 30 Ml",
    },

    {
      name: "Dark 'N' Stormy",
      price: 16,
      description: " Dark Rum | Ginger Beer | Slice Of Lime",
    },
    {
      name: "Daiquiri",
      price: 10,
      description: "Rum | Citrus Juice | Sugar",
    },
    {
      name: "Old Fashioned",
      price: 31,
      description: "Bourbon | Brown Sugar | Angostura Bitters",
    },
    {
      name: "Negroni",
      price: 26,
      description: "Gin | Sweet Vermouth | Campari | Orange Garnish",
    },
  ];
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
            {Drink_menu.map((drink, index) => (
              <MenuItem
                key={index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
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
            {Cocktails.map((drink, index) => (
              <MenuItem
                key={index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
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
