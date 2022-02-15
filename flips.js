// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT
var STDOUT=coinFlip(n);
console.log(STDOUT);
console.log(countFlips(STDOUT));