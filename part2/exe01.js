// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function words(a, b) {
  const concString = a + b
  if (concString.length === 10) return console.log(concString)

  return console.log(b + a)
}
words('cheese', 'cake')
words('lips', 's')
words('Java', 'script')
words(' think, therefore I am', 'I')

//myFunction('cheese', 'cake') | Expected 'cheesecake'
//myFunction('lips', 's') | Expected 'slips'
//myFunction('Java', 'script') | Expected 'Javascript'
//myFunction(' think, therefore I am', 'I') | Expected 'I think, therefore I am'
