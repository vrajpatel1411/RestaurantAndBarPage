import { useRef, useState } from "react";
import { meal } from "../../constants/index";
import { lazy } from "react";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { BsPauseFill } from "@react-icons/all-files/bs/BsPauseFill";

const Intro = () => {
  const [play, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlayer = () => {
    setPlayVideo((playstate) => !playstate);

    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div
      className="relative h-[100vh]  "
      // onClick={handlePlayer}
    >
      <video
        src={meal}
        ref={videoRef}
        type="video/webm"
        loop
        controls={false}
        className=" w-full h-full object-cover ease-[ease] duration-500  "
        muted></video>
      <div className="absolute inset-0 z-50 flex justify-center group items-center  ease-[ease] duration-500">
        <div
          onClick={handlePlayer}
          className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]  rounded-full border-solid opacity-0 group-hover:opacity-100 border-golden border-2 flex justify-center items-center">
          {play ? (
            <BsPauseFill
              color="#fff"
              fontSize={100}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
