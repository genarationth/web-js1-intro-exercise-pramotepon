// Call function
function ChangeName(){
    // Variable name for value from Prompt
    let name = prompt('What your name?');
    // Variable myName for element id yourName
    let myName = document.getElementById('yourName');
    // Change html id myName to name
    myName.innerHTML = name;
    // Talent
    // Variable el for create element div
    const el = document.createElement('div');
    // in el element div add text Hello + name from prompt
    el.textContent = 'Hello ' + name;
    // Variable box for element id box
    const box = document.getElementById('box');
    // Create el div in element id box
    box.appendChild(el);
}