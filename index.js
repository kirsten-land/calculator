const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================')

console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + '?');
const n = readline.prompt();

console.log('Please enter number 1: ');
var firstInput = readline.prompt();
var answer = +firstInput;

for (var i = 2; i <= n; i++) {
    console.log('Please enter number ' + i + ': ');
    var nextInput = readline.prompt();
    var nextNum = +nextInput;
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

console.log('The answer is: ' + answer)