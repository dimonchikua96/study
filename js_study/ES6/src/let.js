//в es5 было две области видимости, глобальная и область видимости функции
//но добавилать область видимости блока кода, тоесть {}
//переменная не поднимается, до момента ее обьявления

if(true){
    var a = 'ES5'
}

console.log(a);


if(true){
    let b = 'ES5'
}

//console.log(b); //не сработает

console.log('var i----');
for (var i = 0; i<2; i++){
    console.log(i);
}
console.log(i);

console.log('let i----');
for (let i = 0; i<1; i++){
    console.log(i);
}
console.log(i);