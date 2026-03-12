//! Props using class based component

import GrandChild from "./GrandChild"

// import { Component } from "react";

// class Child extends Component{
//     render(){
//         console.log(this.props)
//         let {username,age,employee}=this.props
//         console.log(employee)
//         return(
//             <>
//             <h1>Child Component</h1>
//             <h2>{username}</h2>
//             <h2>{age}</h2>
//             <h3>{employee.id}</h3>
//             <h3>{employee.name}</h3>
//             <h3>{employee.address}</h3>


//             </>
//         )
//     }
// }
// export default Child

// import { Component } from 'react'


// class Child extends Component {
//     render() {
//         console.log(this.props.userData)
//         return (
//             <div>
//                 <h1>Child Component</h1>
//                 <table cellPadding={10} cellSpacing={10} border={2}>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>PhonenNo</th>
//                     </tr>
//                     {
//                         this.props.userData.map((user) => {
//                             console.log(user)
//                             return (
//                                 <>
//                                     <tr>
//                                         <td>{user.stdid}</td>
//                                         <td>{user.stdname}</td>
//                                         <td>{user.stdaddress}</td>
//                                         <td>{user.stdphone}</td>
//                                     </tr>
//                                 </>
//                             )
//                         })
//                     }

//                 </table>
//             </div>
//         )
//     }
// }
// export default Child

//! Props using Function based component


// const Child=(props)=> {
//   return (
//     <div>
//         <h1>Child</h1>
//         <h2>{props.username}</h2>
//         <h2>{props.age}</h2>
//     </div>
//   )
// }
// export default Child


// const Child = (props) => {
//     console.log(props.employee)
//     return (
//         <>
//             <h1>Child</h1>
//             <h1>{props.employee.name}</h1>
//             <h1>{props.employee.address}</h1>
//             <h1>{props.employee.designation}</h1>
//         </>
//     )
// }

// export default Child


// const Child=(props)=> {
//     return (
//         <>
//             <h1>Child</h1>
//             <table cellPadding={10} cellSpacing={10} border={2}>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>PhonenNo</th>
//                     <th>Image</th>
//                 </tr>
//                 {
//                     props.userData.map((user) => {
//                         console.log(user)
//                         return (
//                             <>
//                                 <tr>
//                                     <td>{user.stdid}</td>
//                                     <td>{user.stdname}</td>
//                                     <td>{user.stdaddress}</td>
//                                     <td>{user.stdphone}</td>
//                                     <td><img src={user.img} width={50} height={50} alt="" /></td>
//                                 </tr>
//                             </>
//                         )
//                     })
//                 }

//             </table>
//         </>
//     )
// }

// export default Child


//! prpops Drilling

const Child = (props) => {
    console.log(props)
    return (
        <>
            <h1>Child</h1>
            <h1>{props.username}</h1>
            <h1>{props.address}</h1>
            <h1>{props.phone}</h1>
            <hr />
            <GrandChild username={props.username} address={props.address} phone={props.phone} />
        </>
    )
}

export default Child


