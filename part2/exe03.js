// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function create(s1, s2) {
  const firstString = s1.replace(/%/g, '')
  const secondString = s2.replace(/%/g, '').split('').reverse().join('')

  return console.log(firstString + secondString)
}
create('java', 'tpi%rcs')
create('c%ountry', 'edis')
create('down', 'nw%ot')

//myFunction('java', 'tpi%rcs') | Expected 'Javascript'
//myFunction('c%ountry', 'edis') | Expected 'Countryside'
//myFunction('down', 'nw%ot') | Expected 'Downtown'
