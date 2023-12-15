import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../constants/images";
import Awards from "../Laurels/Awards.jsx";
const Laurels = () => {
  const laurels = [
    {
      image: `${images.award01}`,
      title: "Bib Gourmond",
      Description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      image: `${images.award02}`,
      title: "Rising Star",
      Description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      image: `${images.award03}`,
      title: "AA Hospitality",
      Description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      image: `${images.award05}`,
      title: "Outstanding Chef",
      Description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
  ];
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
          {laurels.map((laurel, index) => (
            <Awards
              key={index}
              image={laurel.image}
              title={laurel.title}
              description={laurel.Description}
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
