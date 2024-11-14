function even(list) {
    let even_number = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            even_number.push(list[i]);
        }
    }
    return even_number;
}

const array = [1, 2, 3, 4, 5];

let num_even = even(array);

console.log(`Original numbers list: ${array}`);
console.log(`Even numbers list: ${num_even}`);

