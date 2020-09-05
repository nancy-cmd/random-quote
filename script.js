(function() {
    const quotes = [
        {
            quote:
            "The way to get started is to quit talking and begin doing.",
            author: "walt disney"
        },
        {
            quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
            author: "Winston Churchill"
        },
        {
            quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
            author: "Will Rogers"
        },
        {
            quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up..",
            author: "Vince Lombardi"
        },
        {
            quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.’t Let Yesterday Take Up Too Much Of Today.",
            author: "steve jobs"
        },
        {
            quote: "Creativity is intelligence having fun.",
            author: "Albert Einstein"
        }
    ];

    const btn = document.getElementById("generate-btn");
    
    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });

})();