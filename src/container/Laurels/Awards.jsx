import { LazyLoadImage } from "react-lazy-load-image-component";

const Awards = (props) => {
  return (
    <div className="flex justify-center  gap-3">
      <LazyLoadImage
        className="w-[50px] h-[50px]"
        src={props.image}
        alt=""
      />
      <div className="flex-1 flex-col">
        <p className="p_cormorant text-golden">{props.title}</p>
        <p className="p_opensans">{props.description}</p>
      </div>
    </div>
  );
};

export default Awards;
