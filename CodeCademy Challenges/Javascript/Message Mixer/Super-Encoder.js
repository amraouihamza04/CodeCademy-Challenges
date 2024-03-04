// Import the encryptors functions from encryptors.js
const encryptors = require('./Encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

// Function to encode a message using the encryptor functions
const encodeMessage = (str) => {
  // Choose a number between 0 and 26 for the caesarCipher function
  const caesarAmount = 5; // You can choose any number here

  // Apply encryption methods in a specific order
  const step1 = caesarCipher(str, caesarAmount);
  const step2 = symbolCipher(step1);
  const finalResult = reverseCipher(step2);

  return finalResult;
};

// Function to decode a message using the encryptor functions
const decodeMessage = (str) => {
  // Choose the negative of the encoding amount for decoding
  const caesarAmount = -5;

  // Apply decryption methods in the reverse order of encoding
  const step1 = reverseCipher(str);
  const step2 = symbolCipher(step1);
  const finalResult = caesarCipher(step2, caesarAmount);

  return finalResult;
};

// Function to handle user input and decide whether to encode or decode
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;

  // Check the command line argument to determine whether to encode or decode
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } else if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } else {
    console.log('Invalid command. Use "encode" or "decode".');
    process.exit();
  }

  // Display the result and exit the process
  console.log(output);
  process.exit();
};

// Run the program: Prompt the user to enter a message
console.log('Enter the message you would like to process...');
process.stdin.on('data', handleInput);
