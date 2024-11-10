let username = prompt("Enter your name: ");
let p = document.querySelector("p");

if (username !== "") {
    p.innerHTML = `Hello, ${username}!`;
} else {
    p.innerHTML = `Hello, guest!`;
}