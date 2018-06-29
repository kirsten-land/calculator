const userInput = require('./userInput');

exports.performOneVowelCountingCalculation = function(){
    const inputString = userInput.getInputString("Please enter a string:").toUpperCase();
    vowelCount = countVowels(inputString);
    printVowelCount(vowelCount);
}

function countVowels(inputString) {
    const length = inputString.length;
    let vowelCount = {A:0, E:0, I:0, O:0, U:0};
    for (let i = 0; i < length; i++) {
        for (let vowel in vowelCount) {
            if (vowel == inputString[i]) {
                vowelCount[vowel] += 1;
            }
        }
    }
    return vowelCount;
}

function printVowelCount(vowelCount) {
    console.log("The vowel counts are:");
    for (let vowel in vowelCount) {
        console.log(`${vowel}: ${vowelCount[vowel]}`);
    }
}