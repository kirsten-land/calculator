const userInput = require('./userInput');

exports.performOneArithmeticCalculation = function(){
    const operator = userInput.getInputString('Please enter the operator: ');
    const number = userInput.getInputNumber(`How many numbers do you want to ${operator}?`);
    const inputNumbers = userInput.getNumbers(number);
    const answer = calculateResults(operator, number, inputNumbers);
    console.log(`The answer is: ${answer}`);
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