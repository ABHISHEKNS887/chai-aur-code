// Slice and Splice

// In slice we will a values of start and stop
let a_slice = [1,2,3,4,5,6,7]
console.log(a_slice.slice(1,3))

// In Splice we will eliminate the values from the original array.
console.log(a_slice.splice(1,3)); // a_splice will become [1,5,6,7]

// Spread operator
let a = [1,2,23,3,4]
let b = [5,7,7,78,8,8]
let c = [...a, ...b]
console.log(c);

// flat
let e = [1, 3, [4,5,6, [6,7,8]]]
let g = e.flat(Infinity)
