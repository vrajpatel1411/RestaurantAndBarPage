const MenuItem = ({ name, price, description }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex mt-[15px] flex-row justify-center items-center">
        <p className="font-base text-golden font-bold tracking-tighest capitalize text-lg flex-1 flex justify-start items-start ">
          {name}
        </p>
        <div className="justify-end flex flex-row items-center">
          <div className="w-[30px] h-[1px] bg-golden"></div>
          <p className="font-base mx-2 text-white font-bold tracking-tighest capitalize text-lg">
            $ {price}
          </p>
        </div>
      </div>
      <div>
        <p className="p_opensans text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
