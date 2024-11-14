function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

const ul = document.createElement("ul");
let list = [];

while (true) {
    let num = dice();

    list.push(num);

    if (num === 6) {
        break;
    }
}

for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    let content = document.createTextNode(list[i]);
    li.appendChild(content);
    ul.appendChild(li);
}

document.body.append(ul);