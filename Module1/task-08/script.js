let ul = document.createElement("ul");
let start_year = prompt("Enter start year: ");

while (isNaN(start_year) || start_year === "") {
    if (start_year === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid year number!");
    }
    start_year = prompt("Enter start year: ");
}

start_year = Number(start_year)

let end_year = prompt("Enter end year: ");

while (isNaN(end_year) || end_year === "") {
    if (end_year === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid year number!");
    }
    end_year = prompt("Enter end year: ");
}

end_year = Number(end_year)

for (let i = start_year; i < end_year + 1; i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        const li = document.createElement("li");
        let content = document.createTextNode(i);

        li.appendChild(content);
        ul.appendChild(li)
    }
}

if (ul.childElementCount === 0) {
    ul.innerHTML = "<li>No leap years found.</li>";
}

document.body.append(ul);