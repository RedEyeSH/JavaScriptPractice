function dice(num_of_sides) {
    return Math.floor(Math.random() * num_of_sides) + 1;
}

const ul = document.createElement("ul");
let list = [];
let input = prompt("Enter the number of sides on the dice: ");

while (isNaN(input) || input === "") {
    if (input === "") {
        alert("Your input cannot be empty!");
    } else if (isNaN(input)) {
        alert("Please enter a valid number!");
    }
    input = prompt("Enter the number of sides on the dice: ");
}

let target_number = Number(input);

while (true) {
    let num = dice(target_number);
    list.push(num);

    if (num === target_number) {
        break;
    }
}

for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    let content = document.createTextNode(list[i]);
    li.appendChild(content);
    ul.appendChild(li);
}

document.body.append(ul);