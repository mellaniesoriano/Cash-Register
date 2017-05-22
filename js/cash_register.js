var myCalculator = calculator();
var displayNums = '';
var operatorSymbol = '';

// EVERYTHING WILL BE STORED IN HERE
displayBox.innerHTML = displayNums;

//* When clicked the number will be displayed in the displayBox div && stored in displayNums. *//

// ONE
one.addEventListener('click', number1);
function number1() {
  displayNums = 1;
  displayBox.innerHTML += displayNums;
}
// TWO
two.addEventListener('click', number2);
function number2() {
  displayNums = 2;
  displayBox.innerHTML += displayNums;
}
// THREE
three.addEventListener('click', number3);
function number3() {
  displayNums = 3;
  displayBox.innerHTML += displayNums;
}
// FOUR
four.addEventListener('click', number4);
function number4() {
  displayNums = 4;
  displayBox.innerHTML += displayNums;
}
// FIVE
five.addEventListener('click', number5);
function number5() {
  displayNums = 5;
  displayBox.innerHTML += displayNums;
}
// SIX
six.addEventListener('click', number6);
function number6() {
  displayNums = 6;
  displayBox.innerHTML += displayNums;
}
// SEVEN
seven.addEventListener('click', number7);
function number7() {
  displayNums = 7;
  displayBox.innerHTML += displayNums;
}
// EIGHT
eight.addEventListener('click', number8);
function number8() {
  displayNums = 8;
  displayBox.innerHTML += displayNums;
}
// NINE
nine.addEventListener('click', number9);
function number9() {
  displayNums = 9;
  displayBox.innerHTML += displayNums;
}
// ZERO
zero.addEventListener('click', number0);
function number0() {
  displayNums = 0;
  displayBox.innerHTML += displayNums;
}
// DOUBLE ZERO
doubleZero.addEventListener('click', numberDblZero);
function numberDblZero() {
  displayNums = '00';
  displayBox.innerHTML += displayNums;
}
// DECIMAL POINT
decimal.addEventListener('click', decimalPoint);
function decimalPoint() {
  displayNums = '.';
  displayBox.innerHTML += displayNums;
}

//* OPERATOR BUTTONS *//
add.addEventListener('click', addNums);
divide.addEventListener('click', divideNums);
multiply.addEventListener('click', multiplyNums);
subtract.addEventListener('click', subtractNums);