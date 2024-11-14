function concat(list) {
    let text = "";
    for (let i = 0; i < list.length; i++) {
        text += list[i];
    }
    return text;
}

const p = document.createElement("p");
const array = ["Johnny", "DeeDee", "Joey", "Marky"];
let result = concat(array);

p.innerHTML = result;

document.body.append(p);