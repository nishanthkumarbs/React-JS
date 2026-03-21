import React, { useRef, useState } from "react";
import v1 from "./326677_medium.mp4"

const Example3 = () => {
  const videoRef = useRef(null);
  const [state, setState] = useState(false);

  const handleData = () => {
    if (!state) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setState(!state);
  };

  return (
    <div >

      <video ref={videoRef} onClick={handleData} src={v1} height={550} width={550} />

    </div>
  );
};

export default Example3;
