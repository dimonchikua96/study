'use strict';

hello('Lukas', 'Gavrilenko');
hello('Lukas');

//default parameters
function hello() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var surname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    console.log('Hello ' + name + ' ' + surname);
}

//оставшиеся параметры
console.log(sum(1, 2, 3, 4));
console.log(sum1(1, 2, 3, 4));
function sum() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (val, key, arr) {
        sum += val;
    });
    return sum;
}
//еще один вариант
function sum1() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    return values.reduce(function (prevVal, currVal) {
        return prevVal + currVal;
    });
}