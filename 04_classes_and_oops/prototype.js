const myhero = ['thor', 'spiderman']

const superPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpidyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all logs')
} // we can access this function through all objects

Array.prototype.heyHitesh = function(){
    console.log('Hello Hitesh')
}

superPower.hitesh()
myhero.hitesh()
myhero.heyHitesh()
// superPower.heyHitesh()

// Inheritance

const User = {
    name: 'abhi'
}

const Teacher = {
    teacher: 'Teacher'
}

Object.setPrototypeOf(Teacher, User)
console.log(Teacher.name)

/////

const chaiaurcode = 'abhi.   '

String.prototype.trueLength = function(){
    console.log(this)
    console.log(`True length is: ${this.trim().length}`)
}

chaiaurcode.trueLength()
'manoj.  '.trueLength()