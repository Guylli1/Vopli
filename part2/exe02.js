// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function numbers(x) {
  return x.toString().split('')
}
console.log(numbers(10))
console.log(numbers(931))
console.log(numbers(193278))

// myFunction(10) | Expected [1,0]
// myFunction(931) | Expected [9,3,1]
// myFunction(193278) | Expected [1,9,3,2,7,8]
