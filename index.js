const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');
while (true) {
    const operator = getInputString('Please enter the operator: ');
    const number = getInputNumber(`How many numbers do you want to ${operator}?`);
    const inputNumbers = getNumbers(number);
    const answer = calculateResults(operator, number, inputNumbers);
    console.log(`The answer is: ${answer}`);
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