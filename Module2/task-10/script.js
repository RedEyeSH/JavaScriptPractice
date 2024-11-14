let canditates = prompt("Enter number of candidates: ");

while (isNaN(canditates) || canditates === "" || Number(canditates) < 2) {
    if (canditates === "") {
        alert("Your input cannot be empty!");
    } else if (Number(canditates) < 2) {
        alert("There must be at least 2 candidates.")
    } else {
        alert("Please enter a valid number!");
    }
    canditates = prompt("Enter number of candidates: ");
}

let num_of_candidates = Number(canditates);
let array = [];

for (let i = 1; i < num_of_candidates + 1; i++) {
    let candidate_name;

    while (true) {
        candidate_name = prompt(`Name for candidate ${i}: `);
        if (candidate_name === "") {
            alert("Candidate name cannot be empty!");
        } else if (array.find((candidate) => candidate.name.toLowerCase() === candidate_name.toLowerCase())) {
            alert("This name is already taken. Please enter another name.");
        } else {
            break;
        }
    }
    candidate_name = candidate_name.charAt(0).toUpperCase() + candidate_name.slice(1).toLowerCase();
    array.push({name: candidate_name, votes: 0});
}

let voters = prompt("Number of voters: ");

while (isNaN(voters) || voters === "") {
    if (voters === "") {
        alert("Your input cannot be empty!");
    } else {
        alert("Please enter a valid number!");
    }
    voters = prompt("Number of voters: ");
}

let num_of_voters = Number(voters);

while (num_of_voters > 0) {
    let voter_exists = false;
    let vote = prompt("Who would you vote for?: ");
    vote = vote.charAt(0).toUpperCase() + vote.slice(1).toLowerCase();
    if (vote === "") {
        num_of_voters --;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === vote) {
                num_of_voters--;
                array[i].votes += 1;
                voter_exists = true;
                break;
            } 
        }
        if (!voter_exists) {
            alert(`${vote} doesn't exists in the list!`);
        }
    }
}

array.sort((a, b) => (b.votes - a.votes));

let winners = [];
let best = array[0].votes;

for (let i = 0; i < array.length; i++) {
    if (array[i].votes >= best) {
        winners.push(array[i]);
    }   
}

if (winners.length === 1) {
    console.log(`The winner is ${winners[0].name} with ${winners[0].votes} votes.`);
} else {
    console.log(`The election resulted in a tied between:`);
    for (let i = 0; i < winners.length; i++) {
        console.log(`${array[i].name}: ${array[i].votes} votes`);
    }
}

console.log("Results:");
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].name}: ${array[i].votes} votes`);
}
