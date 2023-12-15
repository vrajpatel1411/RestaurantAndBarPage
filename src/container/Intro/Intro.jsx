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
    <div className="relative h-[100vh]">
      <video
        src={meal}
        ref={videoRef}
        type="video/webm"
        loop
        controls={false}
        className=" w-full h-full object-cover opacity-80"
        muted></video>
      <div className="absolute inset-0 z-50 flex justify-center items-center ">
        <div
          onClick={handlePlayer}
          className="w-[100px] h-[100px] rounded-full border-solid border-golden border-2 flex justify-center items-center">
          {play ? (
            <BsPauseFill
              color="#fff"
              fontSize={30}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
