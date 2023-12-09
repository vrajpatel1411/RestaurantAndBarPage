import images from "../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SubHeading = (props) => (
  <div className="mb-4">
    <p className="p_cormorant">{props.title}</p>

    <LazyLoadImage
      className="w-[45px]"
      src={images.spoon}
      alt="Spoon Image"
    />
  </div>
);

export default SubHeading;
