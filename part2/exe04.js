// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function primeNumber(n) {
  for (let i = 2; i < n; i++)
    if (n % i === 0) {
      return ` Esse numero não é primo!${n}`
    }

  return n
}

console.log(primeNumber(38))
console.log(primeNumber(7))
console.log(primeNumber(115))
console.log(primeNumber(2000))

//myFunction(38) | Expected 41
//myFunction(7) | Expected 7
//myFunction(115) | Expected 127
//myFunction(2000) | Expected 2003
