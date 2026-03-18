// import { useState } from "react"

import { useState } from "react";

// function HOC(OriginalComponent){
//     function newComponent(){
//         let [count,setCount]=useState(0)

//         let handleCount=()=>{
//             setCount(count+1)
//         }
//         return <OriginalComponent handleCount={handleCount} count={count}/>
//     }
//     return newComponent
// }
// export default HOC

function CommonFunctionality(OriginalComponent, increment) {
  function NewComp() {
    const [money, setMoney] = useState(10);

    const handleMoney = () => {
      setMoney(money * increment);
    };

    return (
      <OriginalComponent
        money={money}
        handleMoney={handleMoney}
      />
    );
  }

  return NewComp;
}

export default CommonFunctionality;