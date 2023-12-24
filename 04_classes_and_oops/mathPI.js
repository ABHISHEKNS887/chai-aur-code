const pi = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(pi)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    nameprice: function(){
      console.log(`${this.name} price is ${this.price}`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function')
    console.log(`${key}: ${value}`)
}