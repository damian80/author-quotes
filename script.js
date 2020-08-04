const quotes = [{
        name: 'Derek Jeter',
        quote: 'There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do'
    },
    {
        name: 'Evander Holyfield',
        quote: 'It is not the size of a man but the size of his heart that matters.'
    },
    {
        name: 'Tim Notke',
        quote: 'Hard work beats talent when talent doesn’t work hard.'
    },
    {
        name: 'Michael Jordan',
        quote: 'Never say never because limits, like fears, are often just an illusion.'
    },
    {
        name: 'Dean Karnazes',
        quote: 'Run when you can, walk if you have to, crawl if you must; just never give up.'
    }

]

// targeting a button author and quote
const quoteBtn = document.querySelector('#new-quote');
const quoteAuthor = document.querySelector('#author');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQoute);

function displayQoute() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;


}