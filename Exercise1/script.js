// Call function
function ChangeName(){
    // Variable name
    let name = prompt('What your name?');
    let myName = document.getElementById('yourName');
    myName.innerHTML = name;
    // Talent
    const el = document.createElement('div');
    el.textContent = 'Hello ' + name;
    const box = document.getElementById('box');
    box.appendChild(el);
}