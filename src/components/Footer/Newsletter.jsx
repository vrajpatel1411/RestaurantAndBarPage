import images from "../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Button from "../Buttons/buttons";
const Newsletter = () => (
  <div
    className="w-[90%] lg:w-[70%] py-4 px-4 lg:px-12 flex flex-col justify-center items-center border-solid border-golden border-[1px] mt-12
   bg-black">
    <div className="text-center flex flex-col justify-center items-center">
      <p className="p_cormorant">NewsLetter</p>

      <LazyLoadImage
        className="w-[45px]"
        src={images.spoon}
        alt="Spoon Image"
      />
      <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl md:text-4xl lg:text-5xl ">
        Subscribe To Our Newsletter
      </h1>
      <p className="p__opensans text-white">And never miss latest Updates!</p>
    </div>
    <div className="flex flex-col justify-center items-center lg:flex-row  mt-4 lg:mt-12">
      <input
        className="w-full mb-8 mr-0 lg:mr-8 lg:mb-0 md:w-[400px] lg:w-[620px] border-2 border-solid border-golden rounded-md font-base text-white text-base  py-3 px-4 bg-black "
        type="email"
        placeholder="Enter your email address"
      />
      <Button
        name="Subscribe"
        className="my-8"
      />
    </div>
  </div>
);

export default Newsletter;
