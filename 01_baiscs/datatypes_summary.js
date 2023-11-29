// Primitive

// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const id = Symbol('123') //Symbole
console.log(id);
const bigNumber = 123123123123n // BigInt

// Referance (Non Primitive)

// Array, Object, Functions

// Note: typeof null = object

// ************************************

// Memory

// Stack (Primitive) and Heap(Non Primitive)

// In stack if we change the value of duplicated variable, the value of original variable remains same. 
//In case of Heap memory this not happens.

let a = 'abhishek'
let b = a
b = 'manoj'

let c = {'name': 'abhi'}
let d = c
d.name = 'manoj'