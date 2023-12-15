const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i=0; i<6; i++){
        const index = Math.floor(Math.random()*16)
        color += hex[index]
    }
    return color;
}

const startColorChange = function (){
    document.body.style.backgroundColor = randomColor()
}

let intervalId;
function colorChange (){
    if (!intervalId)
    intervalId = setInterval(startColorChange, 1000)
}

function stopColor(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', colorChange)
document.querySelector('#stop').addEventListener('click', stopColor)