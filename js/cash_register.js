document.getElementById('seven').addEventListener('click', number7);
function number7() {
  document.getElementById('displayTotal').innerHTML += 7;
}

document.getElementById('eight').addEventListener('click', number8);
function number8() {
  document.getElementById('displayTotal').innerHTML += 8;
}

document.getElementById('nine').addEventListener('click', number9);
function number9() {
  document.getElementById('displayTotal').innerHTML += 9;
}

document.getElementById('four').addEventListener('click', number4);
function number4() {
  document.getElementById('displayTotal').innerHTML += 4;
}

document.getElementById('five').addEventListener('click', number5);
function number5() {
  document.getElementById('displayTotal').innerHTML += 5;
}

document.getElementById('six').addEventListener('click', number6);
function number6() {
  document.getElementById('displayTotal').innerHTML += 6;
}

document.getElementById('one').addEventListener('click', number1);
function number1() {
  document.getElementById('displayTotal').innerHTML += 1;
}

document.getElementById('two').addEventListener('click', number2);
function number2() {
  document.getElementById('displayTotal').innerHTML += 2;
}

document.getElementById('three').addEventListener('click', number3);
function number3() {
  document.getElementById('displayTotal').innerHTML += 3;
}

document.getElementById('zero').addEventListener('click', number0);
function number0() {
  document.getElementById('displayTotal').innerHTML += 0;

  document.getElementById('doubleZero').addEventListener('click', numberDoubleZero);
function numberDoubleZero() {
  document.getElementById('displayTotal').innerHTML += 00;
}
}