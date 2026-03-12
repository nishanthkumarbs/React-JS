//! Props using class based component

import Child from "./Child"

// import { Component } from "react"
// import Child from "./Child";

// class Parent extends Component {
//     render() {
//         let username = "Nishanth"
//         console.log(username)
//         let age = 23;
//         console.log(age)

//         let employee ={
//             id:101,
//             name:"Nishanth",
//             address:"Mysore"
//         }
//         console.log(employee)
//         return (
//             <>
//                 <h1>Parent Component</h1>
//                 <h2>{username}</h2>
//                 <hr />

//                 <Child username={username} age={age} employee={employee} />
//             </>
//         )
//     }
// }

// export default Parent

// import { Component } from "react"
// import Child from "./Child";
// import userData from './userData.json'

// class Parent extends Component {
//     render() {

//         return (
//             <>
//                 <h1>Parent Component</h1>
//                 <hr />

//                 <Child userData={userData} />
//             </>
//         )
//     }
// }

// export default Parent


//! Props using Function based component

// const Parent = () => {
//     return (
//         <>
//             <h1>Parent Component</h1>
//             <hr />
//             <Child username = 'Nishanth' age ={21}/>

//         </>
//     )
// }
// export default Parent

//! Passing Object as a prpops

// const Parent = () => {

//     let employee = {
//         id: 101,
//         name: "Nishanth",
//         address: "Mysore",
//         designation:"Developer"
//     }
//     return (
//         <>
//             <h1>Parent</h1>
//             <hr />
//             <Child employee={employee}/>
//         </>
//     )
// }

// export default Parent

//! Passing JSON as a prpops

import userData from './userData.json'

// const Parent=()=> {
//     return (
//         <>
//             <h1>Parent</h1>
//             <hr />
//             <Child userData={userData}/>
//         </>
//     )
// }

// export default Parent

//! prpops Drilling

const Parent=()=> {
    return (
        <>
            <h1>Parent</h1>
            <hr />
            <Child username="Nishanth" address="Mysore" phone={7896541230}/>
        </>
    )
}

export default Parent