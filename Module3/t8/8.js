const button = document.querySelector("#start");

button.addEventListener('click', function() {
    const input1 = parseInt(document.querySelector("#num1").value);
    const input2 = parseInt(document.querySelector("#num2").value);
    const operation = document.querySelector("#operation").value;
    const p = document.querySelector("#result");
    let result = 0;

    switch (operation) {
        case "add":
            result = input1 + input2;
            break;
        case "sub":
            result = input1 - input2;
            break;
        case "multi":
            result = input1 * input2;
            break;
        case "div":
            result = input1 / input2;
            break;
    }
    p.innerHTML = result;
});
