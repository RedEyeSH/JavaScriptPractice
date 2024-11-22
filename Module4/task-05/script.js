async function jokes () {
    console.log("Loading Chuck jokes...");
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const jsonData = await response.json();
        console.log(jsonData.value);
    } catch (error) {
        console.error("Error:", error);
    }
}

jokes();