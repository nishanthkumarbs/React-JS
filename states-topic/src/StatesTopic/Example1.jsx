import { Component } from "react";

//! COnstructor way

class Example1 extends Component{
    constructor(){
        super()
        this.state={
            name:"Nishanth",
            age:"22",
            place:"Mysore"
        }
    }
    render(){
        return(
            <>
            <h1>My name is {this.state.name}</h1>
            <h3>I am {this.state.age} year old</h3>
            <h4>I am from {this.state.place}</h4>
            
            </>
        )
    }
}
export default Example1