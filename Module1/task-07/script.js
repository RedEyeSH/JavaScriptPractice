let roll = document.getElementById("roll");
let result = document.getElementById("result");
let input = prompt("How many dices: ");
let list = []
let sum = 0;

while (isNaN(input) || input === "") {
    if (input === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    input = prompt("How many dices: ");
}

let number = Number(input);

for (let i = 0; i < number; i++) {
    let rand = Math.floor(Math.random() * 6) + 1;
    list.push(rand);
    sum += rand;
}

roll.innerHTML = `Roll results: ${list.join(", ")}`;
result.innerHTML = `You rolled ${number} dice and the total sum is ${sum}.`;