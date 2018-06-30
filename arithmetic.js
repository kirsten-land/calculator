const userInput = require('./userInput');

exports.performOneArithmeticCalculation = function(){
    const operator = userInput.getInputString('Please enter the operator: ');
    const number = userInput.getInputNumber(`How many numbers do you want to ${operator}?`);
    const inputNumbers = userInput.getNumbers(number);
    try {
        const answer = calculateResults(operator, number, inputNumbers);
        console.log(`The answer is: ${answer}`);
    } catch (e) {
        if (e == "Unknown Operator") {
            console.log("This operator is not yet known, please try one of +-*/ next time.");
        }
    }
}

function calculateResults(operator, number, inputNumbers) {
    let operatorFunction;
    switch (operator) {
        case "+": operatorFunction = (a,b) => a+b; break;
        case "-": operatorFunction = (a,b) => a-b; break;
        case "*": operatorFunction = (a,b) => a*b; break;
        case "/": operatorFunction = (a,b) => a/b;
                  inputNumbers = [inputNumbers[0]].concat(inputNumbers.slice(1).filter(a => a/=0));
                  break;
        default:  throw "Unknown Operator";
    }
    const answer = inputNumbers.reduce(operatorFunction);
    return answer;
}