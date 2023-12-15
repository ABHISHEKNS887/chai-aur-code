// // document.getElementById('owl').onclick = function(){ alert('Owl Clicked')}
// document.getElementById('owl').addEventListener('click', function(){
//     alert('OWL Clicked')
// }, false)
// // type, timestamp, defaultPrevented
// // target, toElement, srcElement, currentTarget,
// // clientX, clientY, screenX, screenY
// // altkey, ctrlkey, shiftkey, keyCode

// //Event Bublling - false, Event Capturing: True

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('Images Clicked');
// }, false)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('Images Clicked');
//     e.stopPropagation() // It will not go above
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
// }, false) // This will avoid clicking the default link.

document.querySelector('#images').addEventListener('click', function(e){
    if (e.target.tagName == 'IMG'){
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }
})