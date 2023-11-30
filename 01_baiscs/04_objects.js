// Define symbol inside object

let mysym = Symbol("123")

let obj = {
    [mysym]: "mysym123"
}

// console.log(obj[mysym])

const a = new Object() // Singleton object
const b = {} // Non singleton object or object literal

let c = {'name': {
    "fullname": 'abhi'
}}

console.log(c.name.fullname?.firstname?.second) // If there are no keys, for safer side use ?. for not getting errors.

// concatenate the objects 

const obj3 = Object.assign({}, obj1, obj2) 
// or
const obj4 = {...obj1, ...obj2}

// Destructuring the arrays

let a2 = {'firstname': 'abhi'}

const {firstname: fname} = a2
console.log(fname)