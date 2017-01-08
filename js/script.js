
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

//Sets up interval to show print qutoe every 15 seconds
var intervalID = window.setInterval(myCallback, 15000);
function myCallback() {
  printQuote();
}

// Gets a random quote from array Quotes
function getRandomQuote () {
  var pickQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return pickQuote;
}

//prints quote to html
function printQuote() {
  var getQuote = getRandomQuote();
  var message = '';
  message += '<p class ="quote">' + getQuote.quote  + '</p>';
  message += '<p class ="source">' + getQuote.source  + '</p>';
  message += '<p class ="tag">' + getQuote.tag  + '</p>';
  document.getElementById('quote-box').innerHTML = message;
  newColor();
}
// function that will generate random color to the backgroun
var newColor = function randomColor() {
  document.body.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
