import CourseContext from "../example2/CourseContext";
import Acadamy1 from "./Acadamy1";
import Acadamy2 from "./Acadamy2";
import Kousi from "./Kousi";

const TechAcademicComponent = () => {

    let details = {
        acadamy1: [
            "ShanthiAcademy",
            [
                "java full stack development ,",
                " data Science ,",
                " banking ,",
            ],
            "shanthiacademi@gmail.com"
        ],


        acadamy2: [
            "KittyAcademy",
            [
                "python full stack development ,",
                " data Analysis ,",
                " Business Management",
            ],
            "kittyacademi@gmail.com"
        ]
    }


    return (
        <div>
            <CourseContext.Provider value={details}>

                <Acadamy1></Acadamy1>
                <Acadamy2></Acadamy2>

            </CourseContext.Provider>
        </div>
    )
}
export default TechAcademicComponent;