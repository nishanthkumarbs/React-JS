//! ES 6 Features
//? let
//? const
//? arrow function
//? promises
//? destructuring
//? rest parameter and spread operator
//? modules


//? arrow function

// let arrFun=()=>{
//     console.log("I am arrow function")
// }
// arrFun()

//! Implict Function

// let add=()=>10+10;
// console.log(add())

//! Explict Function

// let sub=()=>{
//     return 10-10
// }
// let res=sub()
// console.log(res)


//? Promises

// new Promise((res,rej)=>{
//     res("Iam resolved")
//     rej("Iam rejected")
// }).then((a)=>{
//     console.log(a)
// }).catch((b)=>{
//     console.log(b)
// })


//! Fetch methods

// fetch('https://api.github.com/users')
// .then((res)=>{
//     console.log(res)
//     let data=res.json()
//     console.log(data)
//     data.then((userData)=>{
//         console.log(userData)
//         userData.map((user)=>{
//             console.log(user.login)
//         })
//     })
// }).catch((err)=>{
//     console.log(err)
// })

//! aysc and await

// async function getUsers(){
//     let userData=await fetch('https://api.escuelajs.co/api/v1/users')
//     console.log(userData)
//     let data = await userData.json()
//     console.log(data)
//     data.map((user)=>{
//         console.log(user.email)
//     })

// }
// getUsers()

//? Destructuring
//? Extrating the variables from the array or object with unique variables is called as destructuring

//? Object Destructuring :- Extrating the variables from an object using keys is called as destructuring
//? Object Destructuring denotes with curly braces{}

//? Array Destructuring:- Extrating the variables from an array using unique variables is called as destructuring
//? Array Destructuring denotes with square brackets[]

//? Object Destructuring

// let student={
//     stdId:101,
//     stdname:"Nishanth",
//     stdPhone:7410852096,
//     stdAddress:{
//         street:"No 35",
//         area:"JP Nagar",
//         city:"Mysore",
//         state:"Karnataka",
//         pincode:571101
//     }
// }
// console.log(student)
// ^ ------------Before Destructuring-------------
// console.log(student.stdId)
// console.log(student.stdname)
// console.log(student.stdPhone)
// console.log(student.stdAddress)
// console.log(student.stdAddress.street)
// console.log(student.stdAddress.city)
// console.log(student.stdAddress.state)
// console.log(student.stdAddress.pincode)

// ^ ------------Before Destructuring-------------

// let{stdname,stdId,stdPhone,stdAddress}=student
// console.log(stdId)
// console.log(stdPhone)
// console.log(stdname)
// console.log(stdAddress)

// let {street,area,city,state,pincode}=stdAddress
// console.log(state)
// console.log(area)
// console.log(city)
// console.log(street)
// console.log(pincode)

//? Example Task 1

// const classroom ={
//     teacher:{
//         name:"Ms. Rivera",
//         subject:"Math"
//     },
//     students:28,
//     schedule:{
//         day:"Monday",
//         time:"9:00 AM"
//     }
// }
// console.log(classroom)
// let {teacher:{name,subject},students,schedule:{day,time}}=classroom
// console.log(name)
// console.log(subject)
// console.log(students)
// console.log(day)
// console.log(time)

//? Example Task 2

// const game = {
//     name:"Sky adventure",
//     setting:{
//         difficulty:"medium",
//         sound:{
//             music:true,
//             effects:false
//         }
//     }
// }

// console.log(game)
// let {name,setting:{difficulty,sound:{music,effects}}}=game
// console.log(name)
// console.log(music)
// console.log(effects)

//? Example Task 3

// const user={
//     username:"coder123",
//     email:"coder@example.com",
//     setting:{
//         theme:"dark",
//         notification:true
//     }
// }
// console.log(user)
// let {username,email,setting:{theme,notification}}=user

// console.log(username)
// console.log(email)
// console.log(theme)
// console.log(notification)

//? Example Task 4

// const book = {
//     title:"The Hobbit",
//     author:"J.R.R. Tolkien",
//     pages: 310,
//     published:1937
// }

// console.log(book);

// let{title,author,pages,published} = book
// console.log(title);
// console.log(author);
// console.log(pages);
// console.log(published);



//? Array Destructuring

// let employee=["Nishanth","Nikhil","Rithin","Kumar","Virat",["Sachin","Kohli",["Padikal"]]]

// console.log(employee[0])
// console.log(employee[2])
// console.log(employee[4])

// let [e1,e2,e3,e4,e5,[e6,e7,[e8]]]=employee

// console.log(e1)
// console.log(e2)
// console.log(e3)
// console.log(e4)
// console.log(e5)
// console.log(e6)
// console.log(e7)
// console.log(e8)


let student={
    stdId:101,
    stdname:"Nishanth",
    stdPhone:7410852096,
    stdAddress:{
        street:"No 35",
        area:"JP Nagar",
        city:"Mysore",
        state:"Karnataka",
        pincode:571101
    },
    subjects:["Java","SQL","HTML","CSS","JavaScript","React","J2EE"]
}

let {stdId,stdname,stdPhone,stdAddress:{street,area,city,state,pincode},subjects:[s1,s2,s3,s4,s5,s6,s7]}=student

console.log(stdId)
console.log(stdname)
console.log(stdPhone)
console.log(street)
console.log(area)
console.log(city)
console.log(state)
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)

//! Modules
//? Modules are used to breahdown the large code into small peaces