//! Default Export

// import num from './secondPage.js'

// console.log(num)
// console.log("First Page")

// num()

// console.log(num.stdName)

// console.log(num)
// num.map((items)=>{
//     console.log(items)
// })

// console.log(num)

// num(10,10,add);

//! Named Export

import {a,userName,wishes,std,subjects,add,sub,mul} from './secondPage.js'
import operation from './secondPage.js'

console.log(a)
console.log(userName)
wishes()
console.log(std.stdName)
console.log(subjects)
subjects.map((skills)=>{
    console.log(skills)
})

operation(10,20,add)

