let text = 'iphone';
show(text);
add('5',6);


function show(reklama) {
    console.log(`Ваша реклама: ${reklama}`);
    console.log(`Ваша реклама: ${reklama}`.toUpperCase());
}

function add(x,y) {
    console.log(`x+y=${parseInt(x)+parseInt(y)}`)
}


//тегирование, изменение вывода шабонов
let name = "Lukas";
let surname = "Gavrilenko";
let template = functionForTemplate `Hello, name: ${name}, surname: ${surname}`; //functionForTemplate - тег, название функции, которой будет обработан шаблон

console.log(template);

function functionForTemplate(literals, name, surname, ...values){
    //literals - массив строковых литералов, остальные параметры - значения вычесляемых выражений
    //console.log(literals,name,surname);
    //values - остаточные параметры функции, в виде массива
    return literals[0] + name+ literals[1] + surname;
}

