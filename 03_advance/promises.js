const promiseOne = new Promise (function(resolve, reject){
    // Do any async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete.');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed.')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async request one.')
        resolve()
    },1000)
}).then(function(){
    console.log('Async request completed.')
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({userName: 'Abhi', email: 'abhi@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error){
            resolve({userName: "Abhi", age:'25'})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    return(user.userName)
}).then(function(userName){
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(()=>{console.log('The promise either resolved or rejected.')})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({userName: "JS", age:'25'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function fetchPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

fetchPromiseFive()

// async function fetchUserData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await response.json()
//          console.log(data)
//     } catch (error) {
//         console.log('Error: ', error)
//     }
// }

// fetchUserData()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{console.log('Error: ', error)})