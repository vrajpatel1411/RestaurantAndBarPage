import images from "../../constants/images";

import { SubHeading } from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = () => (
  <div
    className="bg-[url('/assets/bg.webp')] app__wrapper section_padding "
    id="home">
    {/* // app__header app_wrapper section_padding */}
    <div className=" flex-1 display-flex justify-center items-center mt-20 mx- md:ml-8 lg:mt-0">
      {/*app__wrapper_img*/}
      <LazyLoadImage
        className="w-4/5"
        src={images.chef}
        loading="lazy"
      />
    </div>
    <div className="flex-1 w-full flex flex-col justify-center items-start my-8 lg:my-0">
      {/* app__wrapper_info*/}
      <SubHeading title="Chef's Word" />
      <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl md:text-4xl lg:text-6xl/[117px] ">
        What We Believe In
      </h1>
      <div className="w-full flex flex-col  my-16">
        <div className="flex-1 flex justify-start items-end my-4">
          <LazyLoadImage
            src={images.quote}
            width={35}
            className=" mr-2 mb-4"
          />
          <p className="p_opensans ">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
          </p>
        </div>
        <p className="p_opensans">
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start ">
        <p className="font-base text-golden font-normal tracking-tighest capitalize text-xl lg:text-4xl">
          Kevin Luo
        </p>
        <p className="font-base text-white font-medium tracking-tighest capitalize text-lg lg:text-xl">
          Chef & Founder
        </p>
        <LazyLoadImage
          src={images.sign}
          loading="lazy"
          width={120}
          className="my-4"
        />
      </div>
    </div>
  </div>
);

export default Chef;
