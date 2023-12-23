const user = {
    userName: 'Abhishek',
    age: '25',
    signedIn: true,
    getdata: function(){
        console.log(this.userName)
        console.log(this)
    }
}

// console.log(user.getdata())

function user(name, age, loggedIn){
    this.name = name,
    this.age = age,
    this.loggedIn = loggedIn
}
const userOne = new user('abhi', 25, true) // If we dont use new here. the userOne will be overwritten by usertwo.
const usertwo = new user('manoj', 24, true) 

console.log(userOne)
console.log(usertwo);
