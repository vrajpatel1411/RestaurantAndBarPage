import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../constants/images";
import Awards from "../Laurels/Awards.jsx";
import { data } from "../../constants/index.jsx";
const Laurels = () => {
  return (
    <div className="bg-[url('/assets/bg.webp')] app__wrapper section_padding flex justify-center items-center">
      <div className="w-full lg:w-1/2">
        <div>
          <p className="p_cormorant">Awards & Recognition</p>
          <LazyLoadImage
            className="w-[45px]"
            src={images.spoon}
            alt="Spoon Image"
          />
        </div>
        <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl lg:text-8xl/[117px] ">
          Our Laurels
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-10 mb-10">
          {data.awards.map((laurel, index) => (
            <Awards
              key={index}
              image={laurel.imgUrl}
              title={laurel.title}
              description={laurel.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 justify-center items-center mx-auto my-0">
        <LazyLoadImage
          className="w-4/5 mx-auto my-0"
          src={images.laurels}
        />
      </div>
    </div>
  );
};
export default Laurels;
