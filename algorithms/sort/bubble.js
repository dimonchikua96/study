let array = [2, 54, 6, 7, 3, 9, 4, 65, 23];
let num_iterations = array.length - 1;
let step = 0;
for (num_iterations; num_iterations > 0; num_iterations--) {
    console.log(`num_iterations = ${num_iterations}`);
    let iteration = Number(num_iterations);
    for (iteration; iteration > step; iteration--) {

        console.log(`iteration = ${iteration}`);
        let current_value = array[iteration];
        let next_value = array[iteration - 1];


        console.log(`current_value = ${current_value}`);
        console.log(`next_value = ${next_value}`);

        if (current_value < next_value) {
            array[iteration - 1] = current_value;
            array[iteration] = next_value;
        }
    }
    step++;
}


console.log(array);

