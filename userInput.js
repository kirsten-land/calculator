const readline = require('readline-sync');

exports.getInputString = function(prompt) {
    console.log(prompt);
    return readline.prompt();
}
 
exports.getInputNumber = function(prompt) {
    let inputString = exports.getInputString(prompt);
    let inputNum = +inputString;
    if (isNaN(inputNum)) {
        console.log('Please enter a valid number.');
        return exports.getInputNumber(prompt);
    } else {
        return inputNum;
    }
}

exports.getCalculationMode = function() {
    return exports.getInputString(
    `Which calculator mode do you want?
     1) Arithmetic
     2) Vowel counting`);
}