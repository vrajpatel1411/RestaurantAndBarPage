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
    <div className="">
      <video
        src={meal}
        ref={videoRef}
        type="video/webm"
        loop
        controls={false}
        muted></video>
      <div>
        <div onClick={handlePlayer}>
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
