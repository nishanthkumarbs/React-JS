import { useRef, useState } from "react";

const Example2=()=>{
    let [result, setresult]=useState('')
    let num1Ref=useRef()
    let num2Ref=useRef()

    let addtion=(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1, number2);
        let sum=parseInt(number1)+parseInt(number2)
        console.log(sum);
        console.log("addtion");
        setresult(`the result is ${sum}`)

    }
    let subtraction=(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1, number2);
        let sum=parseInt(number1)-parseInt(number2)
        console.log(sum);
        console.log("addtion");
        setresult(`the result is ${sum}`)

    }
     let division=(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1, number2);
        let sum=parseInt(number1)/parseInt(number2)
        console.log(sum);
        console.log("addtion");
        setresult(`the result is ${sum}`)

    }
    let multiplication=(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1, number2);
        let sum=parseInt(number1)*parseInt(number2)
        console.log(sum);
        console.log("addtion");
        setresult(`the result is ${sum}`)

    }
   
    return(
      <form action="">
        <fieldset>
            <legend>calculator</legend>
            <label htmlFor="">enter number 1:</label>
            <input type="text" ref={num1Ref} placeholder="enter number1" />
            <br /><br />
            <label htmlFor="">enter number 2:</label>
            <input type="text" ref={num2Ref} placeholder="enter number2" />
            <br /><br />
            <button onClick={addtion}>Addition</button>
            <button onClick={subtraction} >subtraction</button>
            <button onClick={division}>division</button>
            <button onClick={multiplication}>multiplication</button>
            <h1>{result}</h1>
        </fieldset>
      </form>
    )
}
export default Example2;