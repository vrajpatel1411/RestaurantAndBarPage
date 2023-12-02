import images from "../../constants/images";

const SubHeading = (props) => (
  <div className="mb-4">
    <p className="p_cormorant">{props.title}</p>
    <img
      className=" w-[45px]"
      src={images.spoon}
      alt="Spoon Image"></img>
  </div>
);

export default SubHeading;
