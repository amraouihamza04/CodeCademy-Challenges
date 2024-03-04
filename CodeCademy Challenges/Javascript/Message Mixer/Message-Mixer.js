// Import the encryption functions from encryptors.js
const encryptors = require('./Encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

// User Input / Output Logic
/////////////////////////////////////////////

// Get the encryption method based on user input
const encryptionMethod = getEncryptionMethod();

// Listen for user input and display encrypted message
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});

// Helper function to determine the encryption method
function getEncryptionMethod() {
  const encryptionType = process.argv[2];

  if (encryptionType === 'symbol') {
    return symbolCipher;
  } else if (encryptionType === 'reverse') {
    return reverseCipher;
  } else if (encryptionType === 'caesar') {
    const amount = Number(process.argv[3]);

    if (Number.isNaN(amount)) {
      console.log('Try again with a valid amount argument.');
      process.exit();
    }

    return (str) => caesarCipher(str, amount);
  } else {
    console.log('Try again with a valid encryption type.');
    process.exit();
  }
}

// Helper function to display the encrypted message
function displayEncryptedMessage(encryptionMethod, userInput) {
  const str = userInput.toString().trim();
  const output = encryptionMethod(str);
  console.log('\nHere is your encrypted message:');
  console.log(`> ${output}\n`);
  process.exit();
}
