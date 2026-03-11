import { useContext } from "react";
import CourseContext from "../example2/CourseContext";

const Ranjith = () => {

    let kittycourse = useContext(CourseContext)
    console.log(kittycourse.acadamy2);

    return (
        <div>
            <h1 style={{ color: "red" }}>Ranjithh</h1>
            <h1 style={{ color: "green" }}>KittyAcademi  course Details</h1>
            {
                kittycourse.acadamy2.map((item) => {
                    console.log(item);
                    return (
                        <li style={{ color: "blue" }}>{item}</li>
                    )

                })
            }

        </div>
    )
}
export default Ranjith;