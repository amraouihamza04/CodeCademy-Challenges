///////////////// Whale Talk


let input = "Only Nasa In Casa";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// Create a loop to iterate through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
  // Check if the letter is 'e' and double it for whales.
  if (input[i].toLowerCase() === 'e') {
    resultArray.push(input[i]);
    resultArray.push(input[i]); // Double the 'e'
  }

  // Check if the letter is a vowel (original code for vowels).
  for (let j = 0; j < vowels.length; j++) {
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// Join the array elements into a single string and capitalize all letters.
let resultString = resultArray.join('').toUpperCase();

console.log("Result String: " + resultString);









// let input = "Only Nasa In Casa";
// const vowels = ["a", "e", "i", "o", "u"];
// let resultArray = [];
// //Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
// for (let i = 0; i < input.length; i++) {
//   // console.log("i is " + i); // log the iterator numbered position inside the for loop.
//   for (let j = 0; j < vowels.length; j++) {
//     // console.log("j is " + j);
//     if (input[i] === vowels[j]) {
//       resultArray.push(input[i]);
//       console.log(input[i]);
//     }
//   }
// }
// resultArray.push();
// if(input === 'e' && 'u' ){
//   resultArray.push(input[i]);
// }
// console.log(resultArray);
// let resultString = resultArray.join(" ").toUpperCase()
// console.log(resultString)