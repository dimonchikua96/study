'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello, name: ', ', surname: ', ''], ['Hello, name: ', ', surname: ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var text = 'iphone';
show(text);
add('5', 6);

function show(reklama) {
    console.log('\u0412\u0430\u0448\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430: ' + reklama);
    console.log(('\u0412\u0430\u0448\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430: ' + reklama).toUpperCase());
}

function add(x, y) {
    console.log('x+y=' + (parseInt(x) + parseInt(y)));
}

//тегирование, изменение вывода шабонов
var name = "Lukas";
var surname = "Gavrilenko";
var template = functionForTemplate(_templateObject, name, surname); //functionForTemplate - тег, название функции, которой будет обработан шаблон

console.log(template);

function functionForTemplate(literals, name, surname) {
    //literals - массив строковых литералов, остальные параметры - значения вычесляемых выражений
    //console.log(literals,name,surname);
    //values - остаточные параметры функции, в виде массива
    return literals[0] + name + literals[1] + surname;
}