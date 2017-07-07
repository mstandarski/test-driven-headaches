function changeMachine(amount) {

  var Twenties = Math.floor(amount/20);
  var RemainderAfter20 = amount % 20;
  var Tens = Math.floor(RemainderAfter20/10);
  var RemainderAfter10 = RemainderAfter20 % 10;
  var Fives = Math.floor(RemainderAfter10/5);
  var RemainderAfter5 = RemainderAfter10 % 5;
  var Ones = RemainderAfter5;
  var billsArray =[Twenties, Tens, Fives, Ones]

  return billsArray;

};

module.exports = changeMachine;