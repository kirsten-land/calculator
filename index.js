const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
  const calculationMode = userInput.getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    arithmetic.performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowelCounting.performOneVowelCountingCalculation();
  }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}