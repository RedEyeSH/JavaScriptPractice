let list = [];
let input = prompt("Enter a number: ");

while (true) {
    if (isNaN(input)) {
        alert("Please enter a valid number!");
    } else if (input === "") {
        alert("Your input cannot be empty!");
    } else {
        let number = Number(input);
        if (number !== 0) {
            list.push(number);
        } else {
            break;
        }
    }
    input = prompt("Enter a number: ");
}

list.sort().reverse();

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
    