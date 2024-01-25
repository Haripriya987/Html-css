/* Temporal Dead Zone*/
//console.log(a); // ReferenceError: Cannot access 'a' before initialization .
let z = 10;
console.log(a);
var b = 20;
//const c;//Syntax error (Missing intializer in cost Declaration)
const c = 1000;
//c = 100; //Type error   (Assignment to const variables)
console.log(z); //Reference error //z is not defined

Closures;
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  //return a;
  a = 100;
  return y;
}
var z = x();
console.log(z);
z();
function z() {
  var b = 100;
  function x() {
    var a = 10;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
/*Sete timeout*/

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Time out Functions ");
}
x();

function z() {
  for (let q = 1; q <= 5; q++) {
    setTimeout(function () {
      console.log(q);
    }, q * 1000);
  }
  console.log("Reference is used not value in them");
}
z();

function z() {
  for (var q = 1; q <= 5; q++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(q);
  }
  console.log("Reference is used not value in them");
}
z();

let a = function () {
  console.log(a);
};
a();

//First - Execution context
console.log(n);

var n = 2;
function getSquare(n) {
  var ans = n * n;
  return ans;
}
var square = getSquare(n);
var value = getSquare(5);

console.log(value);

//second function works
var x = 1;
a();
b();

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
console.log(x);
var a;
console.log(a);
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is  defined");
}
if (x === undefined) {
  console.log("a is defined");
} else {
  console.log("a is not defined");
}

//Third one - scope
function a() {
  c();
  function c() {
    console.log(b);
  }
}
a();
var b = 10;
