const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Enter your first number:');
const num1 = parseFloat(readline.prompt());
console.log('Enter your second number:');
const num2 = parseFloat(readline.prompt());
console.log('Their product is', num1*num2);