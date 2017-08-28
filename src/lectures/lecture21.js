
// for (var i = 0; i < 11; i++) {
//   console.log(i)
// }
//
// var names = ['Bdog', 'Brian', 'Molly', 'Moo', 'Crystal']
// for (var a = 0; a < names.length; a++) {
//   console.log(names[a])
// }
// for (var b = names.length - 1; b >= 0; b--) {
//   console.log(names[b])
// }

function printFullAge (years) {
  var ages = []
  var fullAges = []
  for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i]
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('person ' + (i + 1) + ' is ' + ages[i] + 'years old, and is of full age')
      fullAges.push(true)
    } else {
      console.log('person ' + (i + 1) + ' is ' + ages[i] + 'years old, and is not of full age')
      fullAges.push(false)
    }
  }
  return fullAges
}

var years = [2001, 1985, 1994, 2014, 1973]
var full_1 = printFullAge(years)
var full_2 = printFullAge([2012, 1915, 1999])
