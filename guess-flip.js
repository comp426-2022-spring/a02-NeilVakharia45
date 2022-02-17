// Import the coinFlip function from your coin.mjs file
import {coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var argv = minimist(process.argv.slice(2));
var call=argv["call"];
if(call==undefined || (call!="heads" && call!="tails")){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else{
    var output;
    var result = "lose";
    var flip = coinFlip();

    if(call==flip){
        result="win";
    }
    output={call: call, flip: flip, result: result}
    console.log(output);
}