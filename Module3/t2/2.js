const target = document.querySelector("#target");

const array = ["First", "Second", "Third"];

for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    let content = document.createTextNode(`${array[i]} item`);
    li.appendChild(content);
    
    if (i === 1) {
        li.classList.add("my-item");
    }
    target.appendChild(li);
}


