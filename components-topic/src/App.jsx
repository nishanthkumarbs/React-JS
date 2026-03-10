// import React, { Component } from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

import { Fragment } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Footer />
//         <Navbar />
//       </div>
//     )
//   }
// }
// export default App


//? Function Based Component

function App() {
    return(
        <Fragment>
            <Navbar />
            <Footer />
        </Fragment>
    )
}
export default App