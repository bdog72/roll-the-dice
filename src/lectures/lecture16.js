
function calculateAge (yearOfBirth) {
  var age = 2016 - yearOfBirth
  return age
}
var ageJohn = calculateAge(1990 - 100)
var ageBrian = calculateAge(1952 * 2)
var ageMary = calculateAge(2000)
console.log(ageJohn)
console.log(ageBrian)
console.log(ageMary)

function yearsUntilRetirement (name, year) {
  var age = calculateAge(year)
  var retirement = 65 - age
  console.log(retirement)
}
yearsUntilRetirement('John', 1990)
