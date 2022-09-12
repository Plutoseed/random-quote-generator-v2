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
let quotes = [{"Knowledge is power... and pain.": "Wraith", "Apex": "Source", "02/28/2022": "date"}, 
{"Start before you're ready. Don't prepare, begin": "Mel Robbins"}, 
{"There's not a single winner on Earth that took it easy": "Gary Vee"}, 
{"There is only one thing we say to death: Not today": "Syrio Forel"}, 
{"Always prefer the plain direct word to the long, vague one. Don't implement promises, but keep them.": "C.S. Lewis"}];


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
    let displayq =  quotes.myq;
    return displayq;   
  }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);