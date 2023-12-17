import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../constants/images";

import Button from "../../components/Buttons/buttons";
const FindUs = () => {
  return (
    <div className="bg-[url('/assets/bg.webp')] app__wrapper section_padding flex justify-center items-center">
      <div className="w-full lg:w-1/2">
        <div>
          <p className="p_cormorant">Contact</p>
          <LazyLoadImage
            className="w-[45px]"
            src={images.spoon}
            alt="Spoon Image"
          />
        </div>
        <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl lg:text-8xl/[117px] ">
          Find Us
        </h1>
        <p className="p_opensans my-8 mx-0">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 756
        </p>

        <p className="p_cormorant text-golden mt-5">Opening Hours</p>

        <div className="p_opensans my-8 mx-0">
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>

        <div className="my-8">
          <Button name="Visit Us" />
        </div>
      </div>
      <div className="flex-1 justify-center items-center mx-auto my-0">
        <LazyLoadImage
          className="w-4/5 mx-auto my-0"
          src={images.findus}
        />
      </div>
    </div>
  );
};
export default FindUs;
