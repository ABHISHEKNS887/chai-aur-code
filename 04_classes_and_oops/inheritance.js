class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Name is ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(UserName, email, password){
        super(UserName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.userName} bought the course.`)
    }
}

const chai = new Teacher('abhi', 'email@gm.com', 'qw31')

console.log(chai.addCourse())
console.log(chai.logMe())

