const Task5 = ()=>{
    let principleAmount = prompt("Enter the Princilpe Amount")
    let rateOfIntrest = prompt("Enter the Rate of Intrest ")
    let timeDuration = prompt("Enter Time Duration [in years]")
    let simpleIntrest = (principleAmount*rateOfIntrest*timeDuration)/100
    console.log(simpleIntrest)
    return(
        <>
        <h1>Calaculation of simple Intrest</h1>
        <h1>Princilpe Amount: ₹ {principleAmount}</h1>
        <h1>Rate of Intrest: ₹ {rateOfIntrest}</h1>
        <h1>Time Duration: ₹ {timeDuration}</h1>
        <h1>Simple Intrest: ₹ {simpleIntrest}</h1>
        </>
    )
}
export default Task5