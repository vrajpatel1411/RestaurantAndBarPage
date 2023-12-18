import Newsletter from "../../components/Footer/Newsletter";
import FooterOverlay from "../../components/Footer/FooterOverlay";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => {
  return (
    <div className="relative w-full z-20 flex justify-start items-center flex-col bg-black pt-0 section_padding">
      <FooterOverlay />
      <Newsletter />
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start mt-20 md:px-8">
        <div className="flex-1 my-8 w-full lg:m-4 text-center">
          <h1 className="font-base text-white font-normal tracking-tighest capitalize text-4xl mb-4">
            Contact Us
          </h1>
          <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p_opensans">+1 212-344-1230</p>
          <p className="p_opensans">+1 212-555-1230</p>
        </div>

        <div className="flex-1 flex flex-col flex-start items-center my-8 w-full lg:m-4 text-center ">
          <img
            className="w-[150px] mb-4"
            src={images.gericht}
            alt="footer_logo"
          />
          <p className="p_opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <img
            src={images.spoon}
            className=" mb-3 w-[45px]"
          />
          <div className="flex">
            <FiFacebook className="text-white m-2 text-2xl cursor-pointer hover:text-golden" />
            <FiTwitter className="text-white m-2 text-2xl cursor-pointer hover:text-golden" />
            <FiInstagram className="text-white m-2 text-2xl cursor-pointer hover:text-golden" />
          </div>
        </div>

        <div className="flex-1 my-8 w-full lg:m-4 text-center">
          <h1 className="font-base text-white font-normal tracking-tighest capitalize text-4xl mb-4">
            Working Hours
          </h1>
          <p className="p_opensans mb-4">Monday-Friday:</p>
          <p className="p_opensans mb-4">08:00 am - 12:00 am</p>
          <p className="p_opensans mb-4">Saturday-Sunday:</p>
          <p className="p_opensans mb-4">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="mt-12">
        <p className="p_opensans">2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
