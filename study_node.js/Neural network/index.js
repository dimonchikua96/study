var nn = require('nn');
var opts =
    {
        // hidden layers eg. [ 4, 3 ] => 2 hidden layers, with 4 neurons in the first, and 3 in the second.
        layers: [2, 5, 5, 1],
        // maximum training epochs to perform on the training data
        iterations: 50000,
        // maximum acceptable error threshold
        errorThresh: 0.0005,
        // activation function ('logistic' and 'hyperbolic' supported)
        activation: 'logistic',
        // learning rate
        learningRate: 0.6,
        // learning momentum
        momentum: 0.5,
        // logging frequency to show training progress. 0 = never, 10 = every 10 iterations.
        log: 0
    };

var net = nn(opts);

// this example shows how we could train it to approximate sin(x)
// from a random set of input/output data.
net.train([
    {input: [1], output: [1]},
    {input: [3], output: [2]},
    {input: [3], output: [1.5]},
    {input: [2], output: [1.5]},
    {input: [2], output: [1.5]},
    {input: [1], output: [1.5]},
    {input: [1], output: [1.6]}
]);

// send it a new input to see its trained output
var output = net.send([2]); // => 0.48031129953896595

console.log(output);

