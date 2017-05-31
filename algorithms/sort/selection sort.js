//сортировка пузырьком
let array = [2, 54, 89, 34, 86, 3, 76, 6, 7, 3, 9, 4, 65, 23];
let new_arr = [];

let num_of_elements = array.length;
let min, current;
console.log('num_of_elements ---- ' + num_of_elements);

for (let index_outer = 0; index_outer < num_of_elements; index_outer++) {
    console.log('index_outer ' + index_outer);
    for (let index_inner = index_outer; index_inner < num_of_elements; index_inner++) {
        console.log('value_inner ' + array[index_inner]);

        if(array[index_inner] < array[index_inner+1]){
            min = array[index_inner];
        }




    }
    console.log('min ' + min);
}


console.log(new_arr);

