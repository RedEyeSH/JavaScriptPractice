const ul = document.createElement("ul");
let list = [];

for (let i = 1; i <= 6; i++) {
    let input = prompt(`Enter name of dog ${i}: `);
    if (input === "") {
        alert("Your input cannot be empty!");
        i--;
    } else {
        let name = input.charAt(0).toUpperCase() + input.slice(1);
        list.push(name);
    }
}

list.sort().reverse();

for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    let content = document.createTextNode(list[i]);
    li.appendChild(content);
    ul.appendChild(li);
}

document.body.append(ul);