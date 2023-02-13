const generate = document.getElementById("generate");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const paragraph = document.getElementById("quote");
const author = document.getElementById("author");
let list = [];
let indexOfLastElement = list.length - 1;


function getQuote (){
    fetch("http://quotable.io/random")
        .then(result => result.json())
        .then(data => {
            paragraph.innerHTML = data.content
            author.innerHTML = data.author
            
            list.push(data)
            //this will push every generated quote to an array
    
            console.log(list)
        })
    }


function nextQuote (){
    paragraph.innerHTML = "The next quote will display here"
}

function previousQuote (){

//once pressed the button the previous quote will be displayed
//create a currentIndex variable which will increment or decrement according to the pressed button
//once the generate button is clicked while in the middle of the array, the last item will be displayed
//if user clicks generate a new quote is generated and displayed
//if the user reaches the first quote an error message will display
//if the user reaches the last quote, an error message will be displayed

    const lastElement = list[indexOfLastElement];
    console.log(list.length)
    console.log(lastElement.content)
    paragraph.innerText = lastElement.content;
    author.innerHTML = lastElement.author;

    
}



generate.onclick = getQuote;
next.onclick = nextQuote;
previous.onclick = previousQuote;