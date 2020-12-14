// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

console.log(processFirstItem(['foo', 'bar'], function(str) { return str + str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 scenareo defines a local variable to the counterMaker function then returns the incrementer function which is saved to the variable counter1 so everytime counter1 is envoked it will increment that specific local variable refrences from the local scope function. The second counter uses a globally scoped variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The first one uses closure because it creates a local variable which when this function is utilized in via storage in a variable is specific to that instance. The global variable only allows for the one instance.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable in the situation where you needed to keep count of multiple non-related instances. The second would be prefereable if you needed only one instance of count that could be incremented from anywhere in the code base.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    return Math.floor(Math.random() * 3);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(innings, callback){
  let scoreResult = { Home: 0, Away: 0};
  for(let i = 0; i < innings; i++) {
    scoreResult.Home += callback();
    scoreResult.Away += callback();
  }
  return scoreResult;
}

console.log(finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

    
function getInningScore(callBack) {
  let theScore = 0;
  return function() {
    return theScore += callBack();
  }
  
}

function scoreboard(getInningScore, inning, numOfInnings) {
  let home = getInningScore(inning);
  let away = getInningScore(inning);
  let scoreByInning = '';
  for(let i = 1; i <= numOfInnings; i++) {
    switch(i) {
      case 1:
        scoreByInning += `1st Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 2:
        scoreByInning += `2nd Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 3:
        scoreByInning += `3rd Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 4:
        scoreByInning += `4th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 5:
        scoreByInning += `5th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 6:
        scoreByInning += `6th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 7:
        scoreByInning += `7th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 8:
        scoreByInning += `8th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      case 9:
        scoreByInning += `9th Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
      default:
        scoreByInning += `${i} Inning: Away: ${away()} - Home: ${home()}\n`;
        break;
    }
  }
  return scoreByInning;
}

console.log(scoreboard(getInningScore, inning, 8));