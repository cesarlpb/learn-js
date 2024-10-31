// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);
  
  net.train([{
      input: [0, 0],
      output: [0]
    },
    {
      input: [0, 1],
      output: [1]
    },
    {
      input: [1, 0],
      output: [1]
    },
    {
      input: [1, 1],
      output: [0]
    }
  ]);
  
  const output = net.run([1, 0]); // [0.9...]
  console.log(1, 0, "salida:", output[0], Math.round(output[0])) // cerca a 1

  const output2 = net.run([0, 1]); // [0.9...]
  console.log(0, 1, "salida:", output2[0], Math.round(output[0])) // 1

  const output3 = net.run([1, 1]); // [0.0...]
  console.log(1, 1, "salida:", output3[0], Math.round(output3[0])) // 0

  const output4 = net.run([0, 0]); // [0.0...]
  console.log(0, 0, "salida:", output4[0], Math.round(output4[0])) // 0