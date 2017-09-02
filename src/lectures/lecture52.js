console.log('dork')

// var brian = {
//   name: 'Brian',
//   yearOfBirth: 1972,
//   job: 'programmer'
// }

var Person = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person.prototype.calculateAge = function () {
  console.log(2017 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

var brian = new Person('Brian', 1972, 'programmer')
var jane = new Person('Jane', 1990, 'designer')
var mark = new Person('Mark', 1980, 'retired')

brian.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(brian.lastName)
console.log(jane.lastName)
console.log(mark.lastName)
