function calculator() {
  var total = 0;
  var register = 0;
  var clear = '';

  function load(x) {
    total = x;
    return total;
  }

  function add(x, y) {
    total = x + y;
    return total;
  }

  function subtract(x, y) {
    total = x - y;
    return total;
   }

   function multiply(x, y) {
     total = x * y;
     return total;
   }

   function divide(x, y) {
     total = x / y;
     return total;
   }

   function recallMemory(){
    return register;
   }

   function saveMemory(){
    register += total;
    return register;
   }

   function deleteMemory() {
    register -= total;
    return register;
   }

   function clearMemory(){
    return clear;
   }

   return {
    load: load,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    deleteMemory: deleteMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
   };
 }