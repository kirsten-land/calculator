const userInput = require('./userInput');

exports.performOneArithmeticCalculation = function(){
    const operator = getOperator();
    console.log(operator);
    const number = getNumberOfOperands(operator);
    const inputNumbers = getOperands(number);
    const answer = calculateResults(operator, number, inputNumbers);
    console.log(`The answer is: ${answer}`);
}

function getOperator() {
    let operator = userInput.getInputString('Please enter the operator: ');
    switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*": return operator;
        default:  console.log("Please enter one of +-*/");
                  return getOperator();
    }
}

function getNumberOfOperands(operator){
    number = userInput.getInputNumber(`How many numbers do you want to ${operator}?`);
    if (number > 0 && Number.isInteger(number)) {
        return number;
    } else {
        console.log("Please enter a positive integer.");
        return getNumberOfOperands(operator);
    }
}

function getOperands(number) {
    let inputArray = Array(number);
    for (let i = 0; i < number; i++) {
        inputArray[i] = userInput.getInputNumber(`Please enter number ${i+1}: `);
    }
    return inputArray;
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