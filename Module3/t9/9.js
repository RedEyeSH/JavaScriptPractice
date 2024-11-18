const button = document.querySelector("#start");

button.addEventListener('click', function() {
    const input = document.querySelector("#calculation").value;
    const p = document.querySelector("#result");
    let result = "lol";
    let splitted;

    if (input.includes("+")) {
        splitted = input.split('+');
        if (splitted.length === 2 && !isNaN(splitted[0]) && !isNaN(splitted[1])) {
            result = Number(splitted[0]) + Number(splitted[1]);
        }
    } else if (input.includes("-")) {
        splitted = input.split('-');
        if (splitted.length === 2 && !isNaN(splitted[0]) && !isNaN(splitted[1])) {
            result = Number(splitted[0]) - Number(splitted[1]);
        }
    } else if (input.includes("*")) {
        splitted = input.split('*');    
        if (splitted.length === 2 && !isNaN(splitted[0]) && !isNaN(splitted[1])) {
            result = Number(splitted[0]) * Number(splitted[1]);
        }
    } else if (input.includes("/")) {
        splitted = input.split('/');
        if (splitted.length === 2 && !isNaN(splitted[0]) && !isNaN(splitted[1])) {
            result = Number(splitted[0]) / Number(splitted[1]);
        }
    }
    p.innerHTML = result;
});
