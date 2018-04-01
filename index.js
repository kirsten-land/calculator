const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================')

console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('Please enter the first number: ');
const num1_as_string = readline.prompt();
const num1 = +num1_as_string;

console.log('Please enter the second number: ');
const num2_as_string = readline.prompt();
const num2 = +num2_as_string;

var answer;
switch (operator) {
    case '+':
        answer = num1+num2;
        break;
    case '-':
        answer = num1-num2;
        break;
    case '*':
        answer = num1*num2;
        break;
    case '/':
        answer = num1/num2;
        break;
}

console.log('The answer is: ' + answer)