'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = 'Tanya',
    surname = 'Gavrilenko';

//create object with key->value
var data = {
    name: name,
    surname: surname,
    sayHello: function sayHello() {
        return 'Hello';
    },

    get fullName() {
        return this.name + ' ' + this.surname;
    },
    set fullName(val) {
        this.name = val.split(' ')[0];
        this.surname = val.split(' ')[1];
    }
};

console.log(data);
console.log(data.fullName);
data.fullName = 'Lukas Gavrilenko';
console.log(data.fullName);

//dynamical property creation
var car = createCar('lanos', 'Daewoo');
console.log(car);

function createCar(key, val) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, key, val), _defineProperty(_ref, key.toUpperCase(), val), _defineProperty(_ref, 'get_' + key, function () {
        return this[key];
    }), _ref;
}