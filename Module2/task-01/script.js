let list_num = [];

for (let i = 1; i < 6; i++) {
    let input = prompt(`Enter number ${i}: `);
    if (input === "") {
        alert("Your input cannot be empty!");
        i--;
    } else if (isNaN(input)) {
        alert("Please enter a valid number!");
        i--;
    } else {
        let number = Number(input);
        list_num.push(number);
    }
}

for (let i = list_num.length-1; i >= 0; i--) {
    console.log(list_num[i]);
}
