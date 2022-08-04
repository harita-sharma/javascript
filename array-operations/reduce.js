const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(first, second) {
  return first + second;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);
 