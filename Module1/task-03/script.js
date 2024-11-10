let sum = 0;
let product = 1;
let average = 0;

for (let i = 1; i < 4; i++) {
    let input = prompt(`Enter a number ${i}: `);
    if (!isNaN(input)) {
        let number = parseInt(input);
        sum += number;
        product *= number;
    } else {
        i--;
        alert("Please enter a valid number.");
    }
}

average = sum / 3;

document.getElementById("sum").innerHTML = `Sum: ${sum}`;
document.getElementById("product").innerHTML = `Product ${product}`;
document.getElementById("average").innerHTML = `Average: ${average}`;
