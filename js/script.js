/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
let quotes = [{
  quote : 'Hard times create strong men, strong men create good times, good times create weak men, weak men create hard times',
  source : 'G. Michael Hopf',
  citation: 'Those Who Remain',
  year: '12/06/16'
},
{
  quote : 'The ability to learn faster than your competitors may be the only sustainable competitive advantage',
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
    },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let ranNum =  Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}


/***
 * `printQuote` function
***/
 function printQuote() {
    let myq = getRandomQuote();

 
=======
  let displayQ = `
  <p class="quote"> ${myq.quote} </p> 
  <p class="source"> ${myq.source} </p>
  `;
  return displayQ; 
  } ;

  if (printQuote() === quotes.citation) {
    
  }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);