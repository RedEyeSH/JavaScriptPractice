let input = prompt("Enter name: ");

let p = document.querySelector("p");

let rand = Math.floor(Math.random() * 4) + 1;

let room = "";

while (input === "") {
    alert("Please enter a name.")
    input = prompt("Enter name: ");    
}

switch (rand) {
    case 1:
        room = "Gryffindor";
        break;
    case 2:        
        room = "Slytherin";
        break;
    case 3:
        room = "Hufflepuff";
        break;
    case 4:
        room = "Ravenclaw";
        break;
        
}

p.innerHTML = `${input}, you are ${room}.`;
