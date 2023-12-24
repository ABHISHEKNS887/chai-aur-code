
// Getters and setters are functions that allow you to get and set object values, respectively. 
// Getter functions return the value of the specified property, while setter functions can set the value 
// of the specified property.
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return(this._email.toUpperCase())
    }

    set email(value){
        this._email = value
    }

    get password(){
        return(`${this._password}abhi`)
    }

    set password(value){
        this._password = value
    }
}

const chai = new User('chai@email.com', 'abh')
console.log(chai.email)
console.log(chai.password)

// Function based get and set.

function User2 (userName, password){
    this._userName = userName;
    this._password = password

    Object.defineProperty(this, 'userName', {
        get: function(){
            return this._userName.toUpperCase()
        },
        set: function(value){
            this._userName = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const newUser = new User2('abhi', '12123')
console.log(newUser.userName)