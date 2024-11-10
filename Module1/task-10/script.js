let p = document.querySelector("p");
let dices = prompt("Enter amount of dices: ");

while (isNaN(dices) || dices === "") {
    if (dices === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    dices = prompt("Enter amount of dices: ");
}

let num_of_dice = Number(dices);

let sum = prompt("Enter desired sum of dices: ");

while (isNaN(sum) || sum === "") {
    if (sum === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    sum = prompt("Enter desired sum of dices: ");
}

let desired_sum = Number(sum);

const max_rolls = num_of_dice * 6;
let succesful_rolls = 0
let total_rolls = 10000;

if (desired_sum > max_rolls || desired_sum < num_of_dice) {
    p.innerHTML = `Probability to get sum ${desired_sum} with ${num_of_dice} dice is 0%.`;
} else {
    for (let i = 0; i < total_rolls; i++) {
        let total = 0;
        for (let j = 0; j < num_of_dice; j++) {
            let rand = Math.floor(Math.random() * 6) + 1;
            total += rand;
        }

        if (total === desired_sum) {
            succesful_rolls ++;
        }
    }
}

let percentage = (succesful_rolls / total_rolls) * 100;

p.innerHTML = `Probability to get sum ${desired_sum} with ${num_of_dice} dice is ${percentage.toFixed(2)}%`;