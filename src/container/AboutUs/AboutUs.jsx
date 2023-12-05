import Button from "../../components/Buttons/buttons";
import images from "../../constants/images";

const AboutUs = () => (
  // bg-backg-image w-full h-full relative section_padding
  <div className=" bg-[url('../../assets/bg.png')] w-full h-full relative section_padding ">
    <div className="flex justify-center items-center absolute inset-0 z-0">
      <img
        src={images.G}
        className="w-3/6 lg:w-2/6"></img>
    </div>
    <div className="relative flex flex-col lg:flex-row justify-center items-center z-50">
      <div className="flex-1 flex flex-col justify-end items-end text-right">
        <h1 className="font-base text-golden font-bold tracking-tighest capitalize lg:mb-2 text-3xl lg:text-[64px] ">
          About Us
        </h1>
        <img
          src={images.spoon}
          className=" w-[45px]"></img>
        <p className="p_opensans mx-0 my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button name="Know More" />
      </div>
      <div className=" my-8 mx-16 flex justify-center items-center">
        <img
          src={images.knife}
          className="w-3/6 md:w-4/6 lg:5/6 "></img>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start text-left">
        <h1 className="font-base text-golden lg:mb-2 font-bold tracking-tighest capitalize text-3xl lg:text-[64px] ">
          Our History
        </h1>
        <img
          src={images.spoon}
          className=" w-[45px] mx-1"></img>
        <p className="p_opensans mx-0 my-8">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button name="Know More" />
      </div>
    </div>
  </div>
);

export default AboutUs;
