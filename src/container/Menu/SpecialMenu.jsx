import "./SpecialMenu.css";
import images from "../../constants/images";
import Button from "../../components/Buttons/buttons";

const SpecialMenu = () => (
  <div
    className="bg-black app__wrapper section_padding flex flex-col justify-center items-center
  ">
    <div className="mb-4 flex flex-col justify-center items-center">
      <p className="p_cormorant">Menu That Fits Your Palatte</p>
      <img
        className=" w-[45px]"
        src={images.spoon}
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
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Chapel Hill Shiraz
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 56
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">AU | Bottle</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Catena Malbee
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 59
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">AU | Bottle</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                La Vieillw Rose
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 44
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">FR | 750 Ml</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Rhino Pale Ale
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 31
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">CA | 750 Ml</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Irish Guinness
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 26
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">IE | 750 Ml</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 lg:w-3/12 mx-2 lg:mx-6 ">
        <img src={images.menu}></img>
      </div>
      <div className="flex-1 flex flex-col w-full md:w-3/4 lg:w-1/2 justify-center items-center mt-8 lg:mt-0">
        <p className="font-base text-white font-bold tracking-tightest capitalize leading-7 text-lg sm:text-xl  lg:text-4xl">
          Cocktails
        </p>
        <div className="flex-1 w-full">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Aperol Sprtiz
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 20
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">
                Aperol | Villa Marchesi Prosecco | Soda | 30 Ml
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Dark 'N' Stormy
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 16
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">
                Dark Rum | Ginger Beer | Slice Of Lime
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Daiquiri
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 10
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">Rum | Citrus Juice | Sugar</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Old Fashioned
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 31
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">
                Bourbon | Brown Sugar | Angostura Bitters
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
              <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
                Negroni
              </p>
              <div className="justify-end flex flex-row items-center">
                <div className="w-[30px] h-[1px] bg-golden"></div>
                <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
                  $ 26
                </p>
              </div>
            </div>
            <div>
              <p className="p_opensans text-sm">
                Gin | Sweet Vermouth | Campari | Orange Garnish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="my-8">
      <Button name="View More" />
    </div>
  </div>
);

export default SpecialMenu;
