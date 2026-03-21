import React, { useRef, useState } from "react";

const Example2 = () => {
  const [state, setState] = useState(false);
  const imgRef = useRef(null);

  const handleData = () => {
    if (!state) {
      imgRef.current.style.borderRadius = "50%";
    } else {
      imgRef.current.style.borderRadius = "0";
    }
    setState(!state);
  };

  return (
    <div>
      <img ref={imgRef} onClick={handleData} src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg" alt="example" height={250} width={250}/>
    </div>
  );
};

export default Example2;