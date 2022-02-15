// Import the coinFlip function from your coin.mjs file
import {coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";
// Call the coinFlip function and put the return into STDOUT
var argv = minimist(process.argv.slice(2));
var number=argv["number"]
if(number==undefined){
    number=1;
}

var flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips));