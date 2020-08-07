const quoteContainer = document.getElementById("quote-container");
const newQuote = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");

// get quotes from API
async function getQuote() {
  // get a proxy for API
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
  } catch (error) {
    getQuote();
  }
}
// calling function
getQuote();

newQuote.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
  author.innerHTML = quotes[number].name;
}
// tweeter button

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}
twitterBtn.addEventListener("click", tweetQuote);
