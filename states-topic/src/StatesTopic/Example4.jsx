import { Component } from "react";

//! Updating the data

class Example4 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Nishanth",
            age: "22",
            place: "Mysore"
        }
    }
    handlename = () => {
        this.setState({ name: "Hemanth" })
    }
    handleage = () => {
        this.setState({ age: 21 })
    }
    handlePlace = () => {
        this.setState({ place: "Mysore" })
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
                <h4>{this.state.place}</h4>

                <button onClick={this.handlename}>Change Name</button>
                <button onClick={this.handleage}>Change Age</button>
                <button onClick={this.handlePlace}>Change Place</button>

            </>
        )
    }
}
export default Example4