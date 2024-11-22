const form = document.querySelector("form");

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const results = document.querySelector("#results");
    const value_from_input = document.querySelector("#query").value;

    results.innerHTML = "";
    
    console.log("Loading Chuck jokes...");
    
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        const jsonData = await response.json();
        
        if (jsonData.result.length === 0) {
            const p = document.createElement("p");
            p.innerHTML = "No jokes found!";
            results.appendChild(p);
            console.log("No jokes found!");
        } else {
            jsonData.result.forEach(element => {
                const article = document.createElement("article");
                const p = document.createElement("p");
                p.innerHTML = element.value;
                article.appendChild(p);
                results.appendChild(article)
            });
        }
    } catch (error) {
        console.error("Error:", error);
    }
});