hello('Lukas', 'Gavrilenko');
hello('Lukas');


//default parameters
function hello(name = '', surname = '') {
    console.log(`Hello ${name} ${surname}`)
}

//оставшиеся параметры
console.log(sum(1, 2, 3, 4));
console.log(sum1(1, 2, 3, 4));
function sum(...values) {
    let sum = 0;
    values.forEach(function (val, key, arr) {
        sum += val;
    });
    return sum;
}
//еще один вариант
function sum1(...values) {
   return values.reduce(function (prevVal, currVal) {
        return prevVal + currVal;
    });
}
