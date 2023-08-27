// Create a function that takes an integer as an 
// argument and returns "Even" for even numbers 
// or "Odd" for odd numbers.

function isEven(int) {
  if (int % 2 == 0) {
    console.log("Even");
  } else if (int % 2 == 1 || int % 2 == -1) {
    console.log("Odd");
  } else {
    console.log("Please enter a valid number.")
  }
};

isEven(8);
isEven(9);
isEven("hi");
isEven(-8);
isEven(-7);

// BEST PRACTICE
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}