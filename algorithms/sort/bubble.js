//сортировка пузырьком
let array = [2, 54, 89, 34, 86, 3, 76, 6, 7, 3, 9, 4, 65, 23];

let num_of_elements = array.length;
console.log('num_of_elements ---- ' + num_of_elements);

for (let num = 0; num < num_of_elements; num++) {
    for (let index_in = num_of_elements - 1; num <= index_in - 1; index_in--) {
        if (array[index_in] < array[index_in - 1]) {
            let curr = array[index_in];
            array[index_in] = array[index_in - 1];
            array[index_in - 1] = curr;
        }
    }
}


console.log(array);

