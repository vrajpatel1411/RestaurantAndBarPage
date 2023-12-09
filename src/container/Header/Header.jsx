import "./Header.css";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import Button from "../../components/Buttons/buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import { image } from "../../constants/images.jsx";

const Header = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div
      className="bg-black app__wrapper section_padding"
      id="home">
      {/* // app__header app_wrapper section_padding */}
      <div className="flex-1 w-full flex flex-col justify-center items-start">
        {/* app__wrapper_info*/}
        <SubHeading title="Chase the New Flavour" />
        <h1 className="font-base text-golden font-bold tracking-tighest capitalize text-3xl lg:text-8xl/[117px] ">
          The Key to Fine Dining
        </h1>
        <p className="p_opensans my-8 mx-0">
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <Button name="Explore More" />
      </div>
      <div className=" flex-1 display-flex justify-center items-center mt-20 mx- md:ml-8 lg:mt-0">
        {/*app__wrapper_img*/}
        <LazyLoadImage
          className="w-4/5"
          src={images.welcome}
        />
      </div>
    </div>
  );
};

export default Header;
