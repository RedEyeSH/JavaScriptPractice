const option = confirm('Should I calculate the square root?');
let p = document.querySelector("p");

if (option) {
    let input = prompt("Enter a number: ");

    while (isNaN(input) || input === "") {
        if (input === "") {
            alert("Your input cannot be empty!");
        } else {
            alert("Please enter a valid number!")
        }
        input = prompt("Enter a number: ");
    }

    number = parseInt(input);

    if (input < 0) {
        p.innerHTML = "The square root of a negative number is not defined.";
    } else {
        p.innerHTML = `number ${number} is square root of ${Math.sqrt(number)}.`;
    }
} else {
    p.innerHTML = "The square root is not calculated.";
}