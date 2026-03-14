import { Component } from "react";

//! Updating the data

class Example5 extends Component {
  constructor() {
    super()
    this.state = {
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
  }
  handlestd1 = () => {
    this.setState({
      std1: {
        name: "Hemanth",
        age: 22,
        place: "Mysore"
      }
    })
  }
  handlestd2 = () => {
    this.setState({
      std2: {
        name: "Abhi H P",
        age: 22,
        place: "Somwarpete"
      }
    })
  }

  render() {
    return (
      <>
        <h1>Student 1 Details:</h1>
        <h2>{this.state.std1.name}</h2>
        <h3>{this.state.std1.age}</h3>
        <h3>{this.state.std1.place}</h3>
        <button onClick={this.handlestd1}>Change Student 1 Details</button>
        <hr />
        <h1>Student 2 Details:</h1>
        <h2>{this.state.std2.name}</h2>
        <h3>{this.state.std2.age}</h3>
        <h3>{this.state.std2.place}</h3>
        <button onClick={this.handlestd2}>Change Student 2 Details</button>

      </>
    )
  }
}
export default Example5