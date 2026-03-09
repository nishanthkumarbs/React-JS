const Task6 = ()=>{
    let purchasePrice = prompt("Enter the Purchase Price")
    let downPayment = prompt("Enter the Down Payment amount")
    let rateOfIntrest = prompt("Enter the Rate of Intrest ")
    let timeDuration = prompt("Enter Time Duration [in years]")
    let loanAmount = purchasePrice - downPayment
    
    let totalIntrest = (loanAmount*rateOfIntrest*timeDuration)/100
    let TotalAmount = loanAmount+totalIntrest
    let annualEMI = TotalAmount / timeDuration
    let monthlyEMI = annualEMI /12 
    return(
        <>
        <h1>CAR</h1>
        <h1>Purchase Price: ₹ {purchasePrice}</h1>
        <h1>Down Payment amount: ₹ {downPayment}</h1>
        <h1>Rate of Intrest: ₹ {rateOfIntrest}</h1>
        <h1>Time Duration: ₹ {timeDuration}</h1>
        <h1>Total Amount: ₹ {TotalAmount}</h1>
        <h1>Annual EMI: ₹ {annualEMI}</h1>
        <h1>Monthly EMI: ₹ {monthlyEMI}</h1>
        </>
    )
}
export default Task6