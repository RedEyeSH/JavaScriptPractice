const ol = document.createElement("ol");
let names = []
let participants = prompt("Enter amount of participants: ");

while (isNaN(participants) || participants === "") {
    if (participants === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    participants = prompt("Enter amount of participants: ");
}

let num_of_participants = Number(participants);

for (let i = 1; i < num_of_participants + 1; i++) {
    let name = prompt(`Enter participant name ${i}: `);
    let cap_name = name.charAt(0).toUpperCase() + name.slice(1)

    names.push(cap_name);
}

names.sort();

for (let j = 0; j < names.length; j++) {
    const li = document.createElement("li");
    let content = document.createTextNode(names[j]);

    li.appendChild(content)
    ol.appendChild(li);
}

document.body.append(ol);
