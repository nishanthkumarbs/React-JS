//! Default Export

// let a =10

// export default a


// let name ="Nishanth Kumar"
// export default name;

// function wishes(){
//     console.log("Happy new year in advance")
// }
// export default wishes;

// let std={
//     id:101,
//     stdName:"Nishanth",
//     stdAddress:"Mysore"
// }
// export default std;

// let subjects=["java","sql","web","react"]
// export default subjects;

// let java = true
// export default java

// function add(n1,n2){
//     console.log(n1+n2); 
// }
// function sub(n1,n2){
//     console.log(n1-n2); 
// }
// function mul(n1,n2){
//     return n1*n2; 
// }
// function operation(n1,n2,task){
//     return task(n1,n2)
// }

// export default operation


//! Named Export

export let a=10
export let userName = "Nishanth"
export function wishes(){
    console.log("Happy new year")
} 


export let std={
    id:101,
    stdName:"Nishanth",
    stdAddress:"Mysore"
}

export let subjects=["java","sql","web","react"]

export function add(n1,n2){
    console.log(n1+n2); 
}
export function sub(n1,n2){
    console.log(n1-n2); 
}
export function mul(n1,n2){
    return n1*n2; 
}
function operation(n1,n2,task){
    return task(n1,n2)
}

export default operation