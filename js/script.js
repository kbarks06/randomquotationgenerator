function generateQuote() {
    const quotes = [
       { 
        quote: "It does not matter how slow you go as long as you do not stop", 
        author: "Confucius"
       },
       {
        quote: "In three words I can sum up everything about life: it goes on.",
        author: "Robert Frost"
       },
       {
        quote: "If you don't like the weather in New England, wait a minute",
        author: "Mark twain"
       },
       {
        quote: "Nothing is impossible, the world itself says 'I'm possible'",
        author: "Audry Hepburn"
       }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = "By: " + quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}