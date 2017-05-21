//* NUMBERS OF CALCULATOR *//
var displayArray = [];
var displayNumbers = "";
var clear = 0;
var myCalculator = calculator();
var numbersFknJoin = 0;

function numbersInNumberBox() {
  document.getElementById('displayTotal');
}

document.getElementById('seven').addEventListener('click', number7);

function number7() {
  document.getElementById('displayTotal').innerHTML += 7;
  displayArray.push(7);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
  // console.log(numbersFknJoin);
}

document.getElementById('eight').addEventListener('click', number8);
function number8() {
  document.getElementById('displayTotal').innerHTML += 8;
  displayArray.push(8);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('nine').addEventListener('click', number9);
function number9() {
  document.getElementById('displayTotal').innerHTML += 9;
  displayArray.push(9);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('four').addEventListener('click', number4);
function number4() {
  document.getElementById('displayTotal').innerHTML += 4;
  displayArray.push(4);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('five').addEventListener('click', number5);
function number5() {
  document.getElementById('displayTotal').innerHTML += 5;
  displayArray.push(5);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('six').addEventListener('click', number6);
function number6() {
  document.getElementById('displayTotal').innerHTML += 6;
  displayArray.push(6);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('one').addEventListener('click', number1);
function number1() {
  document.getElementById('displayTotal').innerHTML += 1;
  displayArray.push(1);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('two').addEventListener('click', number2);
function number2() {
  document.getElementById('displayTotal').innerHTML += 2;
  displayArray.push(2);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('three').addEventListener('click', number3);
function number3() {
  document.getElementById('displayTotal').innerHTML += 3;
  displayArray.push(3);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}

document.getElementById('zero').addEventListener('click', number0);
function number0() {
  document.getElementById('displayTotal').innerHTML += 0;
  displayArray.push(0);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);

  document.getElementById('doubleZero').addEventListener('click', numberDoubleZero);
function numberDoubleZero() {
  document.getElementById('displayTotal').innerHTML += 00;
  displayArray.push(00);
  var joinNumbers = displayArray.join('');
  numbersFknJoin = parseInt(joinNumbers);
}
}

//* OPERATOR BUTTONS *//
document.getElementById('add').addEventListener('click', addNums);

function addNums() {
  var test = myCalculator.add(numbersFknJoin);
  var anotherVar = myCalculator.getTotal();
  document.getElementById('displayTotal').innerHTML = [];
  // console.log(anotherVar);
};