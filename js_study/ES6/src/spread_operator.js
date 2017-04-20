//оператор разворота, превращает массив в значения

let a = [1,2,3];
let b = [4,5,6];

let c = [...a,...b];

console.log(c);

doSomething(...a);

function doSomething(a,b,c) {
    console.log(a+b+c);
}


