let p = document.querySelector("p");
let input = prompt("Enter a year: ");

while (isNaN(input) || input === "") {
    if (input === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    input = prompt("Enter a year: ");
}

let number = Number(input);

if (number % 4 === 0 && number % 100 !== 0 || number % 400 === 0) {
    p.innerHTML = `Year ${number} is a leap year.`;
} else {
    p.innerHTML = `Year ${number} is not a leap year.`;
}