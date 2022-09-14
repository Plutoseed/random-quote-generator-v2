/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * HERE'S AN ARRAY OF QUOTES STORED WITHIN A VARIABLE. 
 * EACH QUOTE IS REPRESENTED AS AN JS OBJECT  
***/
let quotes = [{
  quote : 'Hard times create strong men, strong men create good times, good times create weak men, weak men create hard times.',
  source : 'G. Michael Hopf',
  citation: 'Those Who Remain',
  year: '12/06/16'
},
{
  quote : 'The ability to learn faster than your competitors may be the only sustainable competitive advantage.',
  source : 'Arie de Geus', 
},
{
quote : 'Setting a goal is not the main thing. It is deciding how you will go about achieving it and staying with that plan.', 
source : 'Tom Landry', 
},
{
  quote : 'There is no coincidence that stability brings success, and success brings stability.', 
  source : 'Robert Green', 
  },
  {
    quote : 'A man without self-control is like a city broken into and left without walls.', 
    source : 'Bible', 
    }
];


/***
 * THIS FUNCTION RETURNS A RANDOM OBJECT WHICH HOUSES QUOTES! 
***/
function getRandomQuote() {
  //We declared a variable that holds a method that will store a random object from the 'quotes' array!
  let ranNum =  Math.floor(Math.random() * quotes.length);
  //Below we are returning the random object chosen. 
  return quotes[ranNum];
}


/***
 * THIS FUNCTION CALLS THE GET RANDOM QUOTE FUNCTION AND DISPLAYS IT ON THE SCREEN VIA HTML
***/
 function printQuote() {
  // This variable holds the getRandomQuote function above, it will call the function and store the outcome. 
    let myq = getRandomQuote();
    // Here the displayQ variable will access the HTML and create a new string that will display a given quote and the source a long with it. 
  let displayQ = `
  <p class="quote"> ${myq.quote} </p> 
  <p class="source"> ${myq.source}`;
    // Some of the quotes may have a citation or a given year the quote was written, here I've created if statements that basically states if a given quote has a citation or year then we concatenate that name to value pair into our string. 
    // This will also display with the quote via HTML.
  if (myq.citation) {
    displayQ += ` <span class='citation'> ${myq.citation} </span>`;

  }
  if (myq.year) {
    displayQ += ` <span class='year'> ${myq.year} </span>` + `</p>`;
  }
  return document.getElementById('quote-box').innerHTML = `${displayQ}`; 
  }  ;


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);