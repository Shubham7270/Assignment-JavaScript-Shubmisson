const prompt = require("prompt-sync")();
const number = prompt("Enetr a Numner");

if (number % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is Odd");
}
