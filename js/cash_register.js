var myCalculator = calculator();
var displayNums = '';
var operatorSymbol = '';

// EVERYTHING WILL BE STORED IN HERE
displayBox.innerHTML = displayNums;

// NUMBER BUTTONS - When clicked the number will be displayed in the displayBox div && stored in displayNums. *//
// ONE
one.addEventListener('click', number1);
function number1() {
  displayNums = 1;
  displayBox.innerHTML += displayNums;
  num1 += 1;
}
// TWO
two.addEventListener('click', number2);
function number2() {
  displayNums = '2';
  displayBox.innerHTML += displayNums;
  num1 += '2';
}
// THREE
three.addEventListener('click', number3);
function number3() {
  displayNums = 3;
  displayBox.innerHTML += displayNums;
  num1 += 3;
}
// FOUR
four.addEventListener('click', number4);
function number4() {
  displayNums = '4';
  displayBox.innerHTML += displayNums;
  num1 += '4';
}
// FIVE
five.addEventListener('click', number5);
function number5() {
  displayNums = 5;
  displayBox.innerHTML += displayNums;
  num1 += 5;
}
// SIX
six.addEventListener('click', number6);
function number6() {
  displayNums = 6;
  displayBox.innerHTML += displayNums;
  num1 += 6;
}
// SEVEN
seven.addEventListener('click', number7);
function number7() {
  displayNums = 7;
  displayBox.innerHTML += displayNums;
  num1 += 7;
}
// EIGHT
eight.addEventListener('click', number8);
function number8() {
  displayNums = 8;
  displayBox.innerHTML += displayNums;
  num1 += 8;
}
// NINE
nine.addEventListener('click', number9);
function number9() {
  displayNums = 9;
  displayBox.innerHTML += displayNums;
  num1 += 9;
}
// ZERO
zero.addEventListener('click', number0);
function number0() {
  displayNums = 0;
  displayBox.innerHTML += displayNums;
  num1 += 0;
}
// DOUBLE ZERO
doubleZero.addEventListener('click', numberDblZero);
function numberDblZero() {
  displayNums = '00';
  displayBox.innerHTML += displayNums;
  num1 += '00';
}
// DECIMAL POINT
decimal.addEventListener('click', decimalPoint);
function decimalPoint() {
  displayNums = '.';
  displayBox.innerHTML += displayNums;
  num1 += '.';
}

//* OPERATOR BUTTONS *//
// ADD
add.addEventListener('click', addNums);
function addNums() {
  displayNums += '+';
  displayBox.innerHTML = displayNums;
  num1 = '';
  num2 = displayNums;
  operatorSymbol = '+';
}

equals.addEventListener('click', result);
function result() {
  var firstNum = parseFloat(num1);
  var secondNum = parseFloat(num2);
  if (operatorSymbol === '/') {
    displayNums = myCalculator.divide(firstNum, secondNum);
    displayBox.innerHTML = displayNums;
  } else if (operatorSymbol === '*') {
    displayNums = myCalculator.multiply(firstNum, secondNum);
    displayBox.innerHTML = displayNums;
  } else if (operatorSymbol === '-') {
    displayNums = myCalculator.subtract(firstNum, secondNum);
    displayBox.innerHTML = displayNums;
  } else if (operatorSymbol === '+') {
    displayNums = myCalculator.add(firstNum, secondNum);
    displayBox.innerHTML = displayNums;
  }
}

// divide.addEventListener('click', divideNums);
// multiply.addEventListener('click', multiplyNums);
// subtract.addEventListener('click', subtractNums);

// CLEAR DISPLAY
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
  displayNums = myCalculator.clearMemory();
  displayBox.innerHTML = displayNums;
}

// GET BALANCE
getBalance.addEventListener('click', getMemory);

function getMemory() {
  displayNums = myCalculator.recallMemory();
}

// DEPOSIT
depositCash.addEventListener('click', depositGalleons);

function depositGalleons() {
  displayNums = myCalculator.saveMemory();
  displayBox.innerHTML = '';
}

// WITHDRAW
function withdrawGalleons() {
  displayNums = myCalculator.saveMemory();
  displayBox.innerHTML = '';
}

