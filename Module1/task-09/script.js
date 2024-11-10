let p = document.querySelector("p");
let input = prompt("Enter a number: ");

let is_prime = true;

while (isNaN(input) || input === "") {
    if (input === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    input = prompt("Enter a number: ");
}

let number = Number(input);

if (number > 1) {
    for (let i = 2; i < parseInt(Math.sqrt(number)) + 1; i++) {
        if (number % i === 0) {
            is_prime = false;
            break;
        }
    }
} else {
    is_prime = false
}

p.innerHTML = is_prime ? `${number} is a prime number.` : `${number} is not a prime number.`;
