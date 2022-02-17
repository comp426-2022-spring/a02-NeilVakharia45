// Import the coinFlip function from your coin.mjs file
import {coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";
// Call the coinFlip function and put the return into STDOUT

var number = 1;
if(process.argv.length >= 3){
    var argv = minimist(process.argv.slice(2));
    number=argv["number"]
}

var flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips));