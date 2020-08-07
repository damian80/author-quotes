const quoteContainer = document.getElementById("quote-container");
const newQuote = document.getElementById("new-quote");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const loader = document.getElementById("loader");

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// hide loading
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden;
  }
}

// get quotes from API
loading();
async function getQuote() {
  // get a proxy for API
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    authorText.innerText = data.quoteAuthor;
    quoteText.innerText = data.quoteText;
    // stop loader,show quote
    complete();
  } catch (error) {
    getQuote();
  }
}

// twitter button

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

newQuote.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// calling function
getQuote();
