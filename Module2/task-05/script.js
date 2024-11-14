let list = [];
let input = prompt("Enter a number: ");

while (true) {
    if (isNaN(input)) {
        alert("Please enter a valid number!");
    } else if (input === "") {
        alert("Your input cannot be empty!");
    } else {
        let number = Number(input);
        if (list.includes(number)) {
            break;
        } else {
            list.push(number);
        }
    }
    input = prompt("Enter a number: ");
}

list.sort((a, b) => a - b);

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
