import { useContext } from "react";
import UserContext from "./userContext"

const ComponentF = () => {
    let userName = useContext(UserContext);
    console.log(userName);
    return (
        <div>
            <h1>ComponentF</h1>
            <h2>My name is {userName}</h2>
        </div>
    )

}
export default ComponentF