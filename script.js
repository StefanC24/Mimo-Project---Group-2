const generate = document.getElementById("generate");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const paragraph = document.getElementById("quote");

function getQuote (){
    paragraph.innerHTML = "The quote will display here"
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