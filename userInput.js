const readline = require('readline-sync');

exports.getInputString = function(prompt) {
    console.log(prompt);
    return readline.prompt();
}
 
exports.getInputNumber = function(prompt) {
    let inputString = exports.getInputString(prompt);
    let inputNum = +inputString;
    if (isNaN(inputNum)) {
        console.log('Please, we want a number. Try again.');
        return getInputNumber(prompt);
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

exports.getNumbers = function(number) {
    let inputArray = Array(number);
    for (let i = 0; i < number; i++) {
        inputArray[i] = exports.getInputNumber(`Please enter number ${i+1}: `);
    }
    return inputArray;
}