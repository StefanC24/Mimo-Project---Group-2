const generate = document.getElementById("generate");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const screenshot = document.getElementById("screenshot");
const paragraph = document.getElementById("quote");
const author = document.getElementById("author");
const screenshotParagraph = document.getElementById("screenshotQuote");
const screenshotAuthor = document.getElementById("screenshotAuthor");
let list = [];
let currentQuoteIndex = 0;
let isNightModeOn = false;



function getQuote (){
    fetch("https://quotegenerator-help.netlify.app/api")
        .then(result => result.json())
        .then(data => {
            paragraph.innerHTML = data.content
            author.innerHTML = data.author
            screenshotParagraph.innerHTML = data.content
            screenshotAuthor.innerHTML = data.author
            list.push(data)
            currentQuoteIndex = list.length - 1

            screenshot.style.visibility = ("visible")

            if(list.length > 1){
                previous.style.visibility = ("visible")
            }
            next.style.visibility = ("hidden")
        })
    }


function nextQuote (){
    if(currentQuoteIndex === currentQuoteIndex - 1){
        return
    }
    currentQuoteIndex++
        
    paragraph.innerText = list[currentQuoteIndex].content;
    author.innerText = list[currentQuoteIndex].author;
    screenshotParagraph.innerText = list[currentQuoteIndex].content;
    screenshotAuthor.innerText = list[currentQuoteIndex].author;

    if(currentQuoteIndex == list.length - 1){
        next.style.visibility = ("hidden")
    }
    previous.style.visibility = ("visible");
}

function previousQuote (){

//once pressed the button the previous quote will be displayed
//create a currentIndex variable which will increment or decrement according to the pressed button
//once the generate button is clicked while in the middle of the array, the last item will be displayed
//if user clicks generate a new quote is generated and displayed
//if the user reaches the first quote an error message will display
//if the user reaches the last quote, an error message will be displayed
    if(currentQuoteIndex === 0){
        return
    }
    currentQuoteIndex--
    paragraph.innerText = list[currentQuoteIndex].content;
    author.innerText = list[currentQuoteIndex].author;
    screenshotParagraph.innerText = list[currentQuoteIndex].content;
    screenshotAuthor.innerText = list[currentQuoteIndex].author;

    next.style.visibility = ("visible")

    if(currentQuoteIndex < 1){
        previous.style.visibility = ("hidden")
    }

}

function downloadImage() {  
    html2canvas(document.querySelector('#capture')).then(function(canvas) {
        saveAs(canvas.toDataURL(), (author.innerHTML + '.png'));
    });
};

function saveAs(url, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(url);
    }
}

generate.onclick = getQuote;
next.onclick = nextQuote;
previous.onclick = previousQuote;
screenshot.onclick = downloadImage;


         //   Dark Mode stuff
function nightMode() {
if (isNightModeOn === false) {
    // document.documentElement.style.setProperty('transition', '2s');
    document.documentElement.style.setProperty('--Primary', '#FFF');
    document.documentElement.style.setProperty('--Secondary', '#000');
    //   document.querySelector("body").style.background = "var(--Black)";
    isNightModeOn = true
} else {
    //   document.querySelector("body").style.background = "var(--White)";
    document.documentElement.style.setProperty('--Primary', '#000');
    document.documentElement.style.setProperty('--Secondary', '#FFF');
    isNightModeOn = false
}
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    
})