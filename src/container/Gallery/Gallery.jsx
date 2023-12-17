import SubHeading from "../../components/SubHeading/SubHeading";
import Button from "../../components/Buttons/buttons";
import { images } from "../../constants/index";
import { BsArrowRightSquareFill, BsInstagram } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useRef } from "react";

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 250;
    } else {
      current.scrollLeft += 250;
    }
  };
  return (
    <div className="  bg-black flex flex-col section_padding lg:flex-row">
      {" "}
      {/*app__gallery flex__center*/}
      <div className="flex-1 flex justify-center items-start flex-col min-w-full lg:min-w-[00px] pr-8">
        {" "}
        {/* app__gallery-content */}
        <SubHeading title="Instagram" />
        <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl lg:text-8xl/[117px] ">
          Photo Gallery
        </h1>
        <p className="p_opensans my-8 mx-0">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <Button
          name="View More"
          className="mt-4"></Button>
      </div>
      <div className="flex-1 flex flex-row max-w-full my-20 relative lg:max-w-[50%]">
        {" "}
        {/* app__gallery-images */}
        <div
          ref={scrollRef}
          className="flex flex-row w-max overflow-x-scroll no-scrollbar overflow-hidden">
          {" "}
          {/* app__gallery-images_container */}
          {gallery.map((image, index) => (
            <div
              className=" relative min-w-[240px] h-[320px] md:min-w-[301px] md:h-[447px] mr-8 flex justify-center items-center group lg:min-w-[410px] lg:h-[547px]"
              key={index + 1}>
              {" "}
              {/* app__gallery-images_card flex__center */}
              <LazyLoadImage
                className=" w-full h-full object-cover opacity-1 ease-[ease] duration-500 group-hover:opacity-50"
                src={image}
              />
              <BsInstagram className="absolute text-white font-normal opacity-0 ease-[ease] duration-500 cursor-pointer group-hover:opacity-100" />{" "}
              {/* gallery__image-icon" */}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]  ">
          <BsArrowLeftSquareFill
            className="text-golden   text-3xl font-normal cursor-pointer bg-black rounded-md hover:text-white"
            onClick={() => scroll("left")}
          />
          <BsArrowRightSquareFill
            className="text-golden  text-3xl font-normal cursor-pointer bg-black rounded-md hover:text-white"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
