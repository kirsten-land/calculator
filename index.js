const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
  }
}

function getInputString(prompt) {
    console.log(prompt);
    return readline.prompt();
}

function getInputNumber(prompt) {
    let inputString = getInputString(prompt);
    let inputNum = +inputString;
    if (isNaN(inputNum)) {
        console.log('Please, we want a number. Try again.');
        return getInputNumber(prompt);
    } else {
        return inputNum;
    }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    return getInputString(
    `Which calculator mode do you want?
     1) Arithmetic
     2) Vowel counting`);
}

function performOneArithmeticCalculation(){
    const operator = getInputString('Please enter the operator: ');
    const number = getInputNumber(`How many numbers do you want to ${operator}?`);
    const inputNumbers = getNumbers(number);
    const answer = calculateResults(operator, number, inputNumbers);
    console.log(`The answer is: ${answer}`);
}

function getNumbers(number) {
    let inputArray = Array(number);
    for (let i = 0; i < number; i++) {
        inputArray[i] = getInputNumber(`Please enter number ${i+1}: `);
    }
    return inputArray;
}

function calculateResults(operator, number, inputNumbers) {
    let answer = inputNumbers[0];
    for (let i = 1; i < number; i++) {
        let nextNum = inputNumbers[i];
        switch (operator) {
            case '+':
                answer += nextNum;
                break;
            case '-':
                answer -= nextNum;
                break;
            case '*':
                answer *= nextNum;
                break;
            case '/':
                answer /= nextNum;
                break;
        }
    }
    return answer;
}

function performOneVowelCountingCalculation(){
    const inputString = getInputString("Please enter a string:").toUpperCase();
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