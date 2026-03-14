import { Component } from "react";

//! State Object way

class Example3 extends Component {
    state = {
        std1: {
            name: "Nishanth",
            age: "22",
            place: "Mysore"
        },
        std2: {
            name: "Darshan M S",
            age: 22,
            place: "Maragowdanahalli"
        }
    }
    render() {
        return (
            <>
                <h1>Student 1 Details:</h1>
                <h2>{this.state.std1.name}</h2>
                <h3>{this.state.std1.age}</h3>
                <h3>{this.state.std1.place}</h3>
                <hr />
                <h1>Student 2 Details:</h1>
                <h2>{this.state.std2.name}</h2>
                <h3>{this.state.std2.age}</h3>
                <h3>{this.state.std2.place}</h3>
            </>
        )
    }
}
export default Example3

