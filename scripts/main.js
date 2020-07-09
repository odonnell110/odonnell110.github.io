let myImage = document.querySelector('img');

myImage.onclick = function () {
   alert('UwU')
    }

let myButton = document.querySelector('button');
let mySubHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName)
    mySubHeading.textContent = 'Hello, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    mySubHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}