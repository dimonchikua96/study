"use strict";

//оператор разворота, превращает массив в значения

var a = [1, 2, 3];
var b = [4, 5, 6];

var c = [].concat(a, b);

console.log(c);

doSomething.apply(undefined, a);

function doSomething(a, b, c) {
    console.log(a + b + c);
}