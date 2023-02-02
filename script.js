const generate = document.getElementById("generate");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const paragraph = document.getElementById("quote");
const author = document.getElementById("author");

function getQuote (){
    fetch("http://quotable.io/random")
        .then(result => result.json())
        .then(data => {
            paragraph.innerHTML = data.content
            author.innerHTML = data.author
        })
}

function nextQuote (){
    paragraph.innerHTML = "The next quote will display here"
}

function previousQuote (){
    paragraph.innerHTML = "The previous quote will display here"
}

generate.onclick = getQuote;
next.onclick = nextQuote;
previous.onclick = previousQuote;