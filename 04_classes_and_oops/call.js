// Calling a func inside the another function.

function setUserName(userName){
    this.userName = userName
}

function createUserName(userName, age, gender){
    setUserName.call(this, userName)
    this.age = age
    this.gender = gender
}

const user = new createUserName('abhi', 21, 'male')
console.log(user)