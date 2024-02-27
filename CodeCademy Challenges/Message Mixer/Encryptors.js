// Caesar Cipher function: Shifts alphabetical characters in a string by a specified amount.
// Parameters:
//   str: Input string to be encrypted.
//   amount: Number of positions to shift the characters. Defaults to 0.
const caesarCipher = (str, amount = 0) => {
    // Ensure a positive shift amount by converting negative values
    if (amount < 0) {
      return caesarCipher(str, amount + 26);
    }
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      // Check if the character is an alphabetical letter
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
  
        // Encrypt uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        } 
        // Encrypt lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      output += char;
    }
    return output;
  };
  
  // Symbol Cipher function: Replaces specific lowercase letters with corresponding symbols.
  // Parameters:
  //   str: Input string to be processed.
  const symbolCipher = (str) => {
    const symbols = {
      'i': '!',
      '!': 'i',
      'l': '1',
      '1': 'l',
      's': '$',
      '$': 's',
      'o': '0',
      '0': 'o',
      'a': '@',
      '@': 'a',
      'e': '3',
      '3': 'e',
      'b': '6',
      '6': 'b'
    };
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str.toLowerCase()[i];
  
      // Replace characters with symbols based on the predefined mapping
      if (symbols[char]) {
        output += symbols[char];
      } else {
        output += char;
      }
    }
    return output;
  };
  
  // Reverse Cipher function: Reverses the order of characters in each word of a sentence.
  // Parameters:
  //   sentence: Input sentence to be processed.
  const reverseCipher = (sentence) => {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      // Reverse the characters in each word
      words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
  };
  
  // Export the three encryption functions
  module.exports = {
    caesarCipher,
    symbolCipher,
    reverseCipher
  };
  