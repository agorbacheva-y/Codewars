// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one 
//in the binary representation of that number. 
//You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, 
//so the function should return 5 in this case

function bitCount(number) {
  let count = 0;
  let binary = number.toString(2);
  
  let binaryArray = binary.split('');
  console.log(binaryArray);

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] = '1') count ++;
    return count;
  }

  console.log(count);

};

bitCount(1234);