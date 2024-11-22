const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const value_from_input = document.getElementById("query").value;
    
    results.innerHTML = ""; // clear old results
    
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        jsonData.forEach(element => {
            const show = element.show;
            const article = document.createElement("article");

            const h2 = document.createElement("h2");
            h2.innerHTML = show.name;
            article.appendChild(h2);

            const a = document.createElement("a");
            a.href = show.url;
            a.target = "_blank";
            a.innerHTML = "Details";
            article.appendChild(a);

            const img = document.createElement("img");
            img.src = show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
            img.alt = show.name;
            article.appendChild(img);

            if (show.summary) {
                const div = document.createElement("div");
                article.append(div);
                div.innerHTML = show.summary;
            }

            results.appendChild(article);
        });
    } catch (error) {
        console.log("Error:", error);
    }

});
