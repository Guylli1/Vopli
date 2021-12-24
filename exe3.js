function countMatches(str, re) {
  var counter

  counter = 0
  while (re.test(str)) {
    ++counter
  }
  return counter
}

var count = countMatches('Esse exercício foi de fuder!', /e/g)
console.log(count)
